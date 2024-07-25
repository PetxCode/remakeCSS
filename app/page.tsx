"use client";

import React, { useState } from "react";
import { QuestionPart } from "./components/QuestionPart";
import { DisplayPart } from "./components/DisplayPart";
import { usePathname } from "next/navigation";
import data from "./data/data.json";
const page = () => {
  const value = false;

  const [text, setText] = useState<string>("");

  const path = usePathname();
  const val = path.replace("/", "");

  let showPath = 0;

  if (val === "") {
    showPath = 0;
  } else {
    showPath = parseInt(val);
  }

  console.log(showPath);

  return (
    <div className="min-h-[calc(100vh-20px)] ">
      <div className="grid w-full grid-cols-1 lg:grid-cols-7 gap-4 h-[calc(100vh-20px)]">
        <QuestionPart
          answer={data[showPath!]?.answer}
          question={data[showPath!]?.question}
          insight={data[showPath!]?.insight}
          setText={setText}
          text={text}
        />

        <div className="h-[500px] order-1 lg:order-2 col-span-1 lg:col-span-3 p-4">
          <DisplayPart value={value} />
        </div>
      </div>
    </div>
  );
};

export default page;
