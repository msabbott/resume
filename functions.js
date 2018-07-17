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
