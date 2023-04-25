import React, { useEffect, useState, useCallback } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { Howl, Howler } from "howler";
import * as audioImports from "../assets/audio/audio.js";

const audioFiles = {
  n: audioImports.NobinobiImport,
  s: audioImports.ShitsurImport,
  k: audioImports.KikaiImport,
  y: audioImports.YoishioImport,
  g: audioImports.SutImport,
  a: audioImports.KaikoImport,
  l: audioImports.KoukaiInstImport,
  u: audioImports.UkiyoImport,
  h: audioImports.HitomImport,
  o: audioImports.KyuImport,
  z: audioImports.NozImport,
  p: audioImports.KepImport,
  i: audioImports.KoukImport,
  r: audioImports.RyokoImport,
  t: audioImports.TaimaImport,
};
const howlInstances = {};
let currentlyPlaying = null;

Object.keys(audioFiles).forEach((key) => {
  howlInstances[key] = new Howl({
    preload: true,
    autoplay: false,
    html5: true,
    src: [audioFiles[key]],
  });
});

const playAudio = (key) => {
  if (currentlyPlaying) {
    currentlyPlaying.pause();
  }

  howlInstances[key].play();
  currentlyPlaying = howlInstances[key];
};

export default function Songs() {
  useEffect(() => {
    const keysArr = [...document.querySelectorAll(".mixbutton")];
    const handleKeyPress = (key, eventType) => {
      const keyElement = document.querySelector(`[data-key="${key}"]`);
    
      if (!keyElement) return;
    
      keyElement.classList.toggle("active", eventType === "keydown" || eventType === "mousedown");
    
      if (eventType === "keydown" || eventType === "mousedown") {
        if (key in audioFiles) {
          playAudio(key);
        }
        if (key === "w") {
          Howler.stop();
        }
        if (key === "v") {
          if (currentlyPlaying && currentlyPlaying.playing()) {
            currentlyPlaying.pause();
          } else if (currentlyPlaying) {
            currentlyPlaying.play();
          }
        }
        if (key === "x") {
          if (currentlyPlaying && !currentlyPlaying.playing()) {
            setTimeout(() => {
              currentlyPlaying.play();
            }, 500);
          }
        }
        animate(keyElement);
      }
    };
    
    const handleKeyEvents = (event) => {
      const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
      handleKeyPress(parsedKey, event.type);
    };
    
    const handleClickEvents = (event) => {
      const key = event.target.dataset.key;
      if (key) {
        handleKeyPress(key, event.type);
      }
    };

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

      document.addEventListener("keydown", handleKeyEvents);
      document.addEventListener("keyup", handleKeyEvents);
      document.addEventListener("mousedown", handleClickEvents);
      document.addEventListener("mouseup", handleClickEvents);
  
      return () => {
        document.removeEventListener("keydown", handleKeyEvents);
        document.removeEventListener("keyup", handleKeyEvents);
        document.removeEventListener("mousedown", handleClickEvents);
        document.removeEventListener("mouseup", handleClickEvents);
      };
  }, []);

  const [hasAlertBeenShown, setHasAlertBeenShown] = useState(false);
  const showAlertAndRemoveListener = useCallback(
    (event) => {
      // If the alert has already been shown, return early
      if (hasAlertBeenShown) {
        return;
      }
      // Stop the Howler
      Howler.stop();
      // Display the alert
      alert(
        "🔊 Clicking the soundboard or using the corresponding keys will play music and display mild lights. Please prepare the appropriate accommodations if necessary 🔊"
      );

      // Set the flag to true
      setHasAlertBeenShown(true);

      // Remove the event listener
      document.removeEventListener("click", showAlertAndRemoveListener);
    },
    [hasAlertBeenShown, setHasAlertBeenShown]
  );

  useEffect(() => {
    // Add the event listener
    document.addEventListener("click", showAlertAndRemoveListener, {
      capture: true,
      once: true,
    });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", showAlertAndRemoveListener);
    };
  }, [showAlertAndRemoveListener]);

  const [value, setValue] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    Howler.volume(value * 0.01);
  };
  function valuetext(value) {
    return `${value}%`;
  }
  const [playbackRate, setPlaybackRate] = useState(1);
  const handlePlaybackRateChange = (event, newRate) => {
    setPlaybackRate(newRate);
    if (currentlyPlaying) {
      currentlyPlaying.rate(newRate);
    }
  };

  function playbackRateText(value) {
    return `${value}x`;
  }

  return (
    <>
      <pre className="text-[#2e2640] z-50 md:text-3xl text-xl md:pt-5 md:mt-[4%] ml-[-7%] text-center">
        <h2>{`/* My Music */`}</h2>
      </pre>
      <div className="md:grid md:grid-cols-3 md:ml-[-5%] mixer-parent">
        <div className="mixercontainer w-70% md:col-span-2">
          <div className="mixer md:mt-[5%] mt-[-20%] grid grid-flow-col auto-cols-2 gap-2">
            <div className="min-w-[20rem]">
              <h1 className="pb-2 pt-2 tracking-widest text-xl">
                mixboard v20goto10
              </h1>
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
                    onChange={handleChange}
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
                    orientation="vertical"                
                    marks
                    value={playbackRate}
                    min={0.5}
                    max={2}
                    step={0.1}
                    onChange={handlePlaybackRateChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="playback-rate-slider"
                    getAriaValueText={playbackRateText}
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
                <div
                  className="h-[5em] w-[10em] relative mixbutton extra"
                  data-key="w"
                >
                  stop
                  <div className="absolute bottom-1 right-1">w</div>
                </div>
                <div
                  className="h-[5em] w-[10em] relative mixbutton extra"
                  data-key="v"
                >
                  pause
                  <div className="absolute bottom-1 right-1">v</div>
                </div>
                <div
                  className="h-[5em] w-[10em] relative mixbutton extra"
                  data-key="x"
                >
                  play
                  <div className="absolute bottom-1 right-1">x</div>
                </div>
              </Stack>
            </div>
            <div className="mixbuttoncontainer justify-center">
              <div className="mixbutton relative blue rounded-lg" data-key="n">
                Nobinobi <br /> 伸び伸び
                <div className="absolute bottom-1 right-1">n</div>
              </div>
              <div className="mixbutton relative green rounded-lg" data-key="s">
                Shitsuren <br /> 失恋
                <div className="absolute bottom-1 right-1">s</div>
              </div>
              <div
                className="mixbutton relative yellow rounded-lg"
                data-key="k"
              >
                Kikai <br /> 機械
                <div className="absolute bottom-1 right-1">k</div>
              </div>
              <div className="mixbutton relative pink rounded-lg" data-key="p">
                Keppaku <br /> 潔白
                <div className="absolute bottom-1 right-1">p</div>
              </div>
              <div
                className="mixbutton relative yellow rounded-lg"
                data-key="y"
              >
                Yoisho <br /> よいしょ
                <div className="absolute bottom-1 right-1">y</div>
              </div>
              <div className="mixbutton relative pink rounded-lg" data-key="g">
                Sutageiza <br /> スターゲイザー
                <div className="absolute bottom-1 right-1">g</div>
              </div>
              <div className="mixbutton relative blue rounded-lg" data-key="a">
                Kaikoshumi <br /> 懐古趣味
                <div className="absolute bottom-1 right-1">a</div>
              </div>
              <div className="mixbutton relative green rounded-lg" data-key="i">
                Koukai <br /> 後悔
                <div className="absolute bottom-1 right-1">i</div>
              </div>
              <div className="mixbutton relative green rounded-lg" data-key="l">
                Koukai <br /> Instrumental <br />
                後悔
                <div className="absolute bottom-1 right-1">l</div>
              </div>
              <div
                className="mixbutton relative yellow rounded-lg"
                data-key="u"
              >
                Ukiyo <br /> 浮世
                <div className="absolute bottom-1 right-1">u</div>
              </div>
              <div className="mixbutton relative pink rounded-lg" data-key="h">
                Hitomebore <br /> 目惚れ
                <div className="absolute bottom-1 right-1">h</div>
              </div>
              <div className="mixbutton relative blue rounded-lg" data-key="r">
                Ryoko <br /> 旅行
                <div className="absolute bottom-1 right-1">r</div>
              </div>
              <div className="mixbutton relative pink rounded-lg" data-key="o">
                Kyusoku <br /> 休息
                <div className="absolute bottom-1 right-1">o</div>
              </div>
              <div className="mixbutton relative blue rounded-lg" data-key="z">
                Nozomi <br /> 希
                <div className="absolute bottom-1 right-1">z</div>
              </div>
              <div className="mixbutton relative green rounded-lg" data-key="t">
                Taima <br /> 大麻
                <div className="absolute bottom-1 right-1">t</div>
              </div>
              <div
                className="mixbutton relative yellow rounded-lg"
                data-key="d"
              >
                Unreleased <br /> 未発表
                <div className="absolute bottom-1 right-1">d</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid content-center leading-7 mt-[12%] hidden md:block">
          <h2 className="text-xl">10PRINTTUNES</h2>
          <Divider flexItem className="mb-2 w-[80%]" />
          <ol>
            <li>1. Nozomi 希 | Hope</li>
            <li>2. Kyusoku 休息 | Rest</li>
            <li>3. Ryoko 旅行 | Travel</li>
            <li>4. Hitomebore 目惚れ | Instant Admiration</li>
            <li>5. Ukiyo 浮世 | Living in the Moment</li>
            <li>6. Koukai 後悔 | Regret</li>
            <li>7. Koukai Instrumental 後悔 | Regret</li>
            <li>8. Kaikoshumi 懐古趣味 | Nostalgia</li>
            <li>9. Yoisho よいしょ | An interjection of strain</li>
            <li>10. Sutageiza スターゲイザー | Stargazer</li>
            <li>11. Keppaku 潔白 | Innocence</li>
            <li>12. Kikai 機械 | Machine</li>
            <li>13. Shitsuren 失恋 | Heartbreak</li>
            <li>14. Nobinobi 伸び伸び | Carefree</li>
            <li>15. Taima 大麻 | Cannabis</li>
          </ol>
        </div>
      </div>
      <div className="md:hidden block text-xs mt-[-20%] overflow-y-auto">
        <h2 className="text-base">10PRINTTUNES</h2>
        <Divider flexItem className="mb-2 w-[80%]" />
        <ol className="leading-5">
          <li>1. Nozomi 希 | Hope</li>
          <li>2. Kyusoku 休息 | Rest</li>
          <li>3. Ryoko 旅行 | Travel</li>
          <li>4. Hitomebore 目惚れ | Instant Admiration</li>
          <li>5. Ukiyo 浮世 | Living in the Moment</li>
          <li>6. Koukai 後悔 | Regret</li>
          <li>7. Koukai Instrumental 後悔 | Regret</li>
          <li>8. Kaikoshumi 懐古趣味 | Nostalgia</li>
          <li>9. Yoisho よいしょ | An interjection of strain</li>
          <li>10. Sutageiza スターゲイザー | Stargazer</li>
          <li>11. Keppaku 潔白 | Innocence</li>
          <li>12. Kikai 機械 | Machine</li>
          <li>13. Shitsuren 失恋 | Heartbreak</li>
          <li>14. Nobinobi 伸び伸び | Carefree</li>
          <li>15. Taima 大麻 | Cannabis</li>
        </ol>
      </div>
    </>
  );
}
