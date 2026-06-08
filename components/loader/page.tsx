"use client";

import "./preloader.css";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Preloader = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const column1 = document.querySelector(".number-1 .number-track");
      const column2 = document.querySelector(".number-2 .number-track");
      const column3 = document.querySelector(".number-3 .number-track");

      if (!column1 || !column2 || !column3) return;

      const firstStopTensDigit = gsap.utils.random([2, 3, 4]);
      const firstStopOnesDigit = gsap.utils.random([1, 5]);
      const secondStopTensDigit = gsap.utils.random([5, 6]);
      const secondStopOnesDigit = gsap.utils.random([7, 8, 9]);

      const firstBarScale: number =
        Number(firstStopTensDigit + "" + firstStopOnesDigit) / 100;
      const secondBarScale: number =
        Number(secondStopTensDigit + "" + secondStopOnesDigit) / 100;

      console.log("Scales:", firstBarScale, secondBarScale);

      const tl = gsap.timeline();

      console.log(
        firstStopTensDigit,
        firstStopOnesDigit,
        secondStopTensDigit,
        secondStopOnesDigit,
      );

      tl.to(".percentage", {
        y: 0,
        duration: 1,
        ease: "expo.inOut",
      })
        .to(
          column3,
          {
            yPercent: firstStopOnesDigit * -10,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          column2,
          {
            yPercent: firstStopTensDigit * -10,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          ".loading-bar",
          {
            scaleY: firstBarScale,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        );

      tl.to(column3, {
        yPercent: secondStopOnesDigit * -10,
        duration: 1,
        ease: "expo.inOut",
      })
        .to(
          column2,
          {
            yPercent: secondStopTensDigit * -10,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          ".loading-bar",
          {
            scaleY: secondBarScale,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        );

      tl.to([column2, column3], {
        yPercent: -100,
        duration: 1,
        stagger: 0,
        ease: "expo.inOut",
      })
        .to(
          column1,
          {
            y: 0,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          ".loading-bar",
          {
            scaleY: 1,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        );
    },
    { scope },
  );
  return (
    <section className="preloader-container" ref={scope}>
      <div className="loading-bar"></div>
      <div className="counter">
        <div className="number number-1">
          <div className="number-track">
            <span>1</span>
          </div>
        </div>
        <div className="number number-ten-times number-2">
          <div className="number-track">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
          </div>
        </div>
        <div className="number number-ten-times number-3">
          <div className="number-track">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
          </div>
        </div>
        <div className="percentage">%</div>
      </div>
    </section>
  );
};

export default Preloader;
