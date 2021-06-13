import React from "react";
import { nanoid } from "nanoid";
import Part from "./Part";
const Content = ({ parts }) => {
  return parts.map((part) => (
    <Part part={part.name} excercises={part.excercises} key={nanoid()} />
  ));
};

export default Content;
