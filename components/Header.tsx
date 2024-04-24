import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export const Header = () => {
  return (
    <header className="mx-auto max-w-screen-xl w-full p-2">
      <div className="flex justify-between items-center">
        <Logo />
        <Navigation />
        <ThemeToggle />
      </div>
    </header>
  );
};
