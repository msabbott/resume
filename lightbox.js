var showLightbox = function() {

  var show = false;

  // Pull through information using "dataset" property, where possible
  if(this.dataset) {

    if(this.dataset.moreHeader) {
      lightbox_header.innerHTML = convertTextToHTML(this.dataset.moreHeader);
      show = true;
    }

    if(this.dataset.moreContent) {
      lightbox_content.innerHTML = convertTextToHTML(this.dataset.moreContent);
      show = true;
    }
  } else { // Otherwise default to mechanism that should work through older IE
    if("" != this.getAttribute("data-more-header").trim()) {
      lightbox_header.innerHTML = convertTextToHTML(this.getAttribute("data-more-header"));
      show = true;
    }
    if("" != this.getAttribute("data-more-content").trim()) {
      lightbox_content.innerHTML = convertTextToHTML(this.getAttribute("data-more-content"));
      show = true;
    }
  }

  toggleLightbox(show);
};

var hideLightbox = function() {
  toggleLightbox(false);
}

var toggleLightbox = function(show) {

  // Accept CSS values for display
  if("none" == show) {
    show = false;
  }

  if("" === show) {
    show = true;
  }

  // Convert value into display property
  if(show) {
    show = "grid";
  } else {
    show = "none";
  }

  var elements = document.getElementsByClassName("lightbox");

  for(var i = 0; i < elements.length; i++) {
    elements[i].style.display = show;
  }
}

var convertTextToHTML = function(text) {
  var html;

  html = "<p>"
       + text.replace(/\|/g, "</p><p>")
       + "</p>";

  return html;
}
