import { DeleteCommentService } from "../../services/review/DeleteCommentService";

export default async (req: any, res: any) => {
  const id = req.query.id as string;

  const deleteCommentService = await DeleteCommentService(id);

  res.json({ result: deleteCommentService });
};
