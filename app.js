var hours = ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];

function Store(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.totalDemand = 0;
  this.demands = [];
}

Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.hourlyDemand = function() {
  for(hour in hours) {
    this.demands.push(Math.floor(this.generateRandom(this.minCust, this.maxCust) * this.avgCookie));      this.totalDemand += this.demands[hour];
  }
};

Store.prototype.render = function() {
  this.hourlyDemand();
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

pikePlace.render();
seaTacAirport.render();
southcenter.render();
//
// var southcenter = {
//   name: 'Southcenter',
//   min: 11,
//   max: 38,
//   average: 1.9,
//   totalDemand: 0,
//   demands: [],
//   //This genereates a random number of customers between min and max
//   generateRandom: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   //This calculates cookie demand each hour
//   hourlyDemand: function() {
//     for(hour in hours) {
//       this.demands.push(Math.floor(this.generateRandom(this.min, this.max) * this.average));
//       this.totalDemand += this.demands[hour];
//     }
//   },
// //This prints the lists to the page
//   render: function() {
//     this.hourlyDemand();
//     var sectionEl = document.getElementById('southcenterSales');
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement('ul');
// //This creates li for each hour and appends it to the ul we created above
//     for(hour in hours) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[hour] + ': ' + this.demands[hour];
//       ulEl.appendChild(liEl);
//     }
// //This creates and li for totalDemand and appends it to the ul created above
// //then appends it to the existing section within our HTML.
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDemand;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// };
//
// southcenter.render();
//
// var bellevueSquare = {
//   name: 'Bellevue Square',
//   min: 20,
//   max: 48,
//   average: 3.3,
//   totalDemand: 0,
//   demands: [],
//   //This genereates a random number of customers between min and max
//   generateRandom: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   //This calculates cookie demand each hour
//   hourlyDemand: function() {
//     for(hour in hours) {
//       this.demands.push(Math.floor(this.generateRandom(this.min, this.max) * this.average));
//       this.totalDemand += this.demands[hour];
//     }
//   },
// //This prints the lists to the page
//   render: function() {
//     this.hourlyDemand();
//     var sectionEl = document.getElementById('bellevueSquareSales');
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement('ul');
// //This creates li for each hour and appends it to the ul we created above
//     for(hour in hours) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[hour] + ': ' + this.demands[hour];
//       ulEl.appendChild(liEl);
//     }
// //This creates and li for totalDemand and appends it to the ul created above
// //then appends it to the existing section within our HTML.
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDemand;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// };
//
// bellevueSquare.render();
//
// var alki = {
//   name: 'Alki',
//   min: 3,
//   max: 24,
//   average: 2.6,
//   totalDemand: 0,
//   demands: [],
//   //This genereates a random number of customers between min and max
//   generateRandom: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   //This calculates cookie demand each hour
//   hourlyDemand: function() {
//     for(hour in hours) {
//       this.demands.push(Math.floor(this.generateRandom(this.min, this.max) * this.average));
//       this.totalDemand += this.demands[hour];
//     }
//   },
// //This prints the lists to the page
//   render: function() {
//     this.hourlyDemand();
//     var sectionEl = document.getElementById('alkiSales');
//     sectionEl.textContent = this.name;
//     var ulEl = document.createElement('ul');
// //This creates li for each hour and appends it to the ul we created above
//     for(hour in hours) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[hour] + ': ' + this.demands[hour];
//       ulEl.appendChild(liEl);
//     }
// //This creates and li for totalDemand and appends it to the ul created above
// //then appends it to the existing section within our HTML.
//     liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalDemand;
//     ulEl.appendChild(liEl);
//     sectionEl.appendChild(ulEl);
//   }
// };
