function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var experience = document.getElementById("experience");
    var education = document.getElementById("education");
    var contact = document.getElementById("contact");
    var memberList = document.getElementById("member-list");
    var skillsList = document.getElementById("skills-list");
    var experienceList = document.getElementById("experience-list");
    var educationList = document.getElementById("education-list");
    var contactList = document.getElementById("contact-list");
    member.style.color = "#fff";
    skills.style.color = "#000";
    experience.style.color = "#000";
    education.style.color = "#000";
    contact.style.color = "#000";
    memberList.style.display = "block";
    skillsList.style.display = "none";
    experienceList.style.display = "none";
    educationList.style.display = "none";
    contactList.style.display = "none";
}