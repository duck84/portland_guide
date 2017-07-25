var ViewModel = function() {
  var self = this;
  self.places = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Hikes",
    "Sights",
    "Breweries",
    "Excursions"
  ];
  self.chosenPlace = ko.observable();
  self.chosenPlaceData = ko.observable();

  self.goToPlace = function(place) {
    place = place.toLowerCase()
    self.chosenPlace(place);
    self.chosenPlaceData(places[place])
  };
};

ko.applyBindings(new ViewModel);
