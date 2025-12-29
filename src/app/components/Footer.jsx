import Image from "next/image";
import Links from "./Links";
import Custbutton from "./Button";
import Link from "next/link";
function Footer() {
  return (
    <div className="mt-auto flex flex-col items-center bg-bg-secondary inset-shadow-white/8 inset-shadow-2xs min-w-full">
      <div className="flex items-start justify-between flex-row py-16 container mx-auto">
        
        {/* ==================== LOGO SIDE ========== */}
        <div className=" w-72 flex flex-col items-start mb-auto ">
          <div className="flex flex-col justify-center items-start">
            <Links path="/" styleType="link">
              <div className="w-40">
                <Image
                  src="/logo.png"
                  width={395}
                  height={108}
                  alt="Picture of the author"
                  className="mx-auto"
                />
              </div>
            </Links>
            {/* ======== CONTACT INFORMATION ===== */}
            <div className="pt-16 flex flex-col justify-center items-center">
              <h6>Contact Information</h6>
              <Link
                href="mailto:someone@example.com"
                className="font-heading text-text-primary flex items-center mr-auto gap-2 pt-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="#ccc"
                    d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"
                  ></path>
                </svg>
                support@alaradi.com
              </Link>
              <Link
                href="tel:+123 456789"
                className="font-heading text-text-primary flex mr-auto items-center gap-2 pt-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ccc"
                    d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"
                  ></path>
                </svg>
                +123 456789
              </Link>
            </div>
          </div>
        </div>
        {/* // todo */}
        <div className="flex flex-col gap-2 items-start justify-center">
          <Links path="/pages/about" name="About" styleType="footerLink" />
          <Links
            path="/pages/services"
            name="Services"
            styleType="footerLink"
          />
          <Links path="/pages/blogs" name="Blogs" styleType="footerLink" />
          <Links path="/pages/contact" name="Contact" styleType="footerLink" />
        </div>
        {/* =============== NEWSLETTER SIDE */}
        <div className="w-2/6">
          <div className="w-full">
            <h5>Get In Touch!</h5>
            <div className="flex gap-4 bg-gray-300 border-white/60 border">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" w-full px-2"
              />
              <Custbutton btn="Subscribe" styleType='smCta' />
            </div>
          </div>

          <div className=" flex items-center justify-between mt-6">
            {/* =========== SOCIALMEDIA SECTION */}
            <div className="flex flex-col gap-1">
              <h6>Follow Us</h6>
              <div className="flex items-center gap-6">
                {/*  FACEBOOK */}
                <Links path="https://www.facebook.com" styleType="footerLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#ccc"
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                    ></path>
                  </svg>
                </Links>
                {/*  YOUTUBE */}
                <Links path="https://www.youtube.com" styleType="footerLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 24 24"
                  >
                    <g fill="#ccc" fillRule="evenodd" clipRule="evenodd">
                      <path d="M8.217 8.286C9.265 7.254 10.514 6.743 12 6.743s2.735.51 3.783 1.543s1.562 2.258 1.562 3.714s-.514 2.68-1.562 3.713s-2.297 1.543-3.783 1.543s-2.735-.51-3.783-1.543S6.655 13.455 6.655 12s.514-2.682 1.562-3.714m6.977 3.715L10 14.91V9.088z"></path>
                      <path d="M19.071 18.966Q22.001 16.08 22 12q0-4.081-2.929-6.967Q16.141 2.147 12 2.147T4.929 5.033T2 12q0 4.08 2.929 6.966q2.93 2.886 7.071 2.886q4.142 0 7.071-2.886M12 5.433c-1.827 0-3.407.644-4.702 1.92C6.002 8.63 5.345 10.19 5.345 12c0 1.809.657 3.37 1.953 4.646c1.295 1.276 2.874 1.92 4.702 1.92s3.407-.644 4.702-1.92c1.296-1.276 1.953-2.837 1.953-4.646c0-1.81-.657-3.37-1.953-4.647c-1.295-1.276-2.875-1.92-4.702-1.92"></path>
                    </g>
                  </svg>
                </Links>
                {/*  LINKEDIN */}
                <Links
                  path="https://www.linkedin.com/uas/login?fromSignIn=true&session_redirect=%2Fflagship-web%2Ffeed%2F"
                  styleType="footerLink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#ccc"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                    ></path>
                  </svg>
                </Links>
                {/*  INSTAGRAM */}
                <Links path="https://www.instagram.com" styleType="footerLink">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={34}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#ccc"
                      d="M13 10a3 3 0 1 1-6 0q.001-.257.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049q.048.243.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.3.3 0 0 0 .301-.3V6.401a.3.3 0 0 0-.301-.301H12.4a.3.3 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"
                    ></path>
                  </svg>
                </Links>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white/16 border w-full container" />
      {/*  */}
      {/* =============== COPYRIGHTS SIDE */}
      <div className="flex justify-between gap-16 items-center container py-6">
        <div className="flex flex-row gap-2 justify-center items-center">
          <p className=" text-text-primary align-middle small">
            &copy; 2025 Copyright
          </p>
          <p className="font-heading text-text-primary small">
            {" "}
            Alaradi. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <Links
            path="/pages/Privacy"
            name="Privacy Policy"
            styleType="footerLink"
          />
          <Links
            path="/pages/terms"
            name="Terms & condition"
            styleType="footerLink"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
