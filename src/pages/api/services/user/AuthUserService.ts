import { prismaClient } from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export async function AuthUserService(email: string, password: string) {
  // Verificar existência do email;
  const user = await prismaClient.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("User/Password Incorrect");
  }

  // Verificar se a senha é correta;
  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("User/Password Incorrect");
  }

  // gerando token e devolvendo dados(id, name, email)
  const token = sign(
    {
      // payload = opcional;
      email: user.email,
    },
    process.env.JWT_SECRET, // secret key
    {
      subject: user.id, // id do user
      expiresIn: "30d",
    }
  );

  return {
    id: user.id,
    email: user.email,
    token: token,
  };
}
