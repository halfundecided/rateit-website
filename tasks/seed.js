const dbConnection = require("../config/mongoConnection");
const data = require("../data");
const majors = data.majors;
const courses = data.courses;

const main = async () => {
  /* ADDING MAJORS */
  const computerScience = await majors.addMajor("Computer Science");
  const csId = computerScience._id;
  const mathematics = await majors.addMajor("Mathematics");
  const maId = mathematics._id;

  /* ADDING COURSES*/
  try {
    /* Computer Science */
    await courses.addCourse("Intro to Scientific Computing", "CS105", csId);
    await courses.addCourse("Introduction to Computer Science", "CS115", csId);
    await courses.addCourse("Discrete Structures", "CS135", csId);
    await courses.addCourse(
      "Introduction to Web Programming and Project Development",
      "CS146",
      csId
    );
    await courses.addCourse("Data Structures", "CS284", csId);
    await courses.addCourse("Introduction to IT Security", "CS306", csId);
    await courses.addCourse("Automata and Computation", "CS334", csId);
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
    await courses.addCourse("Introduction to Java Programming", "CS501", csId);
    await courses.addCourse("Discrete Math for Cryptography", "CS503", csId);
    await courses.addCourse("Prob & Stochastic Proc I", "CS505", csId);
    await courses.addCourse(
      "Principles Programming Languages - Master",
      "CS510",
      csId
    );
    await courses.addCourse("Concurrent Programming", "CS511", csId);
    await courses.addCourse("Knowledge Dis & Data Mining", "CS513", csId);
    await courses.addCourse("Computer Architecture", "CS514", csId);
    await courses.addCourse("Introduction to E-Commerce", "CS519", csId);
    await courses.addCourse("Introduction to Operating System", "CS520", csId);
    await courses.addCourse("TCP/IP Networking", "CS521", csId);
    await courses.addCourse("Mobile Systems and Applications", "CS522", csId);
    await courses.addCourse("Programming the IoT using iOS", "CS523", csId);
    await courses.addCourse("Intro to Cloud Computing", "CS524", csId);
    await courses.addCourse("3D Computer Vision", "CS532", csId);
    await courses.addCourse("Artificial Intelligence", "CS541", csId);
    await courses.addCourse("Health Informatics", "CS544", csId);
    await courses.addCourse("Human-Computer Interaction", "CS545", csId);
    await courses.addCourse("Web Programming I", "CS546", csId);
    await courses.addCourse(
      "Enterprise Software Architecture & Design",
      "CS548",
      csId
    );
    await courses.addCourse("Computer Organization and Program", "CS550", csId);
    await courses.addCourse("Intro Text Mining/Nat. Lang Proc", "CS553", csId);
    await courses.addCourse("Web Programming II", "CS554", csId);
    await courses.addCourse(
      "Agile Methods for Software Development",
      "CS555",
      csId
    );
    await courses.addCourse("Computer Vision", "CS558", csId);
    await courses.addCourse("Machine Learning: Fund & Apps", "CS559", csId);
    await courses.addCourse("Statistical Machine LEarning", "CS560", csId);
    await courses.addCourse("Database Management Systems I", "CS561", csId);
    await courses.addCourse("Database Management Systems II", "CS562", csId);
    await courses.addCourse("Data Structures - Master", "CS570", csId);
    await courses.addCourse("Fundamentals of CyberSecurity", "CS573", csId);
    await courses.addCourse("Object-Oriented Analysis & Design", "CS574", csId);
    await courses.addCourse("Systems Security", "CS576", csId);
    await courses.addCourse("Privacy in a Networked World", "CS578", csId);
    await courses.addCourse("Foundations of Cryptography", "CS579", csId);
    await courses.addCourse("Online Social Networks", "CS581", csId);
    await courses.addCourse("Deep Learning", "CS583", csId);
    await courses.addCourse("Natural Language Processing", "CS584", csId);
    await courses.addCourse("Algorithms", "CS590", csId);
    await courses.addCourse(
      "Data Mining II: Advanced Algorithm",
      "CS593",
      csId
    );
    await courses.addCourse("Enterprise & Cloud Security", "CS594", csId);
    await courses.addCourse("Information Security & the Law", "CS595", csId);

    /* Mathematics */
    await courses.addCourse("Calculus for Business & Lib Arts", "MA117", maId);
    await courses.addCourse("Introduction to Calculus", "MA120", maId);
    await courses.addCourse("Differential Calculus", "MA121", maId);
    await courses.addCourse("Integral Calculus", "MA122", maId);
    await courses.addCourse(
      "Series, Vectors, Functionns & Surface",
      "MA123",
      maId
    );
    await courses.addCourse("Calculus of Two Variables", "MA124", maId);
    await courses.addCourse("Discrete Matheematics", "MA134", maId);
    await courses.addCourse("Differential Equations", "MA221", maId);
    await courses.addCourse("Probability & Statistics", "MA222", maId);
    await courses.addCourse("Multivariable Calculus", "MA227", maId);
    await courses.addCourse("Linear Algebra", "MA232", maId);
    await courses.addCourse(
      "Supp Topics of Differential Equation",
      "MA293",
      maId
    );
    await courses.addCourse("Supplmtry Topics of Calculus IV", "MA294", maId);
    await courses.addCourse("Intermediate Statistics", "MA331", maId);
    await courses.addCourse("Introduction to Number Theory", "MA335", maId);
    await courses.addCourse(
      "Intermediate Differential Equations",
      "MA360",
      maId
    );
    await courses.addCourse("Differential Geometry", "MA410", maId);
    await courses.addCourse("Intro to Mathematical Analysis", "MA441", maId);
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
