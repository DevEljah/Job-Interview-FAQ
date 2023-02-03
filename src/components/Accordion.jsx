import React from "react";
import questions from "./data";

export default function Accordion() {
  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li>
            {question.title} <br /> {question.info}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}
