var hours = ["10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

var pikePlace = {
  name: "Pike Place",
  min: 17,
  max: 88,
  average: 5.2,
  totalDemand: 0,
  demands: [],
  //This genereates a random number of customers between min and max
  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  //This calculates cookie demand each hour
  hourlyDemand: function() {
    for(hour in hours) {
      this.demands.push(Math.floor(this.generateRandom(this.min, this.max) * this.average));
      this.totalDemand += this.demands[hour];
    }
  },
//This prints the lists to the page
  render: function() {
    this.hourlyDemand();
    var sectionEl = document.getElementById("pikePlaceSales");
    sectionEl.textContent = this.name;
    var ulEl = document.createElement("ul");
//This creates li for each hour and appends it to the ul we created above
    for(hour in hours) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[hour] + ": " + this.demands[hour];
      ulEl.appendChild(liEl);
    }
//This creates and li for totalDemand and appends it to the ul created above
//then appends it to the existing section within our HTML.
    liEl = document.createElement("li");
    liEl.textContent = "Total: " + this.totalDemand;
    ulEl.appendChild(liEl);
    sectionEl.appendChild(ulEl);
  }
}

pikePlace.render();
