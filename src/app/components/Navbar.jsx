import Links from "./Links";
import Custbutton from "./Button";
import Image from "next/image";

function Navbar() {
  return (
    <div className=" mx-auto bg-bg-secondary shadow-white/5 shadow-md min-w-full sticky top-0 z-10">
      <div className="flex items-center justify-between flex-row py-8 container mx-auto">
        <div>
          <Links path="/" styleType="link">
            <div className="w-36">
              <Image
                src="/logo.png"
                width={395}
                height={108}
                alt="Picture of the author"
              />
            </div>
          </Links>
        </div>
        <div className=" flex items-center gap-6">
          <Links path="/blogs" name="Blogs" styleType="link" />
          <Links path="/services" name="Services" styleType="link" />
          <Links path="/about" name="About" styleType="link" />
          <Links path="/myWork" name="My Work" styleType="link" />
          <Links path="/contact" styleType="link">
            <Custbutton btn="Contact" styleType='smCta' />
          </Links>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
