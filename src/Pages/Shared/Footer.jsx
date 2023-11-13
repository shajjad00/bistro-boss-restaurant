import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside className="mx-auto">
          <p className="text-white text-2xl font-semibold mx-auto">
            CONTACT US
          </p>
          <p className="text-center text-lg">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </aside>
        <nav className="">
          <header className="text-white text-2xl font-semibold">
            Follow US
          </header>
          <p className="text-lg">Join us on social media</p>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <BiLogoFacebook></BiLogoFacebook>
            <BiLogoInstagram></BiLogoInstagram>
            <BiLogoTwitter></BiLogoTwitter>
          </div>
        </nav>
      </footer>
      <footer className=" items-center p-4 bg-[#151515] text-center text-white">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
