import { prismaClient } from "../../prisma";

export async function DeleteCommentService(id: string) {
  const client = await prismaClient.client.delete({
    where: {
      id,
    },
    select: {
      id: true,
      description: true,
    },
  });

  return client;
}
