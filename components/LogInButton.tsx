import { UserRoundCog } from "lucide-react";

import { Button } from "@/components/ui/button";

const LogInButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="hidden md:flex"
      aria-label="Кнопка входу в адмінменю"
    >
      <UserRoundCog />
    </Button>
  );
};

export default LogInButton;
