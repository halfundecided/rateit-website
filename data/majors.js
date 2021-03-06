const mongoCollections = require("../config/mongoCollections");
const majors = mongoCollections.majors;
const { ObjectId } = require("mongodb");

const addMajor = async name => {
  if (typeof name === "undefined" || name.constructor !== String)
    throw `invalid argument`;

  const majorCollection = await majors();

  let newMajor = {
    majorName: name
  };

  const insertInfo = await majorCollection.insertOne(newMajor);
  if (insertInfo.insertedCount === 0) throw "Could not add major";
  return await majorCollection.findOne({
    _id: ObjectId(insertInfo.insertedId)
  });
};

const getAllMajor = async () => {
  const majorCollection = await majors();

  const allMajors = await majorCollection.find({}).toArray();
  return allMajors;
};

const getListOfMajors = async () => {
  const majorCollection = await majors();
  const allMajors = await majorCollection
    .find({})
    .project({ majorName: 1 })
    .toArray();
  return allMajors;
};

const getMajorById = async id => {
  if (typeof id === "undefined" || id.constructor !== String)
    throw `invalid id`;

  const majorCollection = await majors();
  const parsedId = ObjectId.createFromHexString(id);
  const thisMajor = await majorCollection.findOne({ _id: parsedId });
  if (thisMajor === null) throw "No major with this id";
  return thisMajor;
};

module.exports = {
  addMajor,
  getAllMajor,
  getMajorById,
  getListOfMajors
};
