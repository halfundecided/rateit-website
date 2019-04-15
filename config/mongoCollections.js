const conn = require("./mongoConnection");

const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await conn();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

module.exports = {
  majors: getCollectionFn("majors"),
  courses: getCollectionFn("courses")
};
