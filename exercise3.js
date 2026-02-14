// Exercise 3A: Arrays and Basic Methods
console.log("--- Exercise 3A ---");

let classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];

console.log("toString:", classRoster.toString());
console.log("Original classRoster:", classRoster);

classRoster.push("Fiona", "Nancy");
console.log("After push:", classRoster);

let removedStudent = classRoster.shift();
console.log("Removed student:", removedStudent);

console.log("Updated classRoster:", classRoster);
console.log("Length of classRoster:", classRoster.length);

// Exercise 3B: Objects with Nested Structures
console.log("--- Exercise 3B ---");

let classInfo = {
  className: "ENSF381: Full-Stack Web Development",
  instructor: "Dr. Smith",
  students: classRoster,
  details: {
    semester: "Winter",
    year: 2025
  }
};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];
classInfo.instructor = "Dr. Abdellatif";

console.log("className:", classInfo.className);
console.log("instructor:", classInfo.instructor);
console.log("students:", classInfo.students);

console.log("semester:", classInfo.details.semester);

console.log("classInfo:", classInfo);

const { className, students } = classInfo;
console.log("Destructured className:", className);
console.log("Destructured students:", students);

const { semester, year } = classInfo.details;
console.log("Destructured semester:", semester);
console.log("Destructured year:", year);

const [student1, student2, ...remainingStudents] = classRoster;
console.log("student1:", student1);
console.log("student2:", student2);
console.log("remainingStudents:", remainingStudents);
