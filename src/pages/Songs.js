import React from "react";

export default function Songs() {


  const keysArr = [...document.querySelectorAll(".key")];

  const getKey = (event) => {
    const parsedKey = event.key.toLowerCase().replace("\\", "\\\\");
    console.log("parsedKey:", parsedKey)
    const parsedCode = event.code.toLowerCase();
    console.log("parsedCode:", parsedCode)
    const element =
      document.querySelector(`[data-key="${parsedCode}"]`) ||
      document.querySelector(`[data-key="${parsedKey}"]`);
      console.log("element:", element)

    return element;

  };
  
  document.addEventListener("keydown", (event) => {
    const key = getKey(event);
    
    if (key) {
      console.log("key:", key)
      key.classList.add("active");
    }
  });
  
  document.addEventListener("keyup", (event) => {
    const key = getKey(event);
    if (key) {
      console.log("key:", key)
      key.classList.remove("active");
    }
  });
  
  document.addEventListener("mousedown", (event) => {
    if (event.target.dataset.key) {
      console.log("event.target.dataset.key:", event.target.dataset.key)
      event.target.classList.add("active");
    }
  });
  
  document.addEventListener("mouseup", (event) => {
    if (event.target.dataset.key) {
      console.log("event.target.dataset.key:", event.target.dataset.key)
      event.target.classList.remove("active");
    }
  });
  
  document.addEventListener("touchstart", (event) => {
    if (event.target.dataset.key) {
      console.log("event.target.dataset.key:", event.target.dataset.key)
      event.target.classList.add("active");
    }
  });
  
  document.addEventListener("touchend", (event) => {
    if (event.target.dataset.key) {
      console.log("event.target.dataset.key:", event.target.dataset.key)
      event.target.classList.remove("active");
    }
  });
  
  
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
      console.log("key:", key)
    }
  });
  
  document.addEventListener("click", (event) => {
    if (event.target.dataset.key) {
      animate(event.target);
      console.log("event.target:", event.target)
    }
  });
  
  window.addEventListener("load", () => {
    const key = document.querySelector(`[data-key="enter"]`);
    animate(key);
    console.log("key:", key)
  });


  
  
  return (
    <>
      <div className="keyboardcontainer">
        <div className="case mt-[10%]">
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
    </>
  );
}
