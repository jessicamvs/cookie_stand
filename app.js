var hours = ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
var tableEl = document.getElementById('myStores');

function Store(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalDemand = 0;
  this.demands = [];
}

Store.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Store.prototype.hourlyDemand = function(hrArr, dmndArr, rand, min, max, avg, total) {
  for(hour in hrArr) {
    dmndArr.push(Math.floor(rand(min, max) * avg));
    total += dmndArr[hour];
  }
  return total;
};


(Store.renderTable = function() {
  // Create a table element using the global var `tbl` and assign it an id attribute

  // Create your first row and empty `th` for the hours, and put them together
  var trHeader = document.createElement('tr');
  var thEmpty = document.createElement('th');
  trHeader.appendChild(thEmpty);

  for(idx in hours) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[idx];
    trHeader.appendChild(thEl);
  }

  var thTotals = document.createElement('th');
  thTotals.textContent = 'Totals';
  trHeader.appendChild(thTotals);
  tableEl.appendChild(trHeader);
  // Step into a for loop and populate your times in that first row
  // Finish the first row with a `th` for Totals, and append everything to the table
  // Notice that this is inside an IIFE... It will run on page load and set up the table every time.
  // You do not have access to this method in the global scope.
})();

//This is from last assignment with lists

// Store.prototype.render = function() {
//   this.totalDemand = this.hourlyDemand(hours, this.demands, this.generateRandom, this.minCust, this.maxCust, this.avgCookie, this.totalDemand);
//
//   var sectionEl = document.getElementById('stores');
//   var newStoreSection = document.createElement('section');
//   newStoreSection.textContent = this.storeName;
//   sectionEl.appendChild(newStoreSection);
//   var ulEl = document.createElement('ul');
// //This creates li for each hour and appends it to the ul we created above
//   for(hour in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[hour] + ': ' + this.demands[hour];
//     ulEl.appendChild(liEl);
//   }
// //This creates and li for totalDemand and appends it to the ul created above
// //then appends it to the existing section within our HTML.
//   liEl = document.createElement('li');
//   liEl.textContent = 'Total: ' + this.totalDemand;
//   ulEl.appendChild(liEl);
//   sectionEl.appendChild(ulEl);
// };

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTacAirport = new Store('SeaTac Airport', 6, 24, 1.2);
var southcenter = new Store('Souchcenter', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

// var stores = [pikePlace, seaTacAirport, southcenter, bellevueSquare, alki];
// for(idx in stores) {
//   stores[idx].render();
// }
