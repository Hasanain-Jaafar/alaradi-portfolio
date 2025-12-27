import Link from "next/link";
const styles = {
  logo: "font-logo text-4xl text-white cursor-pointer transition-all duration-200 hover:text-white/65 ",
  link: "font-heading text-lg text-white cursor-pointer transition-all duration-200 hover:text-white/65",
  footerLink:"font-heading small text-white cursor-pointer transition-all duration-200 hover:text-white/65"
};
function Links({ path, name, styleType, children }) {
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
