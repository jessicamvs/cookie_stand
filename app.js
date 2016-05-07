var hours = ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
var tableEl = document.getElementById('myStores');
var shops = [];

function Store(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalDemand = 0;
  this.demands = [];
  shops.push(this);
}

Store.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Store.prototype.hourlyDemand = function() {
  for (hour in hours) {
    this.demands.push(Math.floor(this.generateRandom(this.minCust, this.maxCust) * this.avgCookie));
    this.totalDemand += this.demands[hour];
  };
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTacAirport = new Store('SeaTac Airport', 6, 24, 1.2);
var southcenter = new Store('Souchcenter', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

(Store.renderTable = function() {
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

  for (idx in shops) {
    shops[idx].hourlyDemand();

    var trStoreEl = document.createElement('tr');
    var thStoreEl = document.createElement('th');
    thStoreEl.textContent = shops[idx].storeName;
    trStoreEl.appendChild(thStoreEl);

    for (hour in hours) {
      var tdSalesEl = document.createElement('td');
      tdSalesEl.textContent = shops[idx].demands[hour];
      trStoreEl.appendChild(tdSalesEl);
    }

    var tdTotalSalesEl = document.createElement('td');
    tdTotalSalesEl.textContent = shops[idx].totalDemand;
    trStoreEl.appendChild(tdTotalSalesEl);
    tableEl.appendChild(trStoreEl);
  };
})();

// Store.renderNew = function(name, minimum, maximum, average) {
//   var newStore = new Store(name, minimum, maximum, average);
//   // Use that global variable for `tbl` and target it's id (remember when you created it and set the id?)
//   // Create a new instance of a store object using the parameters available in this method.
// };
//
// document.getElementById('new-store').addEventListener('submit', function(event) {
//   // Add an event listener to the form in our HTML
  // Prevent the default behavior of the form submit
  // NOTE: Stretch goal item; You need something to determine whether the store exists already in the table... perhaps a boolean?
  // Assign the values of each input field to variables for later used
  // NOTE: Stretch goal item: Iterate over your shops array to determine whether the inputs relate to a store that's already been created
    // If so, you probably want to do something with that boolean value...
  // NOTE: Stretch goal item: If the store exists, run the renderUpdate and pass in arguments to complete the call
    // Otherwise, just take your new values and run the renderNew method
  // Finally, set each of the values of your inputs to `null`
