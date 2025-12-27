import Links from "./Links";
import Custbutton from "./Button";

function Navbar() {
  return (
    <div className=" mx-auto  bg-amber-600/25 shadow-md min-w-screen">
      <div className="flex items-center justify-between flex-row py-8 container mx-auto">
        <div>
          <Links path="/" name="Alaradi" styleType='logo' />
        </div>
        <div className=" flex gap-6">
          <Links path="/pages/about" name="About"  styleType='link'/>
          <Links path="/pages/services" name="Services" styleType='link' />
          <Custbutton btn="Sign up" isCta={true} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
