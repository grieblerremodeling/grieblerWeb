import { CreateCommentService } from "../../services/review/CreateCommentService";

export default async (req: any, res: any) => {
  const { name, stars, description } = req.body;

  const createCommentService = await CreateCommentService(
    name,
    stars,
    description
  );

  res.json({ result: createCommentService });
};
