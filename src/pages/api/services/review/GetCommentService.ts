import { prismaClient } from "../../prisma";

export async function GetCommentService() {
  return prismaClient.client.findMany({
    select: {
      id: true,
      name: true,
      stars: true,
      description: true,
    },
  });
}
