/**
 * Created by sergiu on 07/18/16.
 */
var SearchHomepage = function() {
    var notificationsPageElems = {
        searchField: element(by.css("input[title=\"Search\"], input[title=\"Căutați\"]")),
        searchButton: element(by.css("input[value=\"Google Search\"]"))
    };

    this.search = function(criteria){
        notificationsPageElems.searchField.sendKeys(criteria);
    };
};

module.exports = SearchHomepage;


