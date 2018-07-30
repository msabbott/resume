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

var expandTechSkills = function(e) {
  logClick("expand", "tech-skills", "Expand Tech Skills");
  expandSkillsList(e, "skilllist-tech", shrinkTechSkills, expandTechSkills, "less");
};

var shrinkTechSkills = function(e) {
  logClick("shrink", "tech-skills", "Shrink Tech Skills");
  expandSkillsList(e, "skilllist-tech", expandTechSkills, shrinkTechSkills, "more");
};

var expandNonTechSkills = function(e) {
  logClick("expand", "non-tech-skills", "Expand Non-Tech Skills");
  expandSkillsList(e, "skilllist-nontech", shrinkNonTechSkills, expandNonTechSkills, "less");
};

var shrinkNonTechSkills = function(e) {
  logClick("shrink", "non-tech-skills", "Shrink Non-Tech Skills");
  expandSkillsList(e, "skilllist-nontech", expandNonTechSkills, shrinkNonTechSkills, "more");
};


