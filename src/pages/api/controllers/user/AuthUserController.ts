import { AuthUserService } from "../../services/user/AuthUserService";

export default async (req: any, res: any) => {
  const { email, password } = req.body;

  const auth = await AuthUserService(email, password);

  res.json({ result: auth });
};
