import { ProfileForm } from "@/components/ProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return <ProfileForm />;
};

export default ProfilePage;
