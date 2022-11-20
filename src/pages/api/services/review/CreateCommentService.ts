import { prismaClient } from "../../prisma";

export async function CreateCommentService(
  name: string,
  stars: string,
  description: string
) {
  return prismaClient.client.create({
    data: {
      name,
      stars,
      description,
    },
  });
}
