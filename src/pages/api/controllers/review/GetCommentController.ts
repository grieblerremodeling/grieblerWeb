import { GetCommentService } from "../../services/review/GetCommentService";

export default async (req: any, res: any) => {
  const getCommentService = await GetCommentService();

  res.json({ result: getCommentService });
};
