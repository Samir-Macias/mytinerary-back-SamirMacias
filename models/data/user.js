import "dotenv/config.js"
import "../../config/database.js"
import User from "../User.js";


const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      photoUrl: "https://example.com/photos/john.jpg",
      password: "Password1!",
      online: true, // Usuario online
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      photoUrl: "https://example.com/photos/jane.jpg",
      password: "Secure#2",
      online: true, // Usuario online
    },
    {
      firstName: "Alice",
      lastName: "Brown",
      email: "alice.brown@example.com",
      photoUrl: "https://example.com/photos/alice.jpg",
      password: "Admin@3!",
      online: false,
    },
    {
      firstName: "Charlie",
      lastName: "Johnson",
      email: "charlie.johnson@example.com",
      photoUrl: "https://example.com/photos/charlie.jpg",
      password: "Test@123",
      online: false,
    },
    {
      firstName: "Eve",
      lastName: "Davis",
      email: "eve.davis@example.com",
      photoUrl: "https://example.com/photos/eve.jpg",
      password: "Good$5Job",
      online: false,
    },
    {
      firstName: "Tom",
      lastName: "Harris",
      email: "tom.harris@example.com",
      photoUrl: "https://example.com/photos/tom.jpg",
      password: "Strong@9",
      online: false,
    },
    {
      firstName: "Lucy",
      lastName: "Wilson",
      email: "lucy.wilson@example.com",
      photoUrl: "https://example.com/photos/lucy.jpg",
      password: "Pass#321",
      online: false,
    },
    {
      firstName: "Oscar",
      lastName: "Martinez",
      email: "oscar.martinez@example.com",
      photoUrl: "https://example.com/photos/oscar.jpg",
      password: "Valid#99",
      online: false,
    },
    {
      firstName: "Sophia",
      lastName: "Clark",
      email: "sophia.clark@example.com",
      photoUrl: "https://example.com/photos/sophia.jpg",
      password: "Kingdom@4",
      online: false,
    },
    {
      firstName: "Liam",
      lastName: "Walker",
      email: "liam.walker@example.com",
      photoUrl: "https://example.com/photos/liam.jpg",
      password: "Qwerty#2",
      online: false,
    },
  ];

  User.insertMany(users)
