QUnit.test("getTarget uses currentTarget", function (assert) {
    var e = {};
    e.currentTarget = "currentTarget";
    assert.equal(getTarget(e), "currentTarget");
});

QUnit.test("getTarget uses srcElement", function (assert) {
    var e = {};
    e.srcElement = "srcElement";
    assert.equal(getTarget(e), "srcElement");
});

QUnit.test("getTarget prefers currentTarget to srcElement", function (assert) {
    var e = {};
    e.currentTarget = "currentTarget";
    e.srcElement = "srcElement";
    assert.equal(getTarget(e), "currentTarget");
});

QUnit.test("getTarget returns null if target not identified", function (assert) {
    var e = {};
    e.someProperty = "";
    assert.equal(getTarget(e), null);
});

QUnit.test("getTarget returns null if target is blank object", function (assert) {
    var e = {};
    assert.equal(getTarget(e), null);
});

QUnit.test("getTarget returns null if parameter null", function (assert) {
    assert.equal(getTarget(null), null);
});

QUnit.test("getTarget returns null if parameter array", function (assert) {
    var e = [];
    assert.equal(getTarget(e), null);
});