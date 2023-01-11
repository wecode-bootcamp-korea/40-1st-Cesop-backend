const request = require("supertest");

const { createApp } = require("./app");
const AppDataSource = require("./api/models/dataSource");

describe("Sign Up", () => {
  let app;

  beforeAll(async () => {
   
    app = createApp();
    await AppDataSource.initialize();
  });   

  afterAll(async () => {
    await AppDataSource.query(`SET foreign_key_checks=0`);
    await AppDataSource.query(`TRUNCATE users`);
    await AppDataSource.destroy();
  });

  test("FAILED: INVALID_EMAIL", async () => {
   
    await request(app)
      .post("/users/signup") 
      .send({ lastName:"abc", firstName:"bbc", email: "wrongEmail", password: "password0012" }) 
      .expect(400) 
      .expect({ message: "INVALID_EMAIL" });
  });

  test("SUCCESS: created user", async () => {
    await request(app)
      .post("/users/signup")
      .send({ lastName:"abc", firstName:"bbc", email: "wecode001@gmail.com", password: "password0012" })
      .expect(201);
  });

  test("FAILED: duplicated email", async () => {
    await request(app)
      .post("/users/signup")
      .send({ lastName:"abc", firstName:"bbc", email: "wecode001@gmail.com", password: "password0012" })
      .expect(500)
      .expect({ message: "duplicated email" });
  });
 
});


describe("Sign In", () => {
    let app;
  
    beforeAll(async () => {
     
      app = createApp();
      await AppDataSource.initialize();
    });   
  
    afterAll(async () => {
      await AppDataSource.query(`SET foreign_key_checks=0`);
      await AppDataSource.destroy();
    });
  
    test("FAILED: INVALID_EMAIL", async () => {
     
      await request(app)
        .post("/users/signin") 
        .send({ email: "wrongEmail", password: "password0012" }) 
        .expect(401) 
        .expect({ message: "INVALID_EMAIL" });
    });
  
    test("SUCCESS: created user", async () => {
      await request(app)
        .post("/users/signin")
        .send({ email: "email@naver.com", password: "abcd1234" })
        .expect(201);
    });
  
    test("FAILED: duplicated email", async () => {
      await request(app)
        .post("/users/signin")
        .send({ email: "wecode001@gmail.com", password: "password0012" })
        .expect(500)
        .expect({ message: "duplicated email" });
    });
  
    
  });