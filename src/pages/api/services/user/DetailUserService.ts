import { prismaClient } from "../../prisma";

export async function DetailUserService(user_id: string) {
  const user = await prismaClient.user.findFirst({
    where: {
      id: user_id,
    },
    select: {
      id: true,
      email: true,
    },
  });

  return user;
}
