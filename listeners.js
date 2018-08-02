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

var expandSkills = function(e) {
    standardEvent(e, 
                  "expand", "skills", "Expand Skills",
                  "skills-sidepanel-expanded",
                  "less", expandSkills, shrinkSkills,
                  "shrunk", "expanded");
    swapClasses(document, "skill-shrunk", "skill-expanded");
};

var shrinkSkills = function(e) {
    standardEvent(e,
                 "shrink", "skills", "Shrink Skills",
                 "skills-sidepanel-expanded",
                 "more", shrinkSkills, expandSkills,
                 "expanded", "shrunk");
    swapClasses(document, "skill-expanded", "skill-shrunk");
};

var linkEventHander = function(e) {
    var link = getTarget(e);
    logClick("click", link.dataset.category, link.dataset.label);
};