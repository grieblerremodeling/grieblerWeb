import { CreateUserService } from "../../services/user/CreateUserService";

export default async (req: any, res: any) => {
  const { email, password } = req.body;

  const createUserService = await CreateUserService(email, password);

  res.json({ result: createUserService });
};
