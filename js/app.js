var ViewModel = function() {
   //var self = this;

    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.catLevel = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "new born";
        } else if (this.clickCount() < 20) {
            return "infant";
        } else {
            return "teen";
        }
    }, this);

    this.nickNames = ko.observableArray(['Tom','Dick', 'Spot']);

};
/*var ViewModel = function () {
	this.catLevel = ko.computed(function () {
		if (this.clickCount() < 11) {
			return "new born";
		} else if (this.clickCount() < 20) {
			return "infant";
		} else {
			return "teen";
		}
	}, this);
};*/
ko.applyBindings(new ViewModel());
