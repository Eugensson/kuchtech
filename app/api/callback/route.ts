import { NextResponse } from "next/server";

import { mailOptions, transporter } from "@/lib/mail";

export const POST = async (request: any) => {
  const { username, phone } = await request.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Новий запит на зворотній телефонний дзвоник",
      html: `<p>Ім'я абонента - ${username}, контактний номер абонента - ${phone}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
};
