import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

import { RegisterForm } from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="h-[400px] flex items-center ">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
