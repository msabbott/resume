QUnit.test("expandEducation calls standardEvent", function (assert) {

    var event = {};
    
    // Create mock for function
    var oldStandardEvent = standardEvent;
    standardEvent = function(e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
        assert.equal(e, event);
        assert.equal(action, "expand");
        assert.equal(category, "education");
        assert.equal(label, "Expand Education");
        assert.equal(sidepanelClass, "education-sidepanel-expanded");
        assert.equal(newLinkText, "less");
        assert.equal(thisEventListener, expandEducation);
        assert.equal(newEventListener, shrinkEducation);
        assert.equal(oldCSSClass, "edu-shrunk");
        assert.equal(newCSSClass, "edu-expanded");
    };
    
    expandEducation(event);
    
    // Restore mock
    standardEvent = oldStandardEvent;
});

QUnit.test("shrinkEducation calls standardEvent", function (assert) {

    var event = {};
    
    // Create mock for function
    var oldStandardEvent = standardEvent;
    standardEvent = function(e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
        assert.equal(e, event);
        assert.equal(action, "shrink");
        assert.equal(category, "education");
        assert.equal(label, "Shrink Education");
        assert.equal(sidepanelClass, "education-sidepanel-expanded");
        assert.equal(newLinkText, "more");
        assert.equal(thisEventListener, shrinkEducation);
        assert.equal(newEventListener, expandEducation);
        assert.equal(oldCSSClass, "edu-expanded");
        assert.equal(newCSSClass, "edu-shrunk");
    };
    
    shrinkEducation(event);
    
    // Restore mock
    standardEvent = oldStandardEvent;
});