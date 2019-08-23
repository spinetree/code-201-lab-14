'use strict';



var hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm ', '8pm '];

var sumStore = ['Total '];

// All properties and values in each Object.

var allStores = [];



// ======================================================================

// Constructor Object : Store





function Store(name, minCustomer, maxCustomer, aveSales) {

  this.name = name;

  this.minCustomer = minCustomer;

  this.maxCustomer = maxCustomer;

  this.aveSales = aveSales;

  this.totalSales = [];

  this.randomCust = function() {

    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer + 1;

  };

  this.generateSales = function() {

    for (var i = 1; i <= 15; i ++) {

      var simulatedSales = Math.round(this.randomCust(this.minCustomer, this.maxCustomer) * this.aveSales);

      this.totalSales.push(simulatedSales);

    }

  };

  this.fillCells = function() {

    // Create table data with store location in first column.

    var sum = 0;



    var tbody = document.getElementById('table-body');

    var tr = document.createElement('tr');

    var td = document.createElement('td');

    td.textContent = this.name;



    tr.appendChild(td);





    // Create sales data in following columns.

    for (var i = 0 ; i < this.totalSales.length; i++) {



      var td2 = document.createElement('td');

      td2.textContent = this.totalSales[i];



      tr.appendChild(td2);

    }



    tbody.appendChild(tr);



    // Add sum of each store to the end of the column.

    for (var x = 0; x < this.totalSales.length; x++) {

      sum += parseInt(this.totalSales[x]);

    }



    var sum1 = document.createElement('td');

    sum1.textContent = sum;



    tr.appendChild(sum1);

    tbody.appendChild(tr);

  };



  allStores.push(this);

  this.generateSales();

}



new Store('1st and Pike', 23, 65, 6.3);

new Store('SeaTac Airport', 3, 24, 1.2);

new Store('Seattle Center', 11, 38, 3.7);

new Store('Capitol Hill', 20, 38, 2.3);

new Store('Alki', 2, 16, 4.6);





// ======================================================================

// Use the same route of Section > table then create route of > table > then to tr > td. Fill in cells with array of Sales for each store.



function fillHead() {



  var table = document.getElementById('table-locations');



  // Create elements going down from table > thead > tr > th then use for loop to put hours in table head.



  var thead = document.getElementById('table-head');

  var tr = document.createElement('tr');



  hours.unshift('Locations / Hours');



  for (var i = 0 ; i < hours.length; i++) {

    var th = document.createElement('th');

    th.textContent = hours[i];

    tr.appendChild(th);

  }



  var th2 = document.createElement('th');

  th2.textContent = sumStore;



  tr.appendChild(th2);



  thead.appendChild(tr);

  table.appendChild(thead);

}



function fillEndSum() {



  // Grab all the hourly sales from each store, and sum all the stores' hourly sales hour by hour.

  var tbody = document.getElementById('table-body');

  var endTr = document.createElement('tr');



  var lastRow = document.createElement('td');

  lastRow.textContent = 'Total Sales per Hour';

  endTr.appendChild(lastRow);

  tbody.appendChild(endTr);



  for (var i = 0; i < hours.length-1; i++) {

    var hourSales = document.createElement('td');



    var sumEnd = 0;

    for (var x = 0; x < allStores.length; x++) {

      sumEnd += parseInt(allStores[x].totalSales[i]);

    }



    hourSales.textContent = sumEnd;

    endTr.appendChild(hourSales);

    tbody.appendChild(endTr);

  }

}



function initialize () {

  for (var i = 0; i < allStores.length; i++) {

    allStores[i].fillCells();

  }

}



fillHead();

initialize();

fillEndSum();





// ======================================================================

// Create a form to take input on store locations and sales per hour for the new store.





function formData(event) {

  event.preventDefault();

  var store = event.target.store.value;

  var minCustomer = event.target.minCustomer.value;

  var maxCustomer = event.target.maxCustomer.value;

  var aveSales = event.target.aveSales.value;



  new Store(store, minCustomer, maxCustomer, aveSales);

  reprint();

  form.reset();

}



function reprint() {

  var tbody = document.getElementById('table-body');

  tbody.innerHTML = '';

  initialize();

  fillEndSum();

}





var form = document.getElementById('sales_form');

form.addEventListener('submit', formData);