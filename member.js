function skillsMember() {
  var memberSkills = {
    name: "John",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],
  };
  var memberSkills2 = {
    name: "Jane",
    age: 30,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
  };
  // Only change code below this line
  var skills = memberSkills.skills;
  var skills2 = memberSkills2.skills;
  // Only change code above this line
  return { skills, skills2 };
}