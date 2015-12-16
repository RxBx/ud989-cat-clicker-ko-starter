var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "new born";
        } else if (this.clickCount() < 20) {
            return "infant";
        } else {
            return "teen";
        }
    }, this);

    this.nickNames = ko.observableArray(['Tom', 'Dick', 'Spot']);

};


var ViewModel = function() {
    this.currentCat = ko.observable(new Cat() );
    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
