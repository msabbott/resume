var expandEducation = function(e) {
  standardEvent(e,
                "expand", "education", "Expand Education",
                "education-sidepanel-expanded",
                "less", expandEducation, shrinkEducation,
                "edu-shrunk", "edu-expanded");
};

var shrinkEducation = function(e) {
  standardEvent(e,
                "shrink", "education", "Shrink Education",
                "education-sidepanel-expanded",
                "more", shrinkEducation, expandEducation,
                "edu-expanded", "edu-shrunk");  
};
