import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import logoMobile from "@/public/images/lendfinity-mobile.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0">
      <Image src={logo} alt="Lendfinity Logo" width={180} height={64} className="sm:block hidden" />
      <Image src={logoMobile} alt="Lendfinity Logo" width={60} height={40} className="block sm:hidden" />
    </Link>
  );
}
