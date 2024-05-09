import bcrypt from "bcryptjs";

import { auth } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/lib/models/UserModel";

export const PUT = auth(async (req) => {
  if (!req.auth) {
    return Response.json({ message: "Not authenticated" }, { status: 401 });
  }

  const { user } = req.auth;

  const { name, email, password } = await req.json();

  await dbConnect();

  try {
    const dbUser = await UserModel.findById(user._id);
    if (!dbUser) {
      return Response.json(
        { message: "Користувача не знайдено" },
        {
          status: 404,
        }
      );
    }
    dbUser.name = name;
    dbUser.email = email;
    dbUser.password = password
      ? await bcrypt.hash(password, 10)
      : dbUser.password;
    await dbUser.save();
    return Response.json({ message: "Дані користувача успішно оновлено" });
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
}) as any;
