import { ReactNode, ButtonHTMLAttributes } from "react";

import cn from "clsx";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

function Button({ className, children, ...rest }: IButton) {
  return (
    <button
      className={cn(
        " rounded-[10px] border border-black bg-white/0 px-[60px] py-[10px] font-cruinn text-[32px] text-black hover:bg-hoar-500 duration-200 flex justify-center items-center",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
