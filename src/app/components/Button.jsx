const styles = {
  smCta: "smbtn",
  bgCta: "bgbtn",
  chostBtn: "chostbtn",
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
