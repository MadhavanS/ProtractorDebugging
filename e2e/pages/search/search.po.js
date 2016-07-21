/**
 * Created by sergiu on 07/18/16.
 */
var SearchHomepage = function () {
    var notificationsPageElems = {
        searchField  : element(by.css("input[id=\"searchInput\"]")),
        searchResults: element.all(by.css("ul[class=\"list-unstyled\"] > li"))
    };

    this.search = function (criteria) {
        notificationsPageElems.searchField.sendKeys(criteria);
    };

    this.validateResult = function (criteria) {
        var exists = notificationsPageElems.searchResults.filter(function (elem, index) {
            return elem.getText().then(function (text) {
                index;
                return text === criteria;
            });
        }).first().isPresent();
        expect(exists).toBeTruthy();
    }
};

module.exports = SearchHomepage;


