import { Github } from "lucide-react";
//import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";

import { Button } from "./components/ui/button";

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      variant="link"
      asChild
      className="scroll-m-20 text-xl font-semibold tracking-tight"
    >
      {children}
    </Button>
  );
};

function page() {
  return (
    <>
      <KanbanBoard/>
    </>
  );
}

export default page;

