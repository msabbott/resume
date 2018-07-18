var updateLink = function(link, innerText, addListener, removeListener) {
    if(null !== link) {
        link.removeEventListener('click', removeListener);
        link.addEventListener('click', addListener);
        
        if(null !== innerText)
            link.innerHTML = innerText;
    }
};

var logClick = function(action, category, label) {

  if(null !== action) {
      
    var details = {};
      
    if(null !== category) {
      details.event_category = category;  
    }
      
    if(null !== label) {
      details.event_label = label;
    }
      
    gtag("event", action, details);
  }
};

var getTarget = function(e) {
  if(null !== e) {
      if(e.currentTarget) {
          return e.currentTarget;
      } else {
          return e.srcElement;
      }
  } else {
      return null;
  }
};

var swapCSSClasses = function(elements, removeClass, addClass) {
  if(null !== elements){
      for(var i = elements.length - 1; 0 <= i; i--) {
        if(elements[i].classList) {
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

var swapClasses = function(div, removeClass, addClass) {
  if(null !== div) {
    var items = div.getElementsByClassName(removeClass);
    swapCSSClasses(items, removeClass, addClass);
  }
};