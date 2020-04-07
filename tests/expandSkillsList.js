QUnit.test("expandSkillsList shows hidden items", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 0);
    assert.equal(fixture.getElementsByClassName("expandable").length, 2);

});

QUnit.test("expandSkillsList hides expandable items", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"expandable\">Item</li><li class=\"expandable\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 2);
    assert.equal(fixture.getElementsByClassName("expandable").length, 0);

});

QUnit.test("expandSkillsList calls getTarget", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"expandable\">Item</li><li class=\"expandable\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    // Require 1 asserts from mock
    assert.expect(1);

    // Define mock for getTarget
    var oldGetTarget = getTarget;
    getTarget = function (e) {
        assert.deepEqual(e, event);
        return e.currentTarget;
    };

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Restore mock
    getTarget = oldGetTarget;
});

QUnit.test("expandSkillsList calls updateLink", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"expandable\">Item</li><li class=\"expandable\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

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

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Restore mock
    updateLink = oldUpdateLink;
});

QUnit.test("expandSkillsList handles empty listClass results", function (assert) {

    var fixtureData = "<div><a>More</a><ul><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 2);
    assert.equal(fixture.getElementsByClassName("expandable").length, 0);

});

QUnit.test("expandSkillsList handles blank listClass", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 2);
    assert.equal(fixture.getElementsByClassName("expandable").length, 0);

});

QUnit.test("expandSkillsList handles null listClass", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 2);
    assert.equal(fixture.getElementsByClassName("expandable").length, 0);

});

QUnit.test("expandSkillsList handles blank linkText", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "listClass", listener2, listener1, "");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "");
});

QUnit.test("expandSkillsList handles null linkText", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = function (e) { };

    expandSkillsList(event, "listClass", listener2, listener1, null);

    // Check output
    assert.equal(event.currentTarget.innerHTML, "More");
});

QUnit.test("expandSkillsList handles null newListener", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = function (e) { };
    var listener2 = null;

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 0);
    assert.equal(fixture.getElementsByClassName("expandable").length, 2);

});

QUnit.test("expandSkillsList handles null currentListener", function (assert) {

    var fixtureData = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;

    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];

    var listener1 = null;
    var listener2 = function (e) { };

    expandSkillsList(event, "listClass", listener2, listener1, "less");

    // Check output
    assert.equal(event.currentTarget.innerHTML, "less");
    assert.equal(fixture.getElementsByClassName("shrunk").length, 0);
    assert.equal(fixture.getElementsByClassName("expandable").length, 2);

});