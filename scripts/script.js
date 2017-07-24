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

var places = {
  "breakfast": [
    {
    title: "Broder Nord",
    picture: "./images/breakfast/broder_nord.jpg",
    caption: "One of our favorite spots for brunch. A small outpost of the main Broder resturant that specializes in Scandinavia food. Simple but with unique flavors."
    },
    {
    title: "Tin Shed",
    picture: "./images/breakfast/tin_shed.jpg",
    caption: "A classic Portland brunch spot on Alberta. There is always a wait, but you can just head over to one of the two coffee shops that share the block."
    },
    {
    title: "Tasty n Sons Shed",
    picture: "./images/breakfast/tasty_n_sons.jpg",
    caption: "One of the more unique brunch places that is always packed. Some of our favorites are the Burmese red pork stew, shakshuka, and Dutch baby. Be prepared to wait."
    },
    {
    title: "Pine Street Biscuits",
    picture: "./images/breakfast/pine_street.jpg",
    caption: "Biscuits with Gravy! You have to get the Reggie Deluxe.!"
    }
    ],
  "lunch": [
    {
    title: "Pepino's",
    picture: "./images/lunch/pepino.jpg",
    caption: "Mike's favorite burritos place. Has the best salsas in town."
    },
    {
    title: "Bunk Bar",
    picture: "./images/lunch/bunk_bar.jpg",
    caption: "A bar that serves up great sandwiches. Has multiple locations."
    },
    {
    title: "Lardo",
    picture: "./images/lunch/lardo.jpg",
    caption: "A sandwich place that serves up great beer too! Has a couple of locations."
    },
    {
    title: "Boxer Ramen",
    picture: "./images/lunch/ramen.jpg",
    caption: "One of the first ramen places we experienced. Great location right by Powell's Books."
    },
  ],
  "dinner" : [
    {
      title: "Andina",
      picture: "./images/dinner/andina.jpg",
      caption: "One of the few white table cloth resturants in the city that still feels like Portland. They specialize in Peruvian food."
    },
    {
      title: "Holdfast",
      picture: "./images/dinner/holdfast.jpg",
      caption: "A reservation only tasting menu that is the best food in the city."
    },
    {
      title: "Le Pigeon",
      picture: "./images/dinner/le_pigeon.jpg",
      caption: "A small, French-inspired resturant that showcases Portland food. We recommend going to the first seating at 5:00 pm to sit at the kitchen. Yes, you can eat pigeon."
    },
    {
      title: "Ox",
      picture: "./images/dinner/ox.jpg",
      caption: "A trendy Argentinean resturant that specializes in wood fired food. Their sides are amazing."
    },
    {
      title: "Paley's Place",
      picture: "./images/dinner/paleys_place.jpg",
      caption: "One of the orginal resturants to start the farm to table movement in Portland."
    },
    {
      title: "Ava Gene's",
      picture: "",
      caption: "Our favorite resturant in the city. They have some of the most interesting salads we have ever eaten."
    },
  ],
  "hikes" : [
    {
      title: "Angel's Rest",
      picture: "./images/hikes/angels_rest.jpg",
      caption: "Closest hike in the gorge that has great views of the Columbia river."
    },
    {
      title: "Mirror Lake",
      picture: "./images/hikes/mirror_lake.jpg",
      caption: "A alpine Lake on Mount Hood. Crowded on the weekends, but for a reason."
    },
    {
      title: "Ramona Falls",
      picture: "./images/hikes/ramona_falls.jpg",
      caption: "A flat hike to a gorgeous waterfall at the base of Mount Hood."
    },
    {
      title: "Wildwood Trail",
      picture: "./images/hikes/wildwood.jpg",
      caption: "A trail in Forest Park which is one of the largest urban forests in the country."
    },
  ],
  "sights" : [
    {
      title: "Multnomah Falls",
      picture: "./images/sights/multnomah_falls.jpg",
      caption: "The postcard famous waterfall in Oregon"
    },
    {
      title: "OHSU Tram",
      picture: "./images/sights/OHSU_tram.jpg",
      caption: "Lidija takes the tram and enjoys the views from the tram everyday."
    },
    {
      title: "Powell's Bookstore",
      picture: "./images/sights/powells_bookstore.jpg",
      caption: "The world's largest used and new bookstore with over a million books. They even have a Slovenian section!"
    },
    {
      title: "Rose Garden",
      picture: "./images/sights/rose_garden.jpg",
      caption: "The Portland International Rose Test Garden is a great place to see the city's famous roses."
    },
  ],
  "breweries" : [
    {
      title: "Cascade Barrel House",
      picture: "./images/breweries/cascade.jpg",
      caption: "A brewery devoted to just sour beers. Mike's favorite place on a warm summer day to drink."
    },
    {
      title: "Deschutes",
      picture: "./images/breweries/deschutes.jpg",
      caption: "The main brewery we recommend for people to visit. They have the best food."
    },
    {
      title: "Ex Novo",
      picture: "./images/breweries/ex_novo.jpg",
      caption: "The worlds first non-profit brewery that is only a couple of blocks away from us."
    },
    {
      title: "Rouge",
      picture: "./images/breweries/rouge.jpg",
      caption: "Lidija's and Mike's favorite beers come from Rouge Brewery. Our favorite is the seasonal hazelnut brown nectar."
    },
  ],
  "excursions" : [
    {
      title: "Timberline",
      picture: "./images/excursions/timberline.jpg",
      caption: "Timberline Lodge is a historical grand lodge from the 1930's near the top of Mount Hood. Lots of Pacific Northwest details and charm. It was also used in the exterior shots of the shinning."
    },
    {
      title: "Cannon Beach",
      picture: "./images/excursions/coast.jpg",
      caption: "The beach is about an hour and half away and can be a great day or overnight trip. You can even borrow our clamming gun if you want to go clamming"
    },
    {
      title: "Dundee",
      picture: "./images/excursions/dundee.jpg",
      caption: "Dundee is about an hour outside of Portland and in the heart of the Willamette wine country. Numerious wineries have wine tastings and several high quality resturants are in town."
    },
    {
      title: "Hood River",
      picture: "./images/excursions/hood_river.jpg",
      caption: "Hood River has windsurfing, mountain biking, wine tasting, and apple picking all close by. After a long day of mountain biking or skiing, Double Mountain Brewery is our go to place for beer and pizza."
    },
  ]
}
