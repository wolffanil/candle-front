import { ReactNode } from "react";
import cn from "clsx";

function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full px-[274px]", className)}>{children}</div>
  );
}

export default Wrapper;
