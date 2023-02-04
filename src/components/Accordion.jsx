import React, { useState } from "react";
import data from "./data";

import RenderData from "./RenderData";

export default function Accordion() {
  return (
    <main>
      <div className="container">
        <h3>Job - Interview FAQ</h3>
        <section>
          {data.map((question) => {
            return <RenderData key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
