import { DetailUserService } from "../../services/user/DetailUserService";

export default async (req: any, res: any) => {
  const user_id = req.user_id;

  const createUserService = await DetailUserService(user_id);

  res.json({ result: createUserService });
};
