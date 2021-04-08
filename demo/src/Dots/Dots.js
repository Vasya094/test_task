/** @jsx jsx */
import React, { memo } from "react";
import { css, jsx } from "@emotion/react";

const Dot = ({ active }) => {
  return (
    <span
      css={css`
        padding: 7px;
        margin-right: 5px;
        margin: 4px auto;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? "#FF8A1F" : "white"};
      `}
    />
  );
};

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        bottom: 50%;
        right: -47%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  );
};

export default Dots;
