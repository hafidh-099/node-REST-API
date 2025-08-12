const db = require("../config/database.config");

class Feed {
  static async FeetchFeed() {
    const [data] = await db.execute("select * from Students");
    return data;
  }
  static async AddFeed(name, email, password) {
    const result = await db.execute(
      "insert into Students(name,email,password)values(?,?,?)",
      [name, email, password]
    );
    return result;
  }
  static async DelteFeed(id) {
    await db.execute("delete from Students where id=?", [id]);
  }
  static async EditUser(id){
    const [user]=await db.execute("select * from Students where id=?",[id]);
    return user
  }
}
module.exports = Feed;
