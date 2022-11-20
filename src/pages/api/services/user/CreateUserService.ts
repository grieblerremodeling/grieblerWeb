import { prismaClient } from "../../prisma";
import { hash } from "bcryptjs";

export async function CreateUserService(email: string, password: string) {
  if (!email) {
    throw new Error("Email Incorrect");
  }

  const userAlreadyExists = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  if (userAlreadyExists) {
    throw new Error("User Already Exists");
  }

  const passwordHash = await hash(password, 8);

  const user = await prismaClient.user.create({
    data: {
      email: email,
      password: passwordHash,
    },
    select: {
      id: true,
      email: true,
    },
  });

  return user;
}
