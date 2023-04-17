import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";

export default function Songs() {
  // useEffect(() => {
  //   const keysArr = [...document.querySelectorAll(".key")];

  //   const getKey = (event) => {
  //     const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
  //     console.log("parsedKey:", parsedKey);
  //     const parsedCode = event.code.toLowerCase();
  //     console.log("parsedCode:", parsedCode);
  //     const element =
  //       document.querySelector(`[data-key="${parsedCode}"]`) ||
  //       document.querySelector(`[data-key="${parsedKey}"]`);
  //     console.log("element:", element);

  //     return element;
  //   };

  //   // keyboard events
  //   const addActiveClassOnKeydown = (event) => {
  //     const key = getKey(event);
  //     if (key) {
  //       key.classList.add("active");
  //     }
  //   };
  //   document.addEventListener("keydown", addActiveClassOnKeydown);

  //   const removeActiveClassOnKeyup = (event) => {
  //     const key = getKey(event);
  //     if (key) {
  //       key.classList.remove("active");
  //     }
  //   };
  //   document.addEventListener("keyup", removeActiveClassOnKeyup);

  //   // mouseclick events
  //   const addActiveClassOnMousedown = (event) => {
  //     if (event.target.dataset.key) {
  //       event.target.classList.add("active");
  //     }
  //   };
  //   document.addEventListener("mousedown", addActiveClassOnMousedown);

  //   const removeActiveClassOnMouseup = (event) => {
  //     if (event.target.dataset.key) {
  //       event.target.classList.remove("active");
  //     }
  //   };
  //   document.addEventListener("mouseup", removeActiveClassOnMouseup);

  //   // touchstart events
  //   const addActiveClassOnTouchstart = (event) => {
  //     if (event.target.dataset.key) {
  //       event.target.classList.add("active");
  //     }
  //   };
  //   document.addEventListener("mousedown", addActiveClassOnTouchstart);

  //   const removeActiveClassOnTouchend = (event) => {
  //     if (event.target.dataset.key) {
  //       event.target.classList.remove("active");
  //     }
  //   };
  //   document.addEventListener("mouseup", removeActiveClassOnTouchend);

  //   const animate = (element) => {
  //     const hueColor = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
  //     const color = `hsla(${hueColor}, 100%, 50%, 50%)`;
  //     const textColor = `hsl(${hueColor}, 100%, 50%)`;
  //     const textShadow = `0 0 0.80em ${color}, 0 0 1.60em ${color}, 0 0 4em ${color}`;
  //     const boxShadow = `-3px 3px 4px ${color}, 3px -3px 4px ${color}, 3px 3px 4px ${color}, -3px -3px 4px ${color}, 0 0 10px ${color}`;

  //     const keyIndex = keysArr.indexOf(element);
  //     const animatedKeysRight = keysArr.slice(keyIndex);
  //     const animatedKeysLeft = keysArr.slice(0, keyIndex);

  //     const transitionHandler = (event) => {
  //       event.target.style.boxShadow = "none";
  //       event.target.style.color = null;
  //       event.target.style.textShadow = "none";
  //       event.target.removeEventListener("transitionend", transitionHandler);
  //     };

  //     animatedKeysRight.forEach((keyEl, i) => {
  //       setTimeout(() => {
  //         keyEl.addEventListener("transitionend", transitionHandler);
  //         keyEl.style.boxShadow = boxShadow;
  //         keyEl.style.color = textColor;
  //         keyEl.style.textShadow = textShadow;
  //       }, i * 35);
  //     });

  //     animatedKeysLeft.forEach((keyEl, j) => {
  //       const i = animatedKeysLeft.length - j;
  //       setTimeout(() => {
  //         keyEl.addEventListener("transitionend", transitionHandler);
  //         keyEl.style.boxShadow = boxShadow;
  //         keyEl.style.color = textColor;
  //         keyEl.style.textShadow = textShadow;
  //       }, i * 35);
  //     });
  //   };

  //   document.addEventListener("keydown", (event) => {
  //     const key = getKey(event);

  //     if (key) {
  //       animate(key);
  //       console.log("key:", key);
  //     }
  //   });

  //   document.addEventListener("click", (event) => {
  //     if (event.target.dataset.key) {
  //       animate(event.target);
  //       console.log("event.target:", event.target);
  //     }
  //   });

  //   window.addEventListener("load", () => {
  //     const key = document.querySelector(`[data-key="enter"]`);
  //     animate(key);
  //     console.log("key:", key);
  //   });

  //   return () => {  // cleanup
  //     document.removeEventListener("keydown", addActiveClassOnKeydown);
  //     document.removeEventListener("keyup", removeActiveClassOnKeyup);
  //     document.removeEventListener("mousedown", addActiveClassOnMousedown);
  //     document.removeEventListener("mouseup", removeActiveClassOnMouseup);
  //     document.removeEventListener("touchstart", addActiveClassOnTouchstart);
  //     document.removeEventListener("touchend", removeActiveClassOnTouchend);
  //   };

  // }, []);

  function valuetext(value) {
    return `${value}%`;
  }

  return (
    <>
      <div className="mixercontainer">
        <div className="mixer mt-[10%] grid grid-flow-col auto-cols-2 gap-2">
          <div className="min-w-[20rem]">
            <h1 className="pb-2 pt-2 text-xl">mixboard v20goto10</h1>
            <Stack className="h-[75%] pt-2 pb-2 flex justify-evenly"  direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
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
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                  <div className="secondarymixbutton">button 1</div>
                  <div className="secondarymixbutton">button 2</div>
                  <div className="secondarymixbutton">button 3</div>
            </Stack>
          </div>
          <div className="mixbuttoncontainer justify-center">
            <div className="mixbutton" data-key="1">
              song 1
            </div>
            <div className="mixbutton" data-key="2">
              song 2
            </div>
            <div className="mixbutton" data-key="3">
              song 3
            </div>
            <div className="mixbutton" data-key="4">
              song 4
            </div>
            <div className="mixbutton" data-key="5">
              song 5
            </div>
            <div className="mixbutton" data-key="6">
              song 6
            </div>
            <div className="mixbutton" data-key="7">
              song 7
            </div>
            <div className="mixbutton" data-key="8">
              song 8
            </div>
            <div className="mixbutton" ata-key="9">
              song 9
            </div>
            <div className="mixbutton" data-key="10">
              song 10
            </div>
            <div className="mixbutton" data-key="11">
              song 11
            </div>
            <div className="mixbutton" data-key="12">
              song 12
            </div>
            <div className="mixbutton" data-key="13">
              song 13
            </div>
            <div className="mixbutton" data-key="14">
              song 14
            </div>
            <div className="mixbutton" data-key="15">
              song 15
            </div>
            <div className="mixbutton" data-key="16">
              song 16
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
