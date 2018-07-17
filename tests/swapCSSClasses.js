QUnit.test("swapCSSClasses swaps CSS classes", function (assert) {
    
    var fixtureData = "<span class=\"oldClass\"></span><span class=\"oldClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;
    
    var inElements = fixture.getElementsByClassName("oldClass");
    swapCSSClasses(inElements, "oldClass", "newClass");
    
    // Count the number of elements with the old class and new class
    assert.equal(fixture.getElementsByClassName("oldClass").length, 0);
    assert.equal(fixture.getElementsByClassName("newClass").length, 2);
    
    // Clear fixture
    fixture.innerHTML = "";
});

QUnit.test("swapCSSClasses swaps only provided CSS classes", function (assert) {
    
    var fixtureData = "<span class=\"oldClass otherClass\"></span><span class=\"oldClass otherClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;
    
    var inElements = fixture.getElementsByClassName("oldClass");
    swapCSSClasses(inElements, "oldClass", "newClass");
    
    // Count the number of elements with the old class and new class
    assert.equal(fixture.getElementsByClassName("oldClass").length, 0);
    assert.equal(fixture.getElementsByClassName("newClass").length, 2);
    assert.equal(fixture.getElementsByClassName("otherClass").length, 2);
    
    // Clear fixture
    fixture.innerHTML = "";
});

QUnit.test("swapCSSClasses ignores elements without class", function (assert) {
    
    var fixtureData = "<span class=\"oldClass\"></span><span class=\"otherClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;
    
    var inElements = fixture.getElementsByClassName("oldClass");
    swapCSSClasses(inElements, "oldClass", "newClass");
    
    // Count the number of elements with the old class and new class
    assert.equal(fixture.getElementsByClassName("oldClass").length, 0);
    assert.equal(fixture.getElementsByClassName("newClass").length, 1);
    assert.equal(fixture.getElementsByClassName("otherClass").length, 1);
    
    // Clear fixture
    fixture.innerHTML = "";
});

QUnit.test("swapCSSClasses ignores empty elements list", function (assert) {
    var inElements = [];
    swapCSSClasses(inElements, "oldClass", "newClass");
    assert.expect(0);
});

QUnit.test("swapCSSClasses ignores non-array elements list", function (assert) {
    var inElements = "elements";
    swapCSSClasses(inElements, "oldClass", "newClass");
    assert.expect(0);
});

QUnit.test("swapCSSClasses ignores null elements list", function (assert) {
    var inElements = null;
    swapCSSClasses(inElements, "oldClass", "newClass");
    assert.expect(0);
});