const mongoCollections = require("../config/mongoCollections");
const courses = mongoCollections.courses;
const { ObjectId } = require("mongodb");

const addCourse = async (title, code, major) => {
  if (
    typeof title === "undefined" ||
    typeof code === "undefined" ||
    typeof major === "undefined"
  )
    throw `invalid arguments`;
  if (
    title.constructor !== String ||
    code.constructor !== String ||
    major.constructor !== ObjectId
  )
    throw `All must be string type`;

  const courseCollection = await courses();

  let newCourse = {
    title: title,
    code: code,
    major: major
  };

  const insertInfo = await courseCollection.insertOne(newCourse);
  if (insertInfo.insertedCount === 0) throw "Could not add course";
  return await courseCollection.findOne({
    _id: ObjectId(insertInfo.insertedId)
  });
};

const getAllCourse = async () => {
  const courseCollection = await courses();

  const allCourses = await courseCollection.find({}).toArray();
  return allCourses;
};

const getListOfCourses = async majorInfo => {
  const courseCollection = await courses();
  const allCourses = await courseCollection
    .find({ major: ObjectId(majorInfo) })
    .project({ title: 1, code: 1 })
    .toArray();
  return allCourses;
};

const getCourseById = async id => {
  if (typeof id === "undefined" || id.constructor !== String)
    throw `invalid id`;

  const courseCollection = await courses();
  const parsedId = ObjectId.createFromHexString(id);
  const thisCourse = await courseCollection.findOne({ _id: parsedId });
  if (thisCourse === null) throw "No course with this id";
  return thisCourse;
};

const getCourseByCode = async code => {
  if (typeof code === "undefined" || code.constructor !== String)
    throw `invalid code`;

  const courseCollection = await courses();
  const thoseCourse = await courseCollection.findOne({ code: code });
  if (thoseCourse === null) throw "No course with this code";
  return thoseCourse;
};

module.exports = {
  addCourse,
  getAllCourse,
  getCourseById,
  getListOfCourses,
  getCourseByCode
};
