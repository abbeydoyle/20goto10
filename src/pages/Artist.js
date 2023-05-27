import React, { useEffect, useState } from "react";
import About from "../components/ArtistPages/About";
import Dog from "../components/ArtistPages/Dog";
import PhoneNo from "../components/ArtistPages/PhoneNo";
import SSN from "../components/ArtistPages/SSN";
import Commands from "../components/ArtistPages/Commands";
import Typewriter from "typewriter-effect";
import Stack from "@mui/material/Stack";

const handleEvent = (element, type, handler) => {
  element.addEventListener(type, handler);
  return () => element.removeEventListener(type, handler);
};

export default function Artist() {
  useEffect(() => {
    const keysArr = [...document.querySelectorAll(".key")];

    const getKey = (event) => {
      const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
      const parsedCode = event.code.toLowerCase();
      const element =
        document.querySelector(`[data-key="${parsedCode}"]`) ||
        document.querySelector(`[data-key="${parsedKey}"]`);

      return element;
    };

    const toggleActiveClass = (event, action) => {
      const key = getKey(event);
      if (key) {
        key.classList[action]("active");
      }
    };

    const cleanup = [
      handleEvent(document, "keydown", (e) => toggleActiveClass(e, "add")),
      handleEvent(document, "keyup", (e) => toggleActiveClass(e, "remove")),
      handleEvent(document, "mousedown", (e) => toggleActiveClass(e, "add")),
      handleEvent(document, "mouseup", (e) => toggleActiveClass(e, "remove")),
      handleEvent(document, "touchstart", (e) => toggleActiveClass(e, "add")),
      handleEvent(document, "touchend", (e) => toggleActiveClass(e, "remove")),
    ];

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

    const keydownHandler = (event) => {
      const key = getKey(event);
      if (key) animate(key);
    };

    const clickHandler = (event) => {
      if (event.target.dataset.key) animate(event.target);
    };

    const loadHandler = () => {
      const key = document.querySelector(`[data-key="enter"]`);
      animate(key);
    };

    const keydownCleanup = handleEvent(document, "keydown", keydownHandler);
    const clickCleanup = handleEvent(document, "click", clickHandler);
    const loadCleanup = handleEvent(window, "load", loadHandler);

    return () => {
      cleanup.forEach((func) => func());
      keydownCleanup();
      clickCleanup();
      loadCleanup();
    };
  }, []);


  const [message, setMessage] = useState("");
  const [showAboutModal, setshowAboutModal] = useState(false);
  const [showDogModal, setshowDogModal] = useState(false);
  const [showPhoneNoModal, setshowPhoneNoModal] = useState(false);
  const [showSSNModal, setshowSSNModal] = useState(false);
  const [showCommandsModal, setshowCommandsModal] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (message) {
      var inputmessage = message.toLowerCase();
      switch (inputmessage) {
        case "ls":
        case "5":
          setshowCommandsModal(true);
          setMessage("");
          break
        case "1":
        case "about":
          setshowAboutModal(true);
          setMessage("");
          break
        case "2":
        case "dog":
          setshowDogModal(true);
          setMessage("");
          break
        case "3":
        case "phoneno":
          setshowPhoneNoModal(true);
          setMessage("");
          break
        case "4":
        case "ssn":
          setshowSSNModal(true);
          setMessage("");
          break
        default:
          alert("this wasn't a command :/");
          setMessage("");
      }
    } else {
      alert("this wasn't a command :/");
    }
  };

  return (
    <>
      <div className="grid grid-row justify-items-center">
        <div className="mt-[3%] monitorcase leading-8 relative md:w-[40em] w-full md:h-[21rem] h-[500px]">
          <h1 className="text-3xl md:pb-0 pb-2">About me</h1>
          <h2>choose an option:</h2>
          <ol className="justify-self-start">
            <li className="justify-self-start">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("1. about - a small personal profile")
                    .pauseFor(500)
                    .typeString(`<br/> 2. dog - a picture of my dog`)
                    .pauseFor(500)
                    .typeString(`<br/> 3. ssn - my social security number`)
                    .pauseFor(500)
                    .typeString(`<br/> 4. phoneno - my phone number ;)`)
                    .pauseFor(500)
                    .typeString(`<br/> 5. ls - a list of commands`)
                    .start();
                }}
                options={{
                  delay: 100,
                }}
              />
            </li>
          </ol>
          <form className="absolute bottom-2 left-2 mr-2">
            <p>Type your command here:</p>
            <Stack
                direction="row"
                spacing={1}
              >
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
            </Stack>
          </form>
        </div>

        <div className="keyboardcontainer hidden md:table-cell">
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
      {showCommandsModal && <Commands setOpenCommandsModal={setshowCommandsModal} />}
    </>
  );
}