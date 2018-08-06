QUnit.test("checkAndAddListener setups listener", function (assert) {
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<span id=\"testSpan\">Test</span>";
    
    // Setup test function
    var testFunction = function(e) {
        assert.ok(true);  
    };
    
    assert.expect(1);
    
    checkAndAddListener('testSpan', 'click', testFunction);
    
    // Send event
    dispatchClickEvent(document.getElementById('testSpan'));
});