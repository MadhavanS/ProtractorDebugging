/**
 * Created by sergiu on 07/18/16.
 */
var SearchHomepage = function () {
    var notificationsPageElems = {
        searchField  : element(by.css("input[name=\"as_q\"]")),
        searchResultsTitle: element.all(by.css("div[class=\"search-results-frame\"] h4"))
    };

    this.search = function (criteria) {
        notificationsPageElems.searchField.sendKeys(criteria);
        browser.sleep(3000);
    };

    this.validateResult = function () {
        // notificationsPageElems.searchResultsTitle.then(function(elems){
        //         expect(elems.length).toBeGreaterThan(0);
        // });
        notificationsPageElems.searchResultsTitle.each(function(element){
            element.getAttribute("innerText").then(function(text){
                expect(["api","guide","tutorial","misc","error"]).toContain(text);
            })
        });
    }
};

module.exports = SearchHomepage;


