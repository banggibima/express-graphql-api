import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const Todo = {
  Query: {
    indexTodo: async (root) => {
      try {
        const data = await prisma.todo.findMany();
        return data;
      } catch (err) {
        throw err;
      }
    },
    showTodo: async (root, { id }) => {
      try {
        const data = await prisma.todo.findUnique({
          where: {
            id,
          },
        });
        return data;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createTodo: async (root, { title, description }) => {
      try {
        const data = await prisma.todo.create({
          data: {
            title,
            description,
          },
        });
        return data;
      } catch (err) {
        throw err;
      }
    },
    updateTodo: async (root, { id, title, description }) => {
      try {
        const data = await prisma.todo.update({
          where: {
            id,
          },
          data: {
            title,
            description,
          },
        });
        return data;
      } catch (err) {
        throw err;
      }
    },
    destroyTodo: async (root, { id }) => {
      try {
        const data = await prisma.todo.delete({
          where: {
            id,
          },
        });
        return data;
      } catch (err) {
        throw err;
      }
    },
  },
};

export default Todo;
