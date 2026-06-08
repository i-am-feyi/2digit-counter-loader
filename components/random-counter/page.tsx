"use client";

import "./random-counter.css";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { generateProgressStops } from "@/lib/utils";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("hop", "0.9, 0, 0.1, 1");

const RandomCounter = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const column1 = document.querySelector(".number-1 .number-track");
      const column2 = document.querySelector(".number-2 .number-track");
      const column3 = document.querySelector(".number-3 .number-track");

      if (!column1 || !column2 || !column3) return;

      const noOfStops = 4;

      const stops = generateProgressStops(noOfStops, 7, 99);

      const totalRows = noOfStops * 10;

      [column2, column3].forEach((column) => {
        for (let i = 0; i <= totalRows; i++) {
          const span = document.createElement("span");
          span.textContent = String(i % 10);

          if (i === 1) column1.appendChild(span);
          column.appendChild(span);
        }
      });

      console.log(stops);

      const tl = gsap.timeline();

      gsap.to(".percentage", {
        y: 0,
        duration: 1,
        ease: "expo.inOut",
      });

      stops.forEach((stop, i) => {
        tl.to(column2, {
          y: `${-(i * 10 + stop.tens)}em`,
          duration: 1,
          ease: "expo.inOut",
        })
          .to(
            column3,
            {
              y: `${-(i * 10 + stop.ones)}em`,
              duration: 1,
              ease: "expo.inOut",
            },
            "<",
          )
          .to(
            ".loading-bar",
            {
              scaleY: stop.value / 100,
              ease: "expo.inOut",
              duration: 1,
            },
            "<",
          );
      });

      tl.to(column1, {
        y: 0,
        duration: 1.5,
        ease: "expo.inOut",
      })
        .to(
          column2,
          {
            y: `${-(noOfStops * 10)}em`,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          column3,
          {
            y: `${-(noOfStops * 10)}em`,
            duration: 1,
            ease: "expo.inOut",
          },
          "<",
        )
        .to(
          ".loading-bar",
          {
            scaleY: 1,
            ease: "expo.inOut",
            duration: 1,
            onComplete: () => {
              gsap.set(".loading-bar", {
                transformOrigin: "top left",
              });
            },
          },
          "<",
        );

      tl.to(".number, .percentage", {
        yPercent: -100,
        duration: 0.5,
        stagger: 0,
        ease: "hop",
      }).to(
        ".loading-bar",
        {
          scaleY: 0,
          duration: 0.5,
          ease: "hop",
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
          <div className="number-track"></div>
        </div>
        <div className="number number-ten-times number-3">
          <div className="number-track"></div>
        </div>
        <div className="percentage">%</div>
      </div>
    </section>
  );
};

export default RandomCounter;
