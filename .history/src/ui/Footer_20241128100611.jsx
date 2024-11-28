import { BsTelephoneForward, BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { RxSketchLogo } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <footer className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 py-10 px-10 font-sans tracking-wide">
        <div className="max-w-2xl mx-auto text-center">
          <a href="javascript:void(0)" className="inline-block">
            <RxSketchLogo
              className="w-10 h-10"
              color="blue"
              onClick={() => navigate("/")}
            />
          </a>
          <p className="text-sm mt-8 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida, mi eu pulvinar cursus, sem elit interdum mauris dipiscing
            elit. Aenean gravida, mi eu pulvinar cursus.{" "}
            <a
              href="javascript:void(0)"
              className="text-sm font-semibold text-blue-500"
            >
              Read more...
            </a>
          </p>

          <ul className="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
            <li>
              <a href="javascript:void(0)">
                <FaFacebook className="w-6 h-6" color="#1877f2" />
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <FaLinkedin className="w-6 h-6" color="#0077b5" />
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <FaInstagram className="w-6 h-6" color="#c837ab" />
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">
                <BsTwitterX className="w-6 h-6" color="#1da1f2" />
              </a>
            </li>
          </ul>
        </div>

        <ul className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          <li className="flex items-center">
            <div className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <BsTelephoneForward className="w-5 h-5" color="#007bff" />
            </div>
            <a href="javascript:void(0)" className="text-blue-500 text-sm ml-3">
              <small className="block">Tel</small>
              <strong>180-548-2588</strong>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <CiMail className="w-5 h-5" color="#007bff" />
            </div>
            <a href="javascript:void(0)" className="text-blue-500 text-sm ml-3">
              <small className="block">Mail</small>
              <strong>info@example.com</strong>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#007bff"
                viewBox="0 0 368.16 368.16"
              >
                <path
                  d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                  data-original="#000000"
                />
                <path
                  d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                  data-original="#000000"
                />
              </svg> */}
              <IoLocation className="w-5 h-5" color="#007bff" />
            </div>
            <a href="javascript:void(0)" className="text-blue-500 text-sm ml-3">
              <small className="block">Address</small>
              <strong>123 Main Street City, Country</strong>
            </a>
          </li>
        </ul>

        <hr className="my-10 border-gray-500" />

        <div className="flex max-md:flex-col gap-4">
          <ul className="flex flex-wrap gap-4">
            <li className="text-sm">
              <a
                href="javascript:void(0)"
                className="text-blue-500 font-semibold hover:underline"
              >
                Terms of Service
              </a>
            </li>
            <li className="text-sm">
              <a
                href="javascript:void(0)"
                className="text-blue-500 font-semibold hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li className="text-sm">
              <a
                href="javascript:void(0)"
                className="text-blue-500 font-semibold hover:underline"
              >
                Security
              </a>
            </li>
          </ul>
          <p className="text-sm text-gray-200 md:ml-auto">
            © ReadymadeUI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
