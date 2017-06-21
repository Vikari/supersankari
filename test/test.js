const meta = require("reflect-metadata");
const assert = require("assert");
const request = require("supertest");
const DataService = require("../src/app/services/data.service.ts");

describe("Data service", function() {
  var dataService;
  beforeEach(function() {
    dataService = new DataService();
  });

  it("Should return tulokset", function() {
    assert.equal(dataService.haeTulokset().length, 3);
  });
});

// describe("GET /", function() {
//   it("respond with json", function(done) {
//     request(app)
//       .get("/")
//       .set("Accept", "application/json")
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//
// describe("GET /tulokset", function() {
//   it("respond with json", function(done) {
//     request(app)
//       .get("/tulokset")
//       .set("Accept", "application/json")
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//
// describe("GET /app", function() {
//   it("respond with 301", function(done) {
//     request(app)
//       .get("/app")
//       .set("Accept", "application/json")
//       .expect(301)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//
// describe("Array", function() {
//   describe("#indexOf()", function() {
//     it("should return -1 when the value is not present", function() {
//       assert.equal(-1, [1, 2, 3].indexOf(4));
//     });
//   });
// });
