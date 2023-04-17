import React, { useEffect, useState } from "react";
import About from "../components/ArtistPages/About";
import Dog from "../components/ArtistPages/Dog";
import PhoneNo from "../components/ArtistPages/PhoneNo";
import SSN from "../components/ArtistPages/SSN";
import Typewriter from "typewriter-effect";

export default function Artist() {
  useEffect(() => {
    const keysArr = [...document.querySelectorAll(".key")];

    const getKey = (event) => {
      const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
      console.log("parsedKey:", parsedKey);
      const parsedCode = event.code.toLowerCase();
      console.log("parsedCode:", parsedCode);
      const element =
        document.querySelector(`[data-key="${parsedCode}"]`) ||
        document.querySelector(`[data-key="${parsedKey}"]`);
      console.log("element:", element);

      return element;
    };

    // keyboard events
    const addActiveClassOnKeydown = (event) => {
      const key = getKey(event);
      if (key) {
        key.classList.add("active");
      }
    };
    document.addEventListener("keydown", addActiveClassOnKeydown);

    const removeActiveClassOnKeyup = (event) => {
      const key = getKey(event);
      if (key) {
        key.classList.remove("active");
      }
    };
    document.addEventListener("keyup", removeActiveClassOnKeyup);

    // mouseclick events
    const addActiveClassOnMousedown = (event) => {
      if (event.target.dataset.key) {
        event.target.classList.add("active");
      }
    };
    document.addEventListener("mousedown", addActiveClassOnMousedown);

    const removeActiveClassOnMouseup = (event) => {
      if (event.target.dataset.key) {
        event.target.classList.remove("active");
      }
    };
    document.addEventListener("mouseup", removeActiveClassOnMouseup);

    // touchstart events
    const addActiveClassOnTouchstart = (event) => {
      if (event.target.dataset.key) {
        event.target.classList.add("active");
      }
    };
    document.addEventListener("mousedown", addActiveClassOnTouchstart);

    const removeActiveClassOnTouchend = (event) => {
      if (event.target.dataset.key) {
        event.target.classList.remove("active");
      }
    };
    document.addEventListener("mouseup", removeActiveClassOnTouchend);

    const animate = (element) => {
      const hueColor = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
      const color = `hsla(${hueColor}, 100%, 50%, 50%)`;
      const textColor = `hsl(${hueColor}, 100%, 50%)`;
      const textShadow = `0 0 0.80em ${color}, 0 0 1.60em ${color}, 0 0 4em ${color}`;
      const boxShadow = `-3px 3px 4px ${color}, 3px -3px 4px ${color}, 3px 3px 4px ${color}, -3px -3px 4px ${color}, 0 0 10px ${color}`;

      const keyIndex = keysArr.indexOf(element);
      const animatedKeysRight = keysArr.slice(keyIndex);
      const animatedKeysLeft = keysArr.slice(0, keyIndex);

      const transitionHandler = (event) => {
        event.target.style.boxShadow = "none";
        event.target.style.color = null;
        event.target.style.textShadow = "none";
        event.target.removeEventListener("transitionend", transitionHandler);
      };

      animatedKeysRight.forEach((keyEl, i) => {
        setTimeout(() => {
          keyEl.addEventListener("transitionend", transitionHandler);
          keyEl.style.boxShadow = boxShadow;
          keyEl.style.color = textColor;
          keyEl.style.textShadow = textShadow;
        }, i * 35);
      });

      animatedKeysLeft.forEach((keyEl, j) => {
        const i = animatedKeysLeft.length - j;
        setTimeout(() => {
          keyEl.addEventListener("transitionend", transitionHandler);
          keyEl.style.boxShadow = boxShadow;
          keyEl.style.color = textColor;
          keyEl.style.textShadow = textShadow;
        }, i * 35);
      });
    };

    document.addEventListener("keydown", (event) => {
      const key = getKey(event);

      if (key) {
        animate(key);
        console.log("key:", key);
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.dataset.key) {
        animate(event.target);
        console.log("event.target:", event.target);
      }
    });

    window.addEventListener("load", () => {
      const key = document.querySelector(`[data-key="enter"]`);
      animate(key);
      console.log("key:", key);
    });

    return () => {
      // cleanup
      document.removeEventListener("keydown", addActiveClassOnKeydown);
      document.removeEventListener("keyup", removeActiveClassOnKeyup);
      document.removeEventListener("mousedown", addActiveClassOnMousedown);
      document.removeEventListener("mouseup", removeActiveClassOnMouseup);
      document.removeEventListener("touchstart", addActiveClassOnTouchstart);
      document.removeEventListener("touchend", removeActiveClassOnTouchend);
    };
  }, []);

  const [message, setMessage] = useState("");
  const [showAboutModal, setshowAboutModal] = useState(false);
  const [showDogModal, setshowDogModal] = useState(false);
  const [showPhoneNoModal, setshowPhoneNoModal] = useState(false);
  const [showSSNModal, setshowSSNModal] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (message) {
      switch (message) {
        case "":
          return alert("please type a command");
        case "ls":
          return alert("'about', 'dog', 'ssn', 'phoneno', 'ls'");
        case "5":
          return alert("'about', 'dog', 'ssn', 'phoneno', 'ls'");
        case "1":
          return setshowAboutModal(true);
        case "about":
          return setshowAboutModal(true);
        case "2":
          return setshowDogModal(true);
        case "dog":
          return setshowDogModal(true);
        case "3":
          return setshowPhoneNoModal(true);
        case "phoneno":
          return setshowPhoneNoModal(true);
        case "4":
          return setshowSSNModal(true);
        case "ssn":
          return setshowSSNModal(true);
        default:
          return null;
      }
    } else {
      alert("this wasn't a command :/");
    }
    setMessage("");
  };

  return (
    <>
      <div className="grid grid-row justify-items-center">
        <div className="mt-[5%] monitorcase leading-8">
          <h1 className="text-3xl">About me</h1>
          <h2>choose an option:</h2>
          <ol className="justify-self-start">
            <li className="justify-self-start">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("1. about - a small personal profile")
                    .pauseFor(2000)
                    .typeString(`<br/> 2. dog - a picture of my dog`)
                    .pauseFor(2000)
                    .typeString(`<br/> 3. ssn - my social security number`)
                    .pauseFor(2000)
                    .typeString(`<br/> 4. phoneno - my phone number ;)`)
                    .pauseFor(2000)
                    .typeString(`<br/> 5. ls - a list of commands`)
                    .start();
                }}
              />
            </li>
          </ol>
          <form>
            <p>Type your command here:</p>
            <input
              className="border-solid border-2 border-black bg-transparent"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button
              onClick={submit}
              className="border-solid border-2 border-black pl-1 pr-1 ml-2"
            >
              Enter
            </button>
          </form>
        </div>

        <div className="keyboardcontainer">
          <div className="case mt-5">
            <div className="key" data-key="escape">
              esc
            </div>
            <div className="key" data-key="1"></div>
            <div className="key" data-key="2"></div>
            <div className="key" data-key="3"></div>
            <div className="key" data-key="4"></div>
            <div className="key" data-key="5"></div>
            <div className="key" data-key="6"></div>
            <div className="key" data-key="7"></div>
            <div className="key" data-key="8"></div>
            <div className="key" data-key="9"></div>
            <div className="key" data-key="0"></div>
            <div className="key" data-key="-"></div>
            <div className="key" data-key="="></div>
            <div className="key xxl" data-key="backspace"></div>
            <div className="key" data-key="help">
              ins
            </div>
            <div className="key" data-key="home"></div>

            <div className="key large" data-key="tab"></div>
            <div className="key" data-key="q"></div>
            <div className="key" data-key="w"></div>
            <div className="key" data-key="e"></div>
            <div className="key" data-key="r"></div>
            <div className="key" data-key="t"></div>
            <div className="key" data-key="y"></div>
            <div className="key" data-key="u"></div>
            <div className="key" data-key="i"></div>
            <div className="key" data-key="o"></div>
            <div className="key" data-key="p"></div>
            <div className="key" data-key="["></div>
            <div className="key" data-key="]"></div>
            <div className="key large" data-key="\"></div>
            <div className="key" data-key="delete">
              del
            </div>
            <div className="key" data-key="end"></div>

            <div className="key xl" data-key="capslock">
              caps
            </div>
            <div className="key" data-key="a"></div>
            <div className="key" data-key="s"></div>
            <div className="key" data-key="d"></div>
            <div className="key" data-key="f"></div>
            <div className="key" data-key="g"></div>
            <div className="key" data-key="h"></div>
            <div className="key" data-key="j"></div>
            <div className="key" data-key="k"></div>
            <div className="key" data-key="l"></div>
            <div className="key" data-key=";"></div>
            <div className="key" data-key="'"></div>
            <div className="key xl" data-key="enter">
              return
            </div>
            <div className="key" data-key="f15">
              pause
            </div>
            <div className="key" data-key="pageup">
              pg up
            </div>

            <div className="key xxl" data-key="shiftleft">
              shift
            </div>
            <div className="key" data-key="z"></div>
            <div className="key" data-key="x"></div>
            <div className="key" data-key="c"></div>
            <div className="key" data-key="v"></div>
            <div className="key" data-key="b"></div>
            <div className="key" data-key="n"></div>
            <div className="key" data-key="m"></div>
            <div className="key" data-key=","></div>
            <div className="key" data-key="."></div>
            <div className="key" data-key="/"></div>
            <div className="key xxl" data-key="shiftright">
              shift
            </div>
            <div className="key" data-key="arrowup">
              ▲
            </div>
            <div className="key" data-key="pagedown">
              pg dn
            </div>

            <div className="key medium" data-key="controlleft">
              ctrl
            </div>
            <div className="key medium" data-key="meta">
              win
            </div>
            <div className="key medium" data-key="altleft">
              alt
            </div>
            <div className="key huge" data-key=" "></div>
            <div className="key medium" data-key="altright">
              alt
            </div>
            <div className="key medium" data-key="fn"></div>
            <div className="key medium" data-key="controlright">
              ctrl
            </div>
            <div className="key" data-key="arrowleft">
              ◀
            </div>
            <div className="key" data-key="arrowdown">
              ▼
            </div>
            <div className="key" data-key="arrowright">
              ▶
            </div>
          </div>
        </div>
      </div>
      {showAboutModal && <About setOpenAboutModal={setshowAboutModal} />}
      {showDogModal && <Dog setOpenDogModal={setshowDogModal} />}
      {showPhoneNoModal && (
        <PhoneNo setOpenPhoneNoModal={setshowPhoneNoModal} />
      )}
      {showSSNModal && <SSN setOpenSSNModal={setshowSSNModal} />}
    </>
  );
}
