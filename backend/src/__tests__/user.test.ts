import request from "supertest";
import app from "../app";
import { connectTestDB, disconnectTestDB, clearTestDB } from "./test-db";

// Test suite for user authentication
describe("User Authentication API", () => {
  // Connect to a new in-memory database before running any tests.
  beforeAll(async () => {
    await connectTestDB();
  });

  // Clear all test data after every test.
  afterEach(async () => {
    await clearTestDB();
  });

  // Remove and close the db and server.
  afterAll(async () => {
    await disconnectTestDB();
  });

  // Test for User Registration
  describe("POST /api/users/register", () => {
    it("should register a new user and return 201", async () => {
      const res = await request(app).post("/api/users/register").send({
        firstName: "Mana",
        lastName: "Silva",
        email: "manasilva@gmail.com",
        mobile: "+94783456700",
        password: "password123",
        userType: "attendee",
      });
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("email", "nikilaamantha@gmail.com");
    });

    it("should fail to register with an existing email and return 400", async () => {
      // first, register a user
      await request(app).post("api/users/register").send({
        firstName: "Nikila",
        lastName: "Amantha",
        email: "nikilaamantha@gmail.com",
        mobile: "+94711234567",
        password: "password456",
      });

      // Then, try to register with the same email
      const res = await request(app).post("/api/users/register").send({
        firstName: "Nikila",
        lastName: "Amantha",
        email: "nikilaamantha@gmail.com",
        mobile: "+94711234567",
        password: "password456",
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty("message", "Registration failed");
    });
  });

  // Test for user login
  describe("POST /api/users/login", () => {
    beforeEach(async () => {
      // Register a new user before test
      await request(app).post("/api/users/register").send({
        firstName: "Test",
        lastName: "User",
        email: "testuser@gmail.com",
        mobile: "+94777002233",
        password: "test1234",
      });
    });

    it("should log in an existing user and return a JWT token", async () => {
      const res = await request(app).post("/api/users/login").send({
        email: "testuser@gmail.com",
        password: "test1234",
      });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("token");
    });
  });

  //   // Test for Protected Route (User Profile)
  //   describe('GET /api/users/profile', () => {
  //     let token: string;

  //     beforeEach(async () => {
  //       // Register and log in a user to get a valid token
  //       await request(app)
  //         .post('/api/users/register')
  //         .send({
  //           firstName: 'Profile',
  //           lastName: 'User',
  //           email: 'profile@example.com',
  //           mobile: '+94751234567',
  //           password: 'password123',
  //         });

  //       const loginRes = await request(app)
  //         .post('/api/users/login')
  //         .send({
  //           email: 'profile@example.com',
  //           password: 'password123',
  //         });
  //       token = loginRes.body.token;
  //     });

  //     it('should fail to get profile without a token and return 401', async () => {
  //       const res = await request(app).get('/api/users/profile');
  //       expect(res.statusCode).toEqual(401);
  //       expect(res.body).toHaveProperty('message', 'Not authorized, no token');
  //     });

  //     it('should get user profile with a valid token', async () => {
  //       const res = await request(app)
  //         .get('/api/users/profile')
  //         .set('Authorization', `Bearer ${token}`);
  //       expect(res.statusCode).toEqual(200);
  //       expect(res.body).toHaveProperty('message', 'This is a protected profile route.');
  //     });
  //   });
});
