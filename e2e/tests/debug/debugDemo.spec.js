/**
 * Created by sergiu on 07/18/16.
 */
var using = require("jasmine-data-provider");
var searchProvider = require("../../testData/search.td");
var SearchHomepage = require("../../pages/search/search.po");

describe('Search for information', function () {

    beforeEach(function() {
        browser.driver.get('https://docs.angularjs.org/tutorial');
    });

    afterEach(function() {
    });

    using(searchProvider, function (data) {
        it('Should search for information', function () {
            var searchHomepage = new SearchHomepage();
            searchHomepage.search(data.criteria);
        });

        it('Information should be present', function () {
            var searchHomepage = new SearchHomepage();
            searchHomepage.validateResult(data.criteria);
        });
    });
});