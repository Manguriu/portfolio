import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Contacts({}: Props) {
  const handleClick = () => {
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className=" h-screen  relative flex  overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] ">Contact Me</h3>
      <div className="flex cont-container mt-20">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-gmail-8913532-7250524.png"
                alt="gmail"
                width={400}
                height={400}
              />
            </div>
            <div className="flip-card-back">
              <h2 className="title flex itmes-center justify-center">Gmail</h2>
              <p className="subtitle p-4">
                Get in touch ::
                <br />
                Email: brianmiruri983@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://cdn3.iconfinder.com/data/icons/3d-applications/512/app_icons_communication___phone_call_apple_icon_conversation_contacts.png"
                alt="phone"
                width={400}
                height={400}
              />
            </div>
            <div className="flip-card-back">
              <h2 className="title flex itmes-center justify-center">Phone</h2>
              <p className="subtitle p-4">
                Call
                <br />
                No. +254743807662
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png"
                alt="Github"
                width={400}
                height={400}
              />
            </div>
            <div className="flip-card-back">
              <h2 className="title flex itmes-center justify-center">Github</h2>
              <p className="subtitle p-4">
                Follow Link ::
                <br />
                Link:{" "}
                <a href="https://github.com/Manguriu">
                  {" "}
                  <u>Github Account</u>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/428/307/original/3d-social-media-icons-linkedin-free-png.png"
                alt="linkedin"
                width={400}
                height={400}
              />
            </div>
            <div className="flip-card-back">
              <h2 className="title flex itmes-center justify-center">
                LinkedIn
              </h2>
              <p className="subtitle p-4">
                LinkedIn Profile ::
                <br />
                Link:{" "}
                <a href="https://www.linkedin.com/in/brian-manguriu-3b0b07207/">
                  <u>"My Profile"</u>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleClick}
        className=" Btn px-2 py-2 mr-5  border border-[rgb(70,62,71)] rounded-full uppercase text-xm tracking-widest transition-all hover:border-[#00FFD1] hover:text-[#00FFD1]">
        <div className="sign">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15 20H9v-8H4.16L12 4.16L19.84 12H15v8Z"
            />
          </svg>
        </div>

        <div className="text">Top</div>
      </button>
    </div>
  );
}

export default Contacts;
