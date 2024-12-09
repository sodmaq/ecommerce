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
            ©quickBuy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
