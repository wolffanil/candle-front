import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-hoar-200 to-hoar-400 relative">
      {children}
    </div>
  );
}

export default layout;
