import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import {Howl, Howler} from 'howler';

import NobinobiImport from "../assets/audio/Nobinobi.mp3"
import HitomImport from "../assets/audio/Hitomebore.mp3"



export default function Songs() {
  useEffect(() => {
    const keysArr = [...document.querySelectorAll(".mixbutton")];

    const getKey = (event) => {
      const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
      console.log("parsedKey:", parsedKey);
      const parsedCode = event.code.toLowerCase();
      console.log("parsedCode:", parsedCode);
      const element =
        document.querySelector(`[data-key="${parsedCode}"]`) ||
        document.querySelector(`[data-key="${parsedKey}"]`);
      console.log("element:", element);

      if (parsedKey === "n") {
        Howler.stop()
        playNobinobi()
      }
      if (parsedKey === "h") {
        Howler.stop()
        playHitom()
      }

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

    var Nobinobi = new Howl({
      preload:true,
      autoplay: false,
      src: [NobinobiImport]
    });
  
    const playNobinobi = () => {
      Nobinobi.play()
    }
    var Hitom = new Howl({
      preload: true,
      autoplay: false,
      src: [HitomImport]
    });
  
    const playHitom = () => {
      Hitom.play()
    }

    return () => {  // cleanup
      document.removeEventListener("keydown", addActiveClassOnKeydown);
      document.removeEventListener("keyup", removeActiveClassOnKeyup);
      document.removeEventListener("mousedown", addActiveClassOnMousedown);
      document.removeEventListener("mouseup", removeActiveClassOnMouseup);
      document.removeEventListener("touchstart", addActiveClassOnTouchstart);
      document.removeEventListener("touchend", removeActiveClassOnTouchend);
    };

  }, []);

  function valuetext(value) {
    return `${value}%`;
  }


  return (
    <>
      <div className="mixercontainer">
        <div className="mixer mt-[10%] grid grid-flow-col auto-cols-2 gap-2">
          <div className="min-w-[20rem]">
            <h1 className="pb-2 pt-2 text-xl">mixboard v20goto10</h1>
            <Stack
              className="h-[75%] pt-2 pb-2 flex justify-evenly"
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Stack justifyContent="center" alignItems="center">
                <BsFillVolumeUpFill className="h-8 w-8 text-center" />
                <Slider
                  aria-label="volume"
                  orientation="vertical"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  step={10}
                  marks
                  min={0}
                  max={100}
                  valueLabelDisplay="auto"
                  sx={{
                    "& .MuiSlider-track": {
                      width: 20,
                      color: "#2e2640",
                    },
                    "& .MuiSlider-thumb": {
                      width: 60,
                      height: 20,
                      color: "#2e2640",
                    },
                    "& .MuiSlider-rail": {
                      width: 20,
                      color: "#2e2640",
                    },
                    "& .MuiSlider-mark": {
                      color: "#bbadd9",
                    },
                    "& .Mui-focusVisible": {
                      color: "none",
                    },
                    "& .MuiSlider-valueLabel": {
                      color: "#bbadd9",
                      backgroundColor: "#2e2640",
                    },
                    "& .MuiSlider-thumb:hover": {
                      boxShadow: "none  !important",
                      outline: "none  !important",
                    },
                    "& .MuiSlider-thumb:active": {
                      boxShadow: "none  !important",
                      outline: "none  !important",
                    },
                    "& .MuiSlider-thumb:focus": {
                      boxShadow: "none  !important",
                      outline: "none  !important",
                    },
                  }}
                />
                <BsFillVolumeMuteFill className="h-8 w-8 text-center" />
              </Stack>
              <Stack justifyContent="center" alignItems="center">
                <AiFillFastForward className="h-8 w-8 text-center" />
                <Slider
                  aria-label="speed"
                  orientation="vertical"
                  defaultValue={100}
                  getAriaValueText={valuetext}
                  step={10}
                  marks
                  min={50}
                  max={150}
                  valueLabelDisplay="auto"
                  sx={{
                    "& .MuiSlider-track": {
                      width: 20,
                      color: "#2e2640",
                    },
                    "& .MuiSlider-thumb": {
                      width: 60,
                      height: 20,
                      color: "#2e2640",
                    },
                    "& .MuiSlider-rail": {
                      width: 20,
                      color: "#2e2640",
                    },
                    "& .MuiSlider-mark": {
                      color: "#bbadd9",
                    },
                    "& .Mui-focusVisible": {
                      color: "none",
                    },
                    "& .MuiSlider-valueLabel": {
                      color: "#bbadd9",
                      backgroundColor: "#2e2640",
                    },
                    "& .MuiSlider-thumb:hover": {
                      boxShadow: "none  !important",
                      outline: "none  !important",
                    },
                    "& .MuiSlider-thumb:active": {
                      boxShadow: "none  !important",
                      outline: "none  !important",
                    },
                    "& .MuiSlider-thumb:focus": {
                      boxShadow: "none  !important",
                      outline: "none  !important",
                    },
                  }}
                />
                <AiFillFastBackward className="h-8 w-8 text-center" />
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <div className="h-[5em] w-[10em] relative mixbutton" data-key="w">
                stop
                <div className="absolute bottom-1 right-1">w</div>
                </div>
              <div className="h-[5em] w-[10em] relative mixbutton" data-key="e">
                pause
                <div className="absolute bottom-1 right-1">e</div>
                </div>
              <div className="h-[5em] w-[10em] relative mixbutton" data-key="d">
                play
                <div className="absolute bottom-1 right-1">d</div>
                </div>
            </Stack>
          </div>
          <div className="mixbuttoncontainer justify-center">
            <div className="mixbutton relative" data-key="n">
              Nobinobi <br /> 伸び伸び
              <div className="absolute bottom-1 right-1">n</div>
            </div>
            <div className="mixbutton relative" data-key="s">
            Shitsuren <br /> 失恋
              <div className="absolute bottom-1 right-1">s</div>
            </div>
            <div className="mixbutton relative" data-key="k">
            Kikai <br /> 機械
              <div className="absolute bottom-1 right-1">k</div>
            </div>
            <div className="mixbutton relative" data-key="p">
            Keppaku <br /> 潔白
              <div className="absolute bottom-1 right-1">p</div>
            </div>
            <div className="mixbutton relative" data-key="y">
            Yoisho <br /> よいしょ
              <div className="absolute bottom-1 right-1">y</div>
            </div>
            <div className="mixbutton relative" data-key="g">
            Sutageiza <br /> スターゲイザー
              <div className="absolute bottom-1 right-1">g</div>
            </div>
            <div className="mixbutton relative" data-key="a">
            Kaikoshumi <br /> 懐古趣味
              <div className="absolute bottom-1 right-1">a</div>
            </div>
            <div className="mixbutton relative" data-key="u">
            Koukai <br /> 後悔
              <div className="absolute bottom-1 right-1">u</div>
            </div>
            <div className="mixbutton relative" data-key="i">
            Koukai <br /> Instrumental <br />後悔
              <div className="absolute bottom-1 right-1">i</div>
            </div>
            <div className="mixbutton relative" data-key="u">
            Ukiyo <br /> 浮世
              <div className="absolute bottom-1 right-1">u</div>
            </div>
            <div className="mixbutton relative" data-key="h">
            Hitomebore <br /> 目惚れ
              <div className="absolute bottom-1 right-1">h</div>
            </div>
            <div className="mixbutton relative" data-key="r">
            Ryoko <br /> 旅行
              <div className="absolute bottom-1 right-1">r</div>
            </div>
            <div className="mixbutton relative" data-key="o">
            Kyusoku <br /> 休息
              <div className="absolute bottom-1 right-1">o</div>
            </div>
            <div className="mixbutton relative" data-key="z">
            Nozomi <br /> 希
              <div className="absolute bottom-1 right-1">z</div>
            </div>
            <div className="mixbutton relative" data-key="e">
              Unreleased <br /> 未発表
              <div className="absolute bottom-1 right-1">e</div>
            </div>
            <div className="mixbutton relative" data-key="d">
              Unreleased <br /> 未発表
              <div className="absolute bottom-1 right-1">d</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
