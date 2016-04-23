var hours = ["10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"];

var PikePlace = {
  name: "Pike Place",
  min: 17,
  max: 88,
  average: 5.2,
  total: 0,
  demands: [],
  //This genereates a random number of customers between min and max
  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  //This calculates
  calculate: function() {
    for(hour in hours) {
      var cookiesThisHour = Math.floor(this.generateRandom(this.min, this.max) * this.average);
      this.demands.push(cookiesThisHour);
      this.total += cookiesThisHour;
    }
  },
//This prints the lists to the page
  render: function() {
    this.calculate();
    var sectionEl = document.getElementById("stores");
    var ulEl = document.createElement("ul");

    for(hour in hours) {
      var liEl = document.createElement("li");
      liEl.textContent = hours[hour] + ": " + this.demands[hour];
      var nestedUlEl = document.createElement("ul");

      liEl.appendChild(nestedUlEl);
      ulEl.appendChild(liEl);
    }
    sectionEl.appendChild(ulEl);
  }
}

PikePlace.render();
















  //
  //
  //
  //
  //
  // total: function() {
  //   for(var = j; j < 8; j++) {
  //     return total += calculate();
  //   }
  // },
