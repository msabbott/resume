QUnit.test("expandTechSkills calls logClick", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 3 asserts from mock
    assert.expect(3);
    
    // Define mock for logClick
    var oldLogClick = logClick;
    logClick = function(action, category, label) {
        assert.equal(action, "expand");
        assert.equal(category, "tech-skills");
        assert.equal(label, "Expand Tech Skills");
    };
    
    expandTechSkills(event);
    
    // Restore mock
    logClick = oldLogClick;
    
});

QUnit.test("expandTechSkills calls expandSkillsList", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 5 asserts from mock
    assert.expect(5);
    
    // Define mock for logClick
    var oldFunction = expandSkillsList;
    expandSkillsList = function(e, listClass, newListener, currentListener, linkText) {
        assert.deepEqual(e, event);
        assert.equal(listClass, "skilllist-tech");
        assert.equal(newListener, shrinkTechSkills);
        assert.equal(currentListener, expandTechSkills);
        assert.equal(linkText, "less");
    };
    
    expandTechSkills(event);
    
    // Restore mock
    expandSkillsList = oldFunction;
    
});

QUnit.test("shrinkTechSkills calls logClick", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 3 asserts from mock
    assert.expect(3);
    
    // Define mock for logClick
    var oldLogClick = logClick;
    logClick = function(action, category, label) {
        assert.equal(action, "shrink");
        assert.equal(category, "tech-skills");
        assert.equal(label, "Shrink Tech Skills");
    };
    
    shrinkTechSkills(event);
    
    // Restore mock
    logClick = oldLogClick;
    
});

QUnit.test("shrinkTechSkills calls expandSkillsList", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 5 asserts from mock
    assert.expect(5);
    
    // Define mock for logClick
    var oldFunction = expandSkillsList;
    expandSkillsList = function(e, listClass, newListener, currentListener, linkText) {
        assert.deepEqual(e, event);
        assert.equal(listClass, "skilllist-tech");
        assert.equal(newListener, expandTechSkills);
        assert.equal(currentListener, shrinkTechSkills);
        assert.equal(linkText, "more");
    };
    
    shrinkTechSkills(event);
    
    // Restore mock
    expandSkillsList = oldFunction;
    
});

QUnit.test("expandNonTechSkills calls logClick", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 3 asserts from mock
    assert.expect(3);
    
    // Define mock for logClick
    var oldLogClick = logClick;
    logClick = function(action, category, label) {
        assert.equal(action, "expand");
        assert.equal(category, "non-tech-skills");
        assert.equal(label, "Expand Non-Tech Skills");
    };
    
    expandNonTechSkills(event);
    
    // Restore mock
    logClick = oldLogClick;
    
});

QUnit.test("expandNonTechSkills calls expandSkillsList", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 5 asserts from mock
    assert.expect(5);
    
    // Define mock for logClick
    var oldFunction = expandSkillsList;
    expandSkillsList = function(e, listClass, newListener, currentListener, linkText) {
        assert.deepEqual(e, event);
        assert.equal(listClass, "skilllist-nontech");
        assert.equal(newListener, shrinkNonTechSkills);
        assert.equal(currentListener, expandNonTechSkills);
        assert.equal(linkText, "less");
    };
    
    expandNonTechSkills(event);
    
    // Restore mock
    expandSkillsList = oldFunction;
    
});

QUnit.test("shrinkNonTechSkills calls logClick", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 3 asserts from mock
    assert.expect(3);
    
    // Define mock for logClick
    var oldLogClick = logClick;
    logClick = function(action, category, label) {
        assert.equal(action, "shrink");
        assert.equal(category, "non-tech-skills");
        assert.equal(label, "Shrink Non-Tech Skills");
    };
    
    shrinkNonTechSkills(event);
    
    // Restore mock
    logClick = oldLogClick;
    
});

QUnit.test("shrinkNonTechSkills calls expandSkillsList", function (assert) {
    
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>More</a><ul class=\"listClass\"><li class=\"shrunk\">Item</li><li class=\"shrunk\">Item</li></ul></div>";
    
    var event = {};
    event.currentTarget = fixture.getElementsByTagName("a")[0];
    
    // Require 5 asserts from mock
    assert.expect(5);
    
    // Define mock for logClick
    var oldFunction = expandSkillsList;
    expandSkillsList = function(e, listClass, newListener, currentListener, linkText) {
        assert.deepEqual(e, event);
        assert.equal(listClass, "skilllist-nontech");
        assert.equal(newListener, expandNonTechSkills);
        assert.equal(currentListener, shrinkNonTechSkills);
        assert.equal(linkText, "more");
    };
    
    shrinkNonTechSkills(event);
    
    // Restore mock
    expandSkillsList = oldFunction;
    
});

QUnit.test("expandSkills calls standardEvent", function (assert) {

    var event = {};
    
    // Create mock for function
    var oldStandardEvent = standardEvent;
    standardEvent = function(e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
        assert.equal(e, event);
        assert.equal(action, "expand");
        assert.equal(category, "skills");
        assert.equal(label, "Expand Skills");
        assert.equal(sidepanelClass, "skills-sidepanel-expanded");
        assert.equal(newLinkText, "less");
        assert.equal(thisEventListener, expandSkills);
        assert.equal(newEventListener, shrinkSkills);
        assert.equal(oldCSSClass, "shrunk");
        assert.equal(newCSSClass, "expanded");
    };
    
    expandSkills(event);
    
    // Restore mock
    standardEvent = oldStandardEvent;
});

QUnit.test("expandSkills expands Div", function (assert) {
    var event = {};
    
    // Create mock for function
    var oldSwapClasses = swapClasses;
    var callCount      = 0;
    
    swapClasses = function(div, removeClass, addClass) {
        callCount++;
        
        // Only worried with second call. First call happens in standardEvent
        if(2 == callCount) {
            assert.equal(div, document);
            assert.equal(removeClass, "skill-shrunk");
            assert.equal(addClass, "skill-expanded");
        }
    };
    
    expandSkills(event);
    
    // Restore mock
    swapClasses = oldSwapClasses;
});

QUnit.test("shrinkSkills calls standardEvent", function (assert) {

    var event = {};
    
    // Create mock for function
    var oldStandardEvent = standardEvent;
    standardEvent = function(e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
        assert.equal(e, event);
        assert.equal(action, "shrink");
        assert.equal(category, "skills");
        assert.equal(label, "Shrink Skills");
        assert.equal(sidepanelClass, "skills-sidepanel-expanded");
        assert.equal(newLinkText, "more");
        assert.equal(thisEventListener, shrinkSkills);
        assert.equal(newEventListener, expandSkills);
        assert.equal(oldCSSClass, "expanded");
        assert.equal(newCSSClass, "shrunk");
    };
    
    shrinkSkills(event);
    
    // Restore mock
    standardEvent = oldStandardEvent;
});

QUnit.test("shrinkSkills shrinks Div", function (assert) {
    var event = {};
    
    // Create mock for function
    var oldSwapClasses = swapClasses;
    var callCount      = 0;
    
    swapClasses = function(div, removeClass, addClass) {
        callCount++;
        
        // Only worried with second call. First call happens in standardEvent
        if(2 == callCount) {
            assert.equal(div, document);
            assert.equal(removeClass, "skill-expanded");
            assert.equal(addClass, "skill-shrunk");
        }
    };
    
    shrinkSkills(event);
    
    // Restore mock
    swapClasses = oldSwapClasses;
});
