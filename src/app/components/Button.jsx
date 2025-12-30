//
const styles = {
  smCta:
    "flex justify-center items-center gap-2 bg-bg-accent px-4 py-1 text-white  shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-orange-700 hover:text-text-secondary",
  bgCta:
    "bg-bg-accent px-[2.5rem] py-[1.25rem] text-text-primary font-heading shadow-md cursor-pointer text-xl transition-all duration-300 ease-in-out hover:bg-orange-700 shadow-[#ffffff5c]/20 flex items-center gap-2 hover:gap-4",
  navBtn:
    "flex justify-center items-center gap-2 bg-bg-accent px-4 py-2 text-text-primary-primary font-semibold shadow-md cursor-pointer transition-all duration-300 hover:bg-orange-700 hover:text-white",
  smallBtn:
    "font-heading small text-white cursor-pointer transition-all duration-200 hover:text-white/65",
  chostBtn:
    "border  border-border-accent px-[2.5rem] py-[1.25rem] text-text-accent font-heading tracking-widest text-xl  shadow-md cursor-pointer transition-all duration-300 ease-in-out shadow-[#ffffff5c]/20 flex items-center justify-center hover:text-text-secondary hover:bg-bg-secondary",
};

//
function Button({ btn, styleType, children = "" }) {
  return (
    <button className={styles[styleType]}>
      {btn}
      {children}
    </button>
  );
}

export default Button;
