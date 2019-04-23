const mongoCollections = require("../config/mongoCollections");
const users = mongoCollections.users;
const { ObjectId } = require("mongodb");

const addUser = async username => {
  if (typeof username === "undefined" || username.constructor !== String)
    throw `invalid argumeent`;

  const userCollection = await users();

  let newUser = {
    username: username
  };

  const insertInfo = await userCollection.insertOne(newUser);
  if (insertInfo.insertedCount === 0) throw "Could not add user";
  return await userCollection.findOne({
    _id: ObjectId(insertInfo.insertedId)
  });
};

module.exports = {
  addUser
};
