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
  if (thisCourse === null) throw "No major with this id";
  return thisCourse;
};

module.exports = {
  addCourse,
  getAllCourse,
  getCourseById,
  getListOfCourses
};
