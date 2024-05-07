import { Metadata } from "next";

import Form from "@/app/admin/profile/Form";

export const metadata: Metadata = {
  title: "KuchTech | Профіль",
};

export default async function Profile() {
  return (
    <section className="h-[500px] flex justify-center items-center">
      <Form />
    </section>
  );
}
