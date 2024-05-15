import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="mt-10 cursor-pointer inline-block">
        <Image
          src="/icons/logo.svg"
          priority
          alt="logo"
          width={247}
          height={57}
        />
      </div>
    </Link>
  );
}

export default Logo;
