QUnit.test("addLinkLogForSelector updates items", function (assert) {
    var fixtureData = "<span class=\"cssClass\"></span><span class=\"cssClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    addLinkLogForSelector("span.cssClass", "category", "label");

    // Check that each element in the fixture now has the properties set
    var inElements = fixture.getElementsByClassName("cssClass");

    assert.equal(inElements.length, 2);

    for (var i = 0; i < inElements.length; i++) {
        assert.equal(inElements[i].dataset.category, "category");
        assert.equal(inElements[i].dataset.label, "label");
    }

    // Clear fixture
    fixture.innerHTML = "";
});

QUnit.test("addLinkLogForSelector sets event handler", function (assert) {
    var fixtureData = "<span class=\"cssClass\"></span><span class=\"cssClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    // Build mock for event handler
    var oldLinkEventHandler = linkEventHandler;
    linkEventHandler = function (e) {
        assert.ok(true);
    };

    addLinkLogForSelector("span.cssClass", "category", "label");

    // Check that each element in the fixture now has the properties set
    var inElements = fixture.getElementsByClassName("cssClass");

    // Indicate number of expected calls
    assert.expect(inElements.length);

    for (var i = 0; i < inElements.length; i++) {
        dispatchClickEvent(inElements[i]);
    }

    // Clear fixture
    fixture.innerHTML = "";

    // Reset mock
    linkEventHandler = oldLinkEventHandler;
});

QUnit.test("addLinkLogForLink calls addLinkLogForSelector", function (assert) {

    var oldAddLinkLogForSelector = addLinkLogForSelector;
    addLinkLogForSelector = function (selector, category, label) {
        assert.equal(selector, "a[href='selector']");
        assert.equal(category, "Category");
        assert.equal(label, "Label");
    };

    addLinkLogForLink("selector", "Category", "Label");

    // Restore mock
    addLinkLogForSelector = oldAddLinkLogForSelector;
});

QUnit.test("addLinkLogForLink users href when label is null", function (assert) {

    var oldAddLinkLogForSelector = addLinkLogForSelector;
    addLinkLogForSelector = function (selector, category, label) {
        assert.equal(selector, "a[href='selector']");
        assert.equal(category, "Category");
        assert.equal(label, "selector");
    };

    addLinkLogForLink("selector", "Category", null);

    // Restore mock
    addLinkLogForSelector = oldAddLinkLogForSelector;

});