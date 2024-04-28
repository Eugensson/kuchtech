import { Metadata } from "next";

import Form from "@/app/admin/profile/Form";

export const metadata: Metadata = {
  title: "KuchTech | Профіль",
};

export default async function Profile() {
  return <Form />;
}
