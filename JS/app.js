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
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

document.getElementById('addNewStore').addEventListener('submit', function(event) {
  event.preventDefault();
  var newStore = new Store(event.target.addStore.value, parseInt(event.target.newMin.value), parseInt(event.target.newMax.value), parseInt(event.target.newAvg.value));
  newStore.hourlyDemand();

  var trNewEl = document.createElement('tr');
  var thNewNameEl = document.createElement('th');
  thNewNameEl.textContent = newStore.storeName;
  trNewEl.appendChild(thNewNameEl);

  for(hour in hours) {
    var tdNewEl = document.createElement('td');
    tdNewEl.textContent = newStore.demands[hour];
    trNewEl.appendChild(tdNewEl);
  };

  var tdNewTotalEl = document.createElement('td');
  tdNewTotalEl.textContent = newStore.totalDemand;
  trNewEl.appendChild(tdNewTotalEl);
  tableEl.appendChild(trNewEl);
});
