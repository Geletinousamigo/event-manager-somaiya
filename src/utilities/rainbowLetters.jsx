import React from "react";

export const makeTitle = () => {
  // const colors = [
  //   "#FF1616",
  //   "#F7B012",
  //   "#FFDE59",
  //   "#7ED957",
  //   "#38B6FF",
  //   "#CB6CE6",
  //   "#8C52FF",
  //   "",
  //   "#FF1616",
  //   "#F7B012",
  //   "#FFDE59",
  //   "#7ED957",
  //   "#38B6FF",
  // ];
  const letters = "Event Manager".split("");
  const rainbowedLetters = letters.map((letter, index) => {
    return (
      <span style={{ color: '#38B6FF', fontFamily: "Inter" }}>
        {letter}
      </span>
    );
  });
  return (
    <span>
      <strong>{rainbowedLetters} </strong>
    </span>
  );
};
