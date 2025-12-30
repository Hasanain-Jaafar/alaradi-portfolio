'use client '
import Link from "next/link";
const styles = {
  logo: "font-heading text-4xl text-white cursor-pointer transition-all duration-200 hover:text-white/65 ",
  link: "font-heading text-lg text-white cursor-pointer transition-all duration-300 ",
  footerLink:
    "font-heading small text-text-secondary cursor-pointer transition-all duration-200 hover:text-white/35",
  social:
    "cursor-pointer transition-all duration-200 hover:scale-125",
};
function Links({ path, name = "", styleType, children }) {
  return (
    <div>
      <Link href={path} className={styles[styleType]}>
        {name}
        {children}
      </Link>
    </div>
  );
}

export default Links;
