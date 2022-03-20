"use strict";

const db = require("./index");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  const users = await Promise.all([
    User.create({ email: "someone@email.com", password: "123" }),
    User.create({ email: "email@email.com", password: "123" }),
  ]);
}

async function runSeed() {
  try {
    await seed();
  } catch (err) {
    console.error(err);
  } finally {
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
