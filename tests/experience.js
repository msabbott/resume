QUnit.module("Listeners");

QUnit.test("expandExperience calls standardEvent", function (assert) {

    var event = {};
    
    // Create mock for function
    var oldStandardEvent = standardEvent;
    standardEvent = function(e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
        assert.equal(e, event);
        assert.equal(action, "expand");
        assert.equal(category, "experience");
        assert.equal(label, "Expand Experience");
        assert.equal(sidepanelClass, "experience-sidepanel-expanded");
        assert.equal(newLinkText, "less");
        assert.equal(thisEventListener, expandExperience);
        assert.equal(newEventListener, shrinkExperience);
        assert.equal(oldCSSClass, "exp-shrunk");
        assert.equal(newCSSClass, "exp-expanded");
    };
    
    expandExperience(event);
    
    // Restore mock
    standardEvent = oldStandardEvent;
});

QUnit.test("shrinkExperience calls standardEvent", function (assert) {

    var event = {};
    
    // Create mock for function
    var oldStandardEvent = standardEvent;
    standardEvent = function(e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
        assert.equal(e, event);
        assert.equal(action, "shrink");
        assert.equal(category, "experience");
        assert.equal(label, "Shrink Experience");
        assert.equal(sidepanelClass, "experience-sidepanel-expanded");
        assert.equal(newLinkText, "more");
        assert.equal(thisEventListener, shrinkExperience);
        assert.equal(newEventListener, expandExperience);
        assert.equal(oldCSSClass, "exp-expanded");
        assert.equal(newCSSClass, "exp-shrunk");
    };
    
    shrinkExperience(event);
    
    // Restore mock
    standardEvent = oldStandardEvent;
});