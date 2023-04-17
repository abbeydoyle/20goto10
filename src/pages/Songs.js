import React, { useEffect } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import {Howl, Howler} from 'howler';

import NobinobiImport from "../assets/audio/Nobinobi.mp3"
import HitomImport from "../assets/audio/Hitomebore.mp3"
import ShitsurImport from "../assets/audio/Shitsuren.mp3"
import KikaiImport from "../assets/audio/Kikai.mp3"
import YoishioImport from "../assets/audio/Yoisho.mp3"
import SutImport from "../assets/audio/Sutageiza.mp3"
import KaikoImport from "../assets/audio/Kaikoshumi.mp3"
import KoukaiInstImport from "../assets/audio/KoukaiInstrumental.mp3"
import UkiyoImport from "../assets/audio/Ukiyo.mp3"
import KyuImport from "../assets/audio/Kyusoku.mp3"
import NozImport from "../assets/audio/Nozomi.mp3"
import KepImport from "../assets/audio/Keppaku.mp3"
import KoukImport from "../assets/audio/Koukai.mp3"
import RyokoImport from "../assets/audio/Ryoko.mp3"


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
      if (parsedKey === "s") {
        Howler.stop()
        playShitsur()
      }
      if (parsedKey === "k") {
        Howler.stop()
        playKikai()
      }
      if (parsedKey === "y") {
        Howler.stop()
        playYoishio()
      }
      if (parsedKey === "g") {
        Howler.stop()
        playSut()
      }
      if (parsedKey === "a") {
        Howler.stop()
        playKaiko()
      }
      if (parsedKey === "t") {
        Howler.stop()
        playKoukaiInst()
      }
      if (parsedKey === "u") {
        Howler.stop()
        playUkiyo()
      }
      if (parsedKey === "h") {
        Howler.stop()
        playHitom()
      }
      if (parsedKey === "o") {
        Howler.stop()
        playKyu()
      }
      if (parsedKey === "z") {
        Howler.stop()
        playNoz()
      }
      if (parsedKey === "p") {
        Howler.stop()
        playKep()
      }
      if (parsedKey === "i") {
        Howler.stop()
        playKouk()
      }
      if (parsedKey === "r") {
        Howler.stop()
        playRyoko()
      }
      if (parsedKey === "w") {
        Howler.stop()
      }
      if (parsedKey === "v") {
        Howler.stop()
      }
      if (parsedKey === "x") {
        Howler.stop()
        playKouk()
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
        console.log(event.target.dataset.key)
        event.target.classList.add("active");
        if (event.target.dataset.key === "n") {
          Howler.stop()
          playNobinobi()
        }
        if (event.target.dataset.key === "s") {
          Howler.stop()
          playShitsur()
        }
        if (event.target.dataset.key === "k") {
          Howler.stop()
          playKikai()
        }
        if (event.target.dataset.key === "y") {
          Howler.stop()
          playYoishio()
        }
        if (event.target.dataset.key === "g") {
          Howler.stop()
          playSut()
        }
        if (event.target.dataset.key === "a") {
          Howler.stop()
          playKaiko()
        }
        if (event.target.dataset.key === "t") {
          Howler.stop()
          playKoukaiInst()
        }
        if (event.target.dataset.key === "u") {
          Howler.stop()
          playUkiyo()
        }
        if (event.target.dataset.key === "h") {
          Howler.stop()
          playHitom()
        }
        if (event.target.dataset.key === "o") {
          Howler.stop()
          playKyu()
        }
        if (event.target.dataset.key === "z") {
          Howler.stop()
          playNoz()
        }
        if (event.target.dataset.key === "p") {
          Howler.stop()
          playKep()
        }
        if (event.target.dataset.key === "i") {
          Howler.stop()
          playKouk()
        }
        if (event.target.dataset.key === "r") {
          Howler.stop()
          playRyoko()
        }
        if (event.target.dataset.key === "w") {
          Howler.stop()
        }
        if (event.target.dataset.key === "v") {
          Howler.stop()
        }
        if (event.target.dataset.key === "x") {
          Howler.stop()
          playKouk()
        }
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

    var Shitsur = new Howl({
      preload:true,
      autoplay: false,
      src: [ShitsurImport]
    });
  
    const playShitsur = () => {
      Shitsur.play()
    }
    var Kikai = new Howl({
      preload: true,
      autoplay: false,
      src: [KikaiImport]
    });
  
    const playKikai = () => {
      Kikai.play()
    }

    var Yoishio = new Howl({
      preload:true,
      autoplay: false,
      src: [YoishioImport]
    });
  
    const playYoishio = () => {
      Yoishio.play()
    }
    var Sut = new Howl({
      preload: true,
      autoplay: false,
      src: [SutImport]
    });
  
    const playSut = () => {
      Sut.play()
    }

    var Kaiko = new Howl({
      preload:true,
      autoplay: false,
      src: [KaikoImport]
    });
  
    const playKaiko = () => {
      Kaiko.play()
    }
    var KoukaiInst = new Howl({
      preload: true,
      autoplay: false,
      src: [KoukaiInstImport]
    });
  
    const playKoukaiInst = () => {
      KoukaiInst.play()
    }

    var Ukiyo = new Howl({
      preload:true,
      autoplay: false,
      src: [UkiyoImport]
    });
  
    const playUkiyo = () => {
      Ukiyo.play()
    }
    var Kyu = new Howl({
      preload: true,
      autoplay: false,
      src: [KyuImport]
    });
  
    const playKyu = () => {
      Kyu.play()
    }

    var Noz = new Howl({
      preload:true,
      autoplay: false,
      src: [NozImport]
    });
  
    const playNoz = () => {
      Noz.play()
    }

    var Kep = new Howl({
      preload: true,
      autoplay: false,
      src: [KepImport]
    });
  
    const playKep = () => {
      Kep.play()
    }

    var Kouk = new Howl({
      preload:true,
      autoplay: false,
      src: [KoukImport]
    });
  
    const playKouk = () => {
      Kouk.play()
    }
    var Ryoko = new Howl({
      preload: true,
      autoplay: false,
      src: [RyokoImport]
    });
  
    const playRyoko = () => {
      Ryoko.play()
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
    <h1 className="text-[#2e2640] z-50 text-3xl mt-5"></h1>
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
              <div className="h-[5em] w-[10em] relative mixbutton" data-key="v">
                pause
                <div className="absolute bottom-1 right-1">v</div>
                </div>
              <div className="h-[5em] w-[10em] relative mixbutton" data-key="x">
                play
                <div className="absolute bottom-1 right-1">x</div>
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
            <div className="mixbutton relative" data-key="i">
            Koukai <br /> 後悔
              <div className="absolute bottom-1 right-1">i</div>
            </div>
            <div className="mixbutton relative" data-key="t">
            Koukai <br /> Instrumental <br />後悔
              <div className="absolute bottom-1 right-1">t</div>
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
