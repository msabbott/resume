// Helper function for "gtag"
var gtagCalled = null;
var gtag = function (label, action, details) {
    gtagCalled = {
        label: label,
        action: action,
        details: details
    };
};

var resetGTag = function() {
  gtagCalled = null;  
};

QUnit.testStart(resetGTag);

QUnit.test("logClick calls gtag", function (assert) {
    
    var expected = {
        label: "event",
        action: "action",
        details: {
            event_category: "category",
            event_label: "label"
        }
    };
    
    logClick("action", "category", "label");
    
    assert.deepEqual(gtagCalled, expected);
});

QUnit.test("logClick ignores null action", function (assert) {
    logClick(null, "category", "label");    
    assert.equal(gtagCalled, null);
});

QUnit.test("logClick ignores null category", function (assert) {
    
    var expected = {
        label: "event",
        action: "action",
        details: {
            event_label: "label"
        }
    };
    
    logClick("action", null, "label");
    
    assert.deepEqual(gtagCalled, expected);
});

QUnit.test("logClick ignores null label", function (assert) {
    
    var expected = {
        label: "event",
        action: "action",
        details: {
            event_category: "category"
        }
    };
    
    logClick("action", "category", null);
    
    assert.deepEqual(gtagCalled, expected);
});