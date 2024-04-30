import { Metadata } from "next";

import { LoginForm } from "@/app/(front)/signin/Form";

export const metadata: Metadata = {
  title: "Вхід в систему керування",
};

export default async function Signin() {
  return (
    <section className="flex items-center justify-center">
      <LoginForm />
    </section>
  );
}
