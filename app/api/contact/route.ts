import { NextResponse } from "next/server";

import { mailOptions, transporter } from "@/lib/mail";

export const POST = async (request: any) => {
  const { username, email, message } = await request.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Повідомлення зворотного зв'язку",
      html: `<p>Ім'я абонента - ${username}, контактний email - ${email}, текст повідомлення - ${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
};
