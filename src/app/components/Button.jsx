const styles = {
  smCta:
    "flex justify-center items-center gap-2 bg-bg-accent px-4 py-2 text-white shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-orange-700 text-sm md:text-base whitespace-nowrap min-w-[120px]",

  bgCta:
    "bg-bg-accent px-6 md:px-10 py-3 md:py-4 text-text-primary font-heading shadow-md cursor-pointer text-base md:text-xl transition-color duration-300 ease-in-out hover:bg-orange-700 flex items-center justify-center   whitespace-nowrap w-full sm:w-[200px]",

  navBtn:
    "flex justify-center items-center gap-2 bg-bg-accent px-4 py-2 text-text-primary font-semibold shadow-md cursor-pointer transition-all duration-300 hover:bg-orange-700 hover:text-white text-sm md:text-base whitespace-nowrap min-w-[100px]",

  smallBtn:
    "font-heading text-white cursor-pointer transition-all duration-200 hover:text-white/65 text-sm",

  chostBtn:
    "border border-border-accent px-6 md:px-10 py-3 md:py-4 text-text-accent font-heading text-base md:text-xl shadow-md cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center hover:text-text-secondary hover:bg-bg-secondary whitespace-nowrap w-full sm:w-[200px]",
};

function Button({ btn, styleType, children = "" }) {
  return (
    <button className={styles[styleType]}>
      {btn}
      {children}
    </button>
  );
}

export default Button;
