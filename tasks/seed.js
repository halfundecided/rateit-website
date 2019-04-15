const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const majors = data.majors;
const courses = data.courses;

const main = async () => {
  /* ADDING MAJORS */
  const computerScience = await majors.addMajor("Computer Science");
  const csId = computerScience._id;

  /* ADDING COURSES */
  try {
    await courses.addCourse("Intro to Scientific Computing", "CS105", csId);
    await courses.addCourse("Introduction to Computer Science", "CS115", csId);
    await courses.addCourse(
      "Introduction to Web Programming and Project Development",
      "CS146",
      csId
    );
    await courses.addCourse("Data Structures", "CS284", csId);
    await courses.addCourse("Introduction to IT Security", "CS306", csId);
    await courses.addCourse("Software Development Process", "CS347", csId);
    await courses.addCourse(
      "Computer Organization and Programming",
      "CS383",
      csId
    );
    await courses.addCourse("Algorithms", "CS385", csId);
    await courses.addCourse("Systems Programming", "CS392", csId);
    await courses.addCourse("Senior Design I", "CS423", csId);
    await courses.addCourse("Senior Design II", "CS424", csId);
    await courses.addCourse("Database Management Systems", "CS442", csId);
    await courses.addCourse(
      "Societal Impact of Information Technologies",
      "CS485",
      csId
    );
    await courses.addCourse("Operating Systems", "CS492", csId);
    await courses.addCourse(
      "Principles of Programming Languages",
      "CS496",
      csId
    );
    await courses.addCourse("Concurrent Programming", "CS511", csId);
  } catch (e) {
    console.log(e);
  }

  const db = await dbConnection();
  console.log("Done seeding database for majors and courses");
  await db.serverConfig.close();
};

main().catch(error => {
  console.log(error);
});
