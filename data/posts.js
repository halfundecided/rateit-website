const mongoCollections = require("../config/mongoCollections");
const posts = mongoCollections.posts;
const { ObjectId } = require("mongodb");

const addPost = async postInfo => {
  //TODO: check types
  const postCollection = await posts();
  const newPost = {
    courseCode: postInfo.courseCode,
    courseTitle: postInfo.courseTitle,
    instructorName: postInfo.instructorName,
    term: postInfo.term,
    q1: postInfo.q1,
    q2: postInfo.q2,
    q3: postInfo.q3,
    q4: postInfo.q4,
    q5: postInfo.q5,
    q6: postInfo.q6,
    q7: postInfo.q7,
    q8: postInfo.q8
  };
  const insertInfo = await postCollection.insertOne(newPost);
  if (insertInfo.insertedCount === 0) throw "Could not add post";
  return await postCollection.findOne({
    _id: ObjectId(insertInfo.insertedId)
  });
};

const getAllPost = async () => {
  const postCollection = await posts();

  const allPosts = await postCollection.find({}).toArray();
  return allPosts;
};

const numberOfPosts = async () => {
  const postCollection = await posts();

  const numOfPosts = await postCollection.find({}).count();
  return numOfPosts;
};

module.exports = {
  addPost,
  getAllPost,
  numberOfPosts
};
