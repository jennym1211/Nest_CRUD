/*
https://docs.nestjs.com/providers#services
*/
import { PrismaClient, state } from '@prisma/client';
import { Injectable } from '@nestjs/common';
const prisma = new PrismaClient();
@Injectable()
export class StateService {
  async getAllStates(): Promise<state[]> {
    const states = await prisma.state.findMany();
    return states;
  }
}
