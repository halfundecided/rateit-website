const mongoCollections = require("../config/mongoCollections");
const posts = mongoCollections.posts;
const { ObjectId } = require("mongodb");

const addPost = async postInfo => {
  //TODO: check types
  const postCollection = await posts();
  console.log(postInfo);
  const newPost = {
    //major
    //course name
    instructorName: postInfo.instructorName,
    term: postInfo.selectedTerm,
    q1: postInfo.question1,
    q2: postInfo.question2,
    q3: postInfo.question3,
    q4: postInfo.question4,
    q5: postInfo.question5,
    q6: postInfo.question6,
    q7: postInfo.question7,
    q8: postInfo.question8
  };
  const insertInfo = await postCollection.insertOne(newPost);
  if (insertInfo.insertedCount === 0) throw "Could nnot add post";
  return await postCollection.findOne({
    _id: ObjectId(insertInfo.insertedId)
  });
};

const getAllPost = async () => {
  const postCollection = await posts();

  const allPosts = await postCollection.find({}).toArray();
  return allPosts;
};

module.exports = {
  addPost,
  getAllPost
};
