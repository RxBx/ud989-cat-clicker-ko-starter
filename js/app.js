var initialCats = [{
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nickNames: ['Tom', 'Dick', 'Spot']
}, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nickNames: ['Tomato ', 'Lettuce', 'Radish']
}, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nickNames: ['Potato', 'Orange', 'Apple']
}, {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nickNames: ['Bean', 'Yam', 'Spinach']
}, {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nickNames: ['Onion', 'Lemon', 'Broccoli']
}];


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observableArray(data.nickNames);

    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "new born";
        } else if (this.clickCount() < 20) {
            return "infant";
        } else {
            return "teen";
        }
    }, this);
};


var ViewModel = function() {
    var self = this; //used to lock context for incrementCounter method defined below

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    // receives as parameter the "current model value" aka KO obs array item from the click event
    this.updateCurrentCat = function(clickedCat) {
        //injects the "current model value" aka KO obs array item into the "currentCat"
        self.currentCat(clickedCat);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        //using self, now the action above will ignore any custom "with" context set in the HTML data bind
    };
};

ko.applyBindings(new ViewModel());
