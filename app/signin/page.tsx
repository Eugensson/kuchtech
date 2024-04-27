import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

import { SignInForm } from "@/components/SignInForm";

const SignInPage = () => {
  return (
    <div className="h-[400px] flex items-center ">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
