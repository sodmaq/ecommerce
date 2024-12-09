import { BsTelephoneForward, BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <linearGradient
                    id="a"
                    x1="-37.106"
                    x2="-26.555"
                    y1="-72.705"
                    y2="-84.047"
                    gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#c837ab" />
                    <stop offset=".5" stop-color="#ff543e" />
                    <stop offset="1" stop-color="#c837ab" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
                    data-original="url(#a)"
                  />
                  <path
                    fill="#fff"
                    d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                    data-original="#ffffff"
                  />
                </svg> */}
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
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#007bff"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg> */}
              <CiMail className="w-5 h-5" color="#007bff" />
            </div>
            <a href="javascript:void(0)" className="text-blue-500 text-sm ml-3">
              <small className="block">Mail</small>
              <strong>info@example.com</strong>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
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
              </svg>
            </div>
            <a href="javascript:void(0)" className="text-blue-500 text-sm ml-3">
              <small className="block">Address</small>
              <strong>123 Main Street City, Country</strong>
            </a>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="#007bff"
                viewBox="0 0 100 100"
              >
                <path
                  d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                  data-original="#000000"
                />
              </svg>
            </div>
            <a href="javascript:void(0)" className="text-blue-500 text-sm ml-3">
              <small className="block">Fax</small>
              <strong>+1-548-2588</strong>
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
