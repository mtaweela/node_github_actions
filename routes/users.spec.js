const expect = require("expect");
const { connection } = require("mongoose");

const { app } = require("../app");

describe("test pass", () => {
  it("should should pass", (done) => {
    expect(true).toBeTruthy();
    done();
  });
});

after(async () => {
  // await connection.db.dropDatabase();
  console.log("object.......");
  return connection.close();
});
