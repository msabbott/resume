var expandExperience = function(e) {
  standardEvent(e,
                "expand", "experience", "Expand Experience",
                "experience-sidepanel-expanded",
                "less", expandExperience, shrinkExperience,
                "exp-shrunk", "exp-expanded");
};

var shrinkExperience = function(e) {
  standardEvent(e,
                "shrink", "experience", "Shrink Experience",
                "experience-sidepanel-expanded",
                "more", shrinkExperience, expandExperience,
                "exp-expanded", "exp-shrunk");
};

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
