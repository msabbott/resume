QUnit.module("Functions");

var firstListenerCalled = false;
var firstListener = function (e) {
    firstListenerCalled = true;
};

var secondListenerCalled = false;
var secondListener = function (e) {
    secondListenerCalled = true;
};

var resetListenerCalledFlags = function () {
    firstListenerCalled = false;
    secondListenerCalled = false;
};

var simulateClick = function (item) {
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    return item.dispatchEvent(event);
};

QUnit.testStart(resetListenerCalledFlags);

QUnit.test("updateLink configures link", function (assert) {

    // Setup link
    var link = document.createElement("a");
    link.innerHTML = "Original Inner Text";
    link.addEventListener("click", firstListener);

    // Call function
    updateLink(link, "Inner Text Value", secondListener, firstListener);

    assert.equal(link.innerHTML, "Inner Text Value", "Inner Text Value does not match expected");

    // Fire click event listener, and see what method was called
    simulateClick(link);

    // The original listener should not be called, but the
    // second one should
    assert.notOk(firstListenerCalled);
    assert.ok(secondListenerCalled);

});

QUnit.test("updateLink ignores null element", function (assert) {

    // Call function
    updateLink(null, "Inner Text Value", secondListener, firstListener);

    assert.ok(true);
});

QUnit.test("updateLink ignores null innerText", function (assert) {

    // Setup link
    var link = document.createElement("a");
    link.innerHTML = "Original Inner Text";
    link.addEventListener("click", firstListener);

    // Call function
    updateLink(link, null, secondListener, firstListener);

    assert.equal(link.innerHTML, "Original Inner Text", "Inner Text Value does not match expected");

});

QUnit.test("updateLink ignores null add listener", function (assert) {

    // Setup link
    var link = document.createElement("a");
    link.innerHTML = "Original Inner Text";
    link.addEventListener("click", firstListener);

    // Call function
    updateLink(link, "Inner Text Value", null, firstListener);

    assert.equal(link.innerHTML, "Inner Text Value", "Inner Text Value does not match expected");

    // Fire click event listener, and see what method was called
    simulateClick(link);

    // Neither listeners should be called
    assert.notOk(firstListenerCalled);
    assert.notOk(secondListenerCalled);

});

QUnit.test("updateLink ignores null remove listener", function (assert) {

    // Setup link
    var link = document.createElement("a");
    link.innerHTML = "Original Inner Text";
    link.addEventListener("click", firstListener);

    // Call function
    updateLink(link, "Inner Text Value", secondListener, null);

    assert.equal(link.innerHTML, "Inner Text Value", "Inner Text Value does not match expected");

    // Fire click event listener, and see what method was called
    simulateClick(link);

    // Both listeners should be called
    assert.ok(firstListenerCalled);
    assert.ok(secondListenerCalled);

});
