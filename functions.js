var updateLink = function (link, innerText, addListener, removeListener) {
  if (null !== link) {
    link.removeEventListener('click', removeListener);
    link.addEventListener('click', addListener);

    if (null !== innerText)
      link.innerHTML = innerText;
  }
};

var logClick = function (action, category, label) {

  if (null !== action) {

    var details = {};

    if (null !== category) {
      details.event_category = category;
    }

    if (null !== label) {
      details.event_label = label;
    }

    gtag("event", action, details);
  }
};

var getTarget = function (e) {
  if (null !== e) {
    if (e.currentTarget) {
      return e.currentTarget;
    } else {
      return e.srcElement;
    }
  } else {
    return null;
  }
};

var swapCSSClasses = function (elements, removeClass, addClass) {
  if (null !== elements) {
    for (var i = elements.length - 1; 0 <= i; i--) {
      if (elements[i].classList) {
        if (null !== addClass) {
          elements[i].classList.add(addClass);
        }

        if (null !== removeClass) {
          elements[i].classList.remove(removeClass);
        }
      }
    }
  }
};

var swapClasses = function (div, removeClass, addClass) {
  if (null !== div) {
    var items = div.getElementsByClassName(removeClass);
    swapCSSClasses(items, removeClass, addClass);
  }
};

var addLinkLogForSelector = function (selector, category, label) {
  var items = document.querySelectorAll(selector);
  for (var i = 0; i < items.length; i++) {
    items[i].dataset.category = category;
    items[i].dataset.label = label;
    items[i].addEventListener("click", linkEventHandler);
  }
};

var addLinkLogForLink = function (href, category, label) {
  if (null === label) {
    label = href;
  }
  addLinkLogForSelector("a[href='" + href + "']", category, label);
};

var checkAndAddListener = function (selector, event, listener) {
  var element = document.getElementById(selector);
  if (element) {
    element.addEventListener(event, listener);
  }
};

var standardEvent = function (e, action, category, label, sidepanelClass, newLinkText, thisEventListener, newEventListener, oldCSSClass, newCSSClass) {
  logClick(action, category, label);
  var link = getTarget(e);

  if (link) {
    link.parentElement.classList.toggle(sidepanelClass);

    // Change settings on link
    updateLink(link, newLinkText, newEventListener, thisEventListener);
  }

  swapClasses(document, oldCSSClass, newCSSClass);
};

var expandSkillsList = function (e, listClass, newListener, currentListener, linkText) {

  var link = getTarget(e);

  // Change settings on link
  updateLink(link, linkText, newListener, currentListener);

  var divs = document.getElementsByClassName(listClass);

  for (var i = 0; i < divs.length; i++) {
    swapClasses(divs[i], "shrunk", "expandable-temp");
    swapClasses(divs[i], "expandable", "shrunk");
    swapClasses(divs[i], "expandable-temp", "expandable");
  }
};