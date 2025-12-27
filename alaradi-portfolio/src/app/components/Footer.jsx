import Links from "./Links";

function Footer() {
  return (
    <div className="mt-auto flex  bg-amber-600/25 shadow-md min-w-screen">
      <div className="flex items-center justify-between flex-row py-8 container mx-auto">
        <div className="flex flex-col items-start justify-center">
          <u>Column 1</u>
          <Links path="/pages/about" name="About" styleType="link" />
          <Links path="/pages/services" name="Services" styleType="link" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <u>Column 2</u>
          <Links path="/" name="Alaradi" styleType="logo" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <u>Column 3</u>
          <Links path="/pages/about" name="About" styleType="link" />
          <Links path="/pages/services" name="Services" styleType="link" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
