QUnit.test("linkEventHandler calls logClick", function (assert) {
   
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = "<div><a>Click Link</a></div>";
    
    var link = fixture.getElementsByTagName("a")[0];
    link.dataset.category = "Category";
    link.dataset.label = "Label";

    var event = {};
    event.currentTarget = link;

    var oldLogClick = logClick;
    logClick = function(action, category, label) {
        assert.equal(action, "click");
        assert.equal(category, "Category");
        assert.equal(label, "Label");
    };
    
    linkEventHandler(event);

    // Restore mock object
    logClick = oldLogClick;
    
});