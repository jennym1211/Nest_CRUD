/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');
const { v4: uuidv4 } = require('uuid');
const prisma = new PrismaClient();

const uuid = uuidv4();
const uuid2 = uuidv4();

async function seed() {
  await prisma.state.create({
    data: {
      name: 'Texas',
      abbreviation: 'TX',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });

  await prisma.state.create({
    data: {
      name: 'California',
      abbreviation: 'CA',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });

  await prisma.user.create({
    data: {
      user_uuid: uuid,
      first_name: 'John',
      last_name: 'Doe',
      address_one: '123 Main St',
      address_two: 'Apt 123',
      state_id: 1,
      city: 'Dallas',
      zipcode: 12345,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });

  await prisma.user.create({
    data: {
      user_uuid: uuid2,
      first_name: 'Jane',
      last_name: 'Smith',
      address_one: '5432 Any Ave',
      address_two: 'Apt 543',
      city: 'Fresno',
      zipcode: 54321,
      state_id: 2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });

  await prisma.post.create({
    data: {
      title: 'New Post',
      body: {},
      user_uuid: uuid,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });

  await prisma.post.create({
    data: {
      title: 'Second Post',
      body: {},
      user_uuid: uuid2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });
}

seed();
