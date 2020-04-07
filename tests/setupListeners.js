var testSetupListenerFixture = "<div><a id=\"skills-more\">more</a><a id=\"techskills-more\">more</a><a id=\"nontechskills-more\">more</a><a id=\"experience-more\">more</a><a id=\"education-more\">more</a></div>";

var setupListenerTestAddListener = function (assert, testSelector, testListener) {
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = testSetupListenerFixture;

    var mock = checkAndAddListener;
    checkAndAddListener = function (selector, event, listener) {
        // Function could get called multiple times with different parameters, 
        // therefore, only confirm when correct combination has been met
        if (selector === testSelector && event === "click" && listener === testListener) {
            assert.ok(true);
        }
    };

    // Indicate number of correct assertions expected
    assert.expect(1);

    setupListeners();

    // Restore mock
    checkAndAddListener = mock;
};

var setupListenerTestAddLogLink = function (assert, testHref, testCategory, testLabel) {
    var fixture = document.getElementById("qunit-fixture");
    fixture.innerHTML = testSetupListenerFixture;

    var mock = addLinkLogForLink;
    addLinkLogForLink = function (href, category, label) {
        // Function could get called multiple times with different parameters, 
        // therefore, only confirm when correct combination has been met
        if (href === testHref && category === testCategory && label === testLabel) {
            assert.ok(true);
        }
    };

    // Indicate number of correct assertions expected
    assert.expect(1);

    setupListeners();

    // Restore mock
    addLinkLogForLink = mock;
};

QUnit.test("setupListeners adds Click listeners - Skills More", function (assert) {
    setupListenerTestAddListener(assert, 'skills-more', expandSkills);
});

QUnit.test("setupListeners adds Click listeners - Tech Skills More", function (assert) {
    setupListenerTestAddListener(assert, 'techskills-more', expandTechSkills);
});

QUnit.test("setupListeners adds Click listeners - Non-Tech Skills More", function (assert) {
    setupListenerTestAddListener(assert, 'nontechskills-more', expandNonTechSkills);
});

QUnit.test("setupListeners adds Click listeners - Experience More", function (assert) {
    setupListenerTestAddListener(assert, 'experience-more', expandExperience);
});

QUnit.test("setupListeners adds Click listeners - Education More", function (assert) {
    setupListenerTestAddListener(assert, 'education-more', expandEducation);
});

QUnit.test("setupListeners adds LogClick for Mail link", function (assert) {
    setupListenerTestAddLogLink(assert, "mailto:mark@msabbott.co.uk", "email", "email");
});

QUnit.test("setupListeners adds LogClick for Phone link", function (assert) {
    setupListenerTestAddLogLink(assert, "tel:+447949181292", "telephone", "mobile");
});

QUnit.test("setupListeners adds LogClick for PDF link", function (assert) {
    setupListenerTestAddLogLink(assert, "markabbott.pdf", "download", "PDF");
});

QUnit.test("setupListeners adds LogClick for Doc link", function (assert) {
    setupListenerTestAddLogLink(assert, "markabbott.doc", "download", "Word");
});

QUnit.test("setupListeners adds LogClick for LinkedIn link", function (assert) {
    setupListenerTestAddLogLink(assert, "https://www.linkedin.com/in/marksabbott", "Social Link", "LinkedIn");
});

QUnit.test("setupListeners adds LogClick for GitHub link", function (assert) {
    setupListenerTestAddLogLink(assert, "https://github.com/msabbott", "Social Link", "GitHub");
});

QUnit.test("setupListeners adds LogClick for Acclaim link", function (assert) {
    setupListenerTestAddLogLink(assert, "https://www.youracclaim.com/user/marksabbott", "Social Link", "Your Acclaim");
});