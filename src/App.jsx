import "./App.css";
import logo from "./assets/logo.svg";
import whiteLogo from "./assets/whitelogo.svg";

import intro from "./assets/bg-intro-desktop.svg";
import mockup from "./assets/image-mockups.png";

import icon1 from "./assets/icon-online.svg";
import icon2 from "./assets/icon-budgeting.svg";
import icon3 from "./assets/icon-onboarding.svg";
import icon4 from "./assets/icon-api.svg";

import article1 from "./assets/image-confetti.jpg";
import article2 from "./assets/image-currency.jpg";
import article3 from "./assets/image-plane.jpg";
import article4 from "./assets/image-restaurant.jpg";

import media1 from "./assets/icon-facebook.svg";
import media2 from "./assets/icon-youtube.svg";
import media3 from "./assets/icon-twitter.svg";
import media4 from "./assets/icon-pinterest.svg";
import media5 from "./assets/icon-instagram.svg";

import menuIcon from './assets/icon-hamburger.svg'

import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 600) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className="App flex flex-col">
      <div className="flex headerWrapper justify-center h-[5rem] bg-white z-30">
        <div className="w-[85%] flex justify-between items-center header">
          <img src={logo} alt="" className="ml-20 md900:ml-10 md800:ml-0" />
          <div className="flex gap-5 text-[#9698a6] h-full">
            <span className="tag md900:hidden">Home</span>
            <span className="tag md900:hidden">About</span>
            <span className="tag md900:hidden">Contact</span>
            <span className="tag md900:hidden">Blog</span>
            <span className="tag md900:hidden">Careers</span>
          </div>
          {isMobile == false ? <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-7 py-2 rounded-[10rem] text-white hover:opacity-70 duration-100 ease-in-out">
            Request Invite
          </button> : <img src={menuIcon} alt="" />}
        </div>
      </div>
      <div className="flex justify-center heroArea">
        <div className="flex justify-between h-[60vh] w-[77vw]">
          <div className="flex flex-col justify-center gap-7 h-[100%] w-[100%] lg1000:items-center">
            <span className="text-5xl leading-[3.5rem]">
              Next generation<br></br>digital banking
            </span>
            <p className="text-[#9698a6] text-[18px]">
              Take your financial life online. Your Easybank account<br></br>{" "}
              will be a one-stop-shop for spending, saving,<br></br> budgeting,
              investing, and much more.
            </p>
            <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] w-[10rem] px-7 py-2 rounded-[10rem] text-white hover:opacity-70 duration-100 ease-in-out">
              Request Invite
            </button>
          </div>
          <div className="absolute -top-[12rem] -right-[17rem] lg1600:-right-[24rem] lg1500:-right-[30rem] lg1400:-right-[35rem] lg1300:-right-[40rem] lg1200:-right-[50rem] lg1000:hidden heroimgContainer">
            <img src={intro} alt="" className="introImg -z-20" />
            <img
              src={mockup}
              alt=""
              className="absolute mockupImg top-40 right-36 z-20"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-[40rem] py-20 bg-[#f3f4f6] z-10 explanation">
        <div className="flex flex-col items-center w-[77%]">
          <div className="flex flex-col gap-7 items-start w-[94%]">
            <span className="text-5xl">Why choose Easybank?</span>
            <p className="text-[18px] text-[#9698a6]">
              We leverage Open Banking to turn your bank account into your
              financial hub.<br></br>Controlyour finances like never before.
            </p>
          </div>
          <div className="flex gap-5 mt-[7rem] lg1200:flex-col lg1200:items-center w-full">
            <div className="flex flex-col gap-5 items-start">
              <img src={icon1} alt="" className="w-[5rem]" />
              <span className="text-2xl">Online Banking</span>
              <p className="text-[#9698a6] text-[18px]">
                Our modern web and mobile<br></br> apllications allow you to
                keep<br></br> track of your finances wherever you<br></br> are
                in the world.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <img src={icon2} alt="" className="w-[5rem]" />
              <span className="text-2xl">Simple Budgeting</span>
              <p className="text-[#9698a6] text-[18px]">
                See exactly where your money<br></br> goes each month. Receive
                <br></br> notifications when you're close to<br></br>hitting
                your limits.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <img src={icon3} alt="" className="w-[5rem]" />
              <span className="text-2xl">Fast Onboarding</span>
              <p className="text-[#9698a6] text-[18px]">
                We don't do branches. Open your<br></br>account in minutes
                online and start<br></br>taking control of your finances
                <br></br>right away.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start">
              <img src={icon4} alt="" className="w-[5rem]" />
              <span className="text-2xl">Open API</span>
              <p className="text-[#9698a6] text-[18px]">
                Manage your savings, investments,<br></br>pension, and much more
                from one<br></br>account. Tracking your money has never been
                easier.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="articles flex flex-col items-center w-[100vw] h-[50rem] mt-40 gap-10">
        <div className="flex text-4xl w-[80%] lg1700:justify-center">
          <span>Latest Articles</span>
        </div>
        <div className="flex gap-10 justify-center items-start w-[80%] articlesContainer lg1700:flex-wrap">
          <div className="flex flex-col justify-center bg-[#f3f4f6] article">
            <img src={article1} alt="" className="mb-10 minusm" />
            <span className="text-[#9696a6] text-[.9rem]">
              By Claire Robinson
            </span>
            <span className="text-2xl hover:text-[hsl(136,65%,51%)] duration-100 cursor-pointer">
              Receive money in any<br></br>currency with no fees
            </span>
            <p className="text-[#9696a6] mt-5">
              The world is getting smaller and<br></br>we're becoming more
              mobile. So<br></br> why should you be forced to only receive money
              in a single ...
            </p>
          </div>
          <div className="flex flex-col justify-center bg-[#f3f4f6] article">
            <img src={article2} alt="" className="mb-10 minusm" />
            <span className="text-[#9696a6] text-[.9rem]">
              By Wilson Hutton
            </span>
            <span className="text-2xl hover:text-[hsl(136,65%,51%)] duration-100 cursor-pointer">
              Treat yourself without<br></br>worrying about money
            </span>
            <p className="text-[#9696a6] mt-5">
              Our simple budgeting feature<br></br>allows you to seperate out
              your<br></br>spending and set realistic limits<br></br>each month.
              That means you ...
            </p>
          </div>
          <div className="flex flex-col justify-center bg-[#f3f4f6] article">
            <img src={article3} alt="" className="mb-10 minusm" />
            <span className="text-[#9696a6] text-[.9rem]">
              By Wilson Hutton
            </span>
            <span className="text-2xl hover:text-[hsl(136,65%,51%)] duration-100 cursor-pointer">
              Take your Easybank card<br></br>wherever you go
            </span>
            <p className="text-[#9696a6] mt-5">
              We want you to enjoy your travels.<br></br>This is why we don't
              charge any<br></br>fees on purchases while you're<br></br> abroad.
              We'll even show you ...
            </p>
          </div>
          <div className="flex flex-col justify-center bg-[#f3f4f6] article">
            <img src={article4} alt="" className="mb-10 minusm" />
            <span className="text-[#9696a6] text-[.9rem]">
              By Claire Robinson
            </span>
            <span className="text-2xl hover:text-[hsl(136,65%,51%)] duration-100 cursor-pointer">
              Our invite-only Beta<br></br> accounts are now live!
            </span>
            <p className="text-[#9696a6] mt-5">
              After a lot of hard work by the<br></br> whole team, we're excited
              to launch our closed beta. It's easy to request<br></br> an invite
              through the site ...
            </p>
          </div>
        </div>
      </div>
        <div className="footerWrapper flex justify-center items-start w-[100vw] lg1700:items-end lg1700:mt-[38rem] lg1400:min-h-[200vh] lg1400:mt-[20rem] mt-[8rem]">
          <div className="footer flex justify-between w-[100%] h-[15rem] px-20 bg-[#2d314d]">
            <div className="flex gap-40">
              <div className="flex flex-col justify-center gap-20">
                <img src={whiteLogo} alt="" className="fill-white" />
                <div className="flex gap-3">
                  <img
                    src={media1}
                    alt=""
                    className="mediaIcon hover:fill-[#31d35c] duration-100 esae-in-out"
                  />
                  <img
                    src={media2}
                    alt=""
                    className="mediaIcon hover:fill-[#31d35c] duration-100 esae-in-out"
                  />
                  <img
                    src={media3}
                    alt=""
                    className="mediaIcon hover:fill-[#31d35c] duration-100 esae-in-out"
                  />
                  <img
                    src={media4}
                    alt=""
                    className="mediaIcon hover:fill-[#31d35c] duration-100 esae-in-out"
                  />
                  <img
                    src={media5}
                    alt=""
                    className="mediaIcon hover:fill-[#31d35c] duration-100 esae-in-out"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center text-[#f3f4f6]">
                <span className="footerTag hover:text-[#31d35c] duration-100 ease-in-out cursor-pointer">
                  About Us
                </span>
                <span className="footerTag hover:text-[#31d35c] duration-100 ease-in-out cursor-pointer">
                  Contact
                </span>
                <span className="footerTag hover:text-[#31d35c] duration-100 ease-in-out cursor-pointer">
                  Blog
                </span>
              </div>
              <div className="flex flex-col gap-5 justify-center text-[#f3f4f6]">
                <span className="footerTag hover:text-[#31d35c] duration-100 ease-in-out cursor-pointer">
                  Careers
                </span>
                <span className="footerTag hover:text-[#31d35c] duration-100 ease-in-out cursor-pointer">
                  Support
                </span>
                <span className="footerTag hover:text-[#31d35c] duration-100 ease-in-out cursor-pointer">
                  Privacy Policy
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <button className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-14 py-3 rounded-[10rem] text-white ml-auto hover:brightness-[110%] duration-100 ease-in-out">
                Request Invite
              </button>
              <span className="text-[#9698a6]">
                &copy; Easybank. All rights reserved
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
