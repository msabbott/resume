QUnit.test("standardEvent adds sidepanelclass", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    standardEvent(event, "action", "category", "label", "panelClass", "less", null, null, "oldClass", "newClass");

    assert.ok(fixture.getElementsByTagName("div")[0].classList.contains("panelClass"));
});

QUnit.test("standardEvent removes sidepanelclass", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div class=\"panelClass\"><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    standardEvent(event, "action", "category", "label", "panelClass", "less", null, null, "oldClass", "newClass");

    assert.ok(false === fixture.getElementsByTagName("div")[0].classList.contains("panelClass"));
});

QUnit.test("standardEvent calls logClick", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    // Require 3 asserts from mock
    assert.expect(3);

    // Define mock for logClick
    var oldLogClick = logClick;
    logClick = function (action, category, label) {
        assert.equal(action, "action");
        assert.equal(category, "category");
        assert.equal(label, "label");
    };

    standardEvent(event, "action", "category", "label", "panelClass", "less", null, null, "oldClass", "newClass");

    // Restore mock
    logClick = oldLogClick;
});

QUnit.test("standardEvent calls getTarget", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    // Require 1 asserts from mock
    assert.expect(1);

    // Define mock for getTarget
    var oldGetTarget = getTarget;
    getTarget = function (e) {
        assert.deepEqual(e, event);
        return e.currentTarget;
    };

    standardEvent(event, "action", "category", "label", "panelClass", "less", null, null, "oldClass", "newClass");

    // Restore mock
    getTarget = oldGetTarget;
});

QUnit.test("standardEvent handles null target", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};

    // Indicate no assertions expected
    assert.expect(0);

    // Define stub for getTarget
    var oldGetTarget = getTarget;
    getTarget = function (e) {
        return null;
    };

    standardEvent(event, "action", "category", "label", "panelClass", "less", null, null, "oldClass", "newClass");

    // Restore stub
    getTarget = oldGetTarget;
});

QUnit.test("standardEvent calls swapClasses", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};

    // Indicate no assertions expected
    assert.expect(3);

    // Require 3 asserts from mock
    var oldSwapClasses = swapClasses;
    swapClasses = function (div, removeClass, addClass) {
        assert.equal(div, document);
        assert.equal(removeClass, "oldClass");
        assert.equal(addClass, "newClass");
        return null;
    };

    standardEvent(event, "action", "category", "label", "panelClass", "less", null, null, "oldClass", "newClass");

    // Restore mock
    swapClasses = oldSwapClasses;

});

QUnit.test("standardEvent calls updateLink", function (assert) {

    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>more</a><span class=\"oldClass\"></span><span class=\"oldClass\"></span></div>";

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    // Define dummy listeners
    var listener1 = function (e) { };
    var listener2 = function (e) { };

    // Indicate no assertions expected
    assert.expect(4);

    // Require 3 asserts from mock
    var oldUpdateLink = updateLink;
    updateLink = function (link, innerText, addListener, removeListener) {
        assert.equal(link, event.currentTarget);
        assert.equal(innerText, "less");
        assert.equal(addListener, listener2);
        assert.equal(removeListener, listener1);
        return null;
    };

    standardEvent(event, "action", "category", "label", "panelClass", "less", listener1, listener2, "oldClass", "newClass");

    // Restore mock
    updateLink = oldUpdateLink;

});