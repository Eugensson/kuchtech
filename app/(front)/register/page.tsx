import { Metadata } from "next";

import Form from "@/app/(front)/register/Form";

export const metadata: Metadata = {
  title: "Реєстрація в системі керування",
};

export default async function Register() {
  return <Form />;
}
