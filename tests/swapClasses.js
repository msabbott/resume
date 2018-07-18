QUnit.test("swapClasses changes CSS classes in div", function (assert) {

    var fixtureData = "<span class=\"oldClass\"></span><span class=\"oldClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;
    
    swapClasses(fixture, "oldClass", "newClass");
    
    // Count the number of elements with the old class and new class
    assert.equal(fixture.getElementsByClassName("oldClass").length, 0);
    assert.equal(fixture.getElementsByClassName("newClass").length, 2);
    
    // Clear fixture
    fixture.innerHTML = "";
});

QUnit.test("swapClasses calls swapCSSClasses", function (assert) {
    
    var fixtureData = "<span class=\"oldClass\"></span><span class=\"oldClass\"></span>";
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = fixtureData;
    
    // Create mock of swapCSSClasses
    assert.expect(1);
    var oldSwapCSSClasses = swapCSSClasses;
    swapCSSClasses = function(elements, removeClass, addClass) {
        assert.ok(true);
    };
    
    swapClasses(fixture, "oldClass", "newClass");
    
    // Restore mock object
    swapCSSClasses = oldSwapCSSClasses;
});
