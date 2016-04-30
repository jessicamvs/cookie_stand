var hours = ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];

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

Store.prototype.render = function() {
  this.totalDemand = this.hourlyDemand(hours, this.demands, this.generateRandom, this.minCust, this.maxCust, this.avgCookie, this.totalDemand);

  var sectionEl = document.getElementById('stores');
  var newStoreSection = document.createElement('section');
  newStoreSection.textContent = this.storeName;
  sectionEl.appendChild(newStoreSection);
  var ulEl = document.createElement('ul');
//This creates li for each hour and appends it to the ul we created above
  for(hour in hours) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[hour] + ': ' + this.demands[hour];
    ulEl.appendChild(liEl);
  }
//This creates and li for totalDemand and appends it to the ul created above
//then appends it to the existing section within our HTML.
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.totalDemand;
  ulEl.appendChild(liEl);
  sectionEl.appendChild(ulEl);
};

var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTacAirport = new Store('SeaTac Airport', 6, 24, 1.2);
var southcenter = new Store('Souchcenter', 11, 38, 1.9);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

var stores = [pikePlace, seaTacAirport, southcenter, bellevueSquare, alki];
for(idx in stores) {
  stores[idx].render();
}
