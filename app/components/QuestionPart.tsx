import Link from "next/link";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface iProps {
  text?: string;
  setText?: Dispatch<SetStateAction<string>> | undefined;
  insight?: string;
  answer?: string;
  question?: string;
  id?: number;
  showPath?: number;
}

export const QuestionPart: FC<iProps> = ({
  text,
  setText,
  id,
  insight,
  question,
  answer,
  showPath,
}) => {
  const [value, setValue] = useState<boolean>(false);

  const readValue = (a: string, b: string) => {
    // Remove extra spaces and split by semicolon to get individual properties
    let textValue = a
      .split(";")
      .map((prop) => prop.trim())
      .filter(Boolean)
      .sort();
    let answerValue = b
      .split(";")
      .map((prop) => prop.trim())
      .filter(Boolean)
      .sort();

    // Join the sorted arrays back into strings
    let aSorted = textValue.join("; ");
    let bSorted = answerValue.join("; ");

    // Compare the resulting strings
    return aSorted === bSorted;
  };

  const check = () => {
    if (readValue(text!, answer!)) {
      setValue(true);
    } else {
      setValue(false);
    }
  };

  useEffect(() => {
    check();
  }, [text]);

  console.log("reading ID: ", showPath);

  return (
    <div
      className="order-2 lg:order-1 col-span-1 lg:col-span-4 bg-slate-200 
    py-4 px-8 h-full flex flex-col"
    >
      <section className="flex w-full justify-between">
        <div>
          <p className="font-bold text-[18px]">CSS-Flex Mastery </p>
          <p>user</p>
        </div>
        <p className="bg-orange-50 h-[35px] text-[16px] w-[100px] rounded-sm flex justify-center items-center">
          level {showPath! + 1}
        </p>
      </section>

      {/* Working section */}

      <section className="flex flex-col-reverse lg:flex-col ">
        <main>
          <section>
            <p className="font-light my-10 tracking-widest text-[16px]">
              {question}
            </p>
          </section>

          <section>
            <p className="text-[18px] font-semibold tracking-wide">{insight}</p>
          </section>
        </main>

        <section className="min-h-[200px] p-4 w-full rounded-md my-5 border bg-slate-100 ">
          <p>
            .forest <span>{"{"}</span>
          </p>
          <div className="ml-16 mt-3">
            <p>display: flex;</p>

            <textarea
              className="p-2 outline-none bg-white border rounded-md w-full h-[100px] resize-none my-2 "
              value={text}
              onChange={(e) => {
                setText!(e.target.value);
              }}
            />
          </div>

          <p>{"}"}</p>

          <div className="flex w-full justify-end">
            <Link href={`${showPath! + 2}`}>
              <button
                onClick={() => {
                  console.log("Awesome: ", text);
                }}
                disabled={!value}
                className={`px-6 py-2 border rounded-md text-white font-bold 
                    ${
                      value
                        ? "bg-red-400 text-white"
                        : "bg-red-100 cursor-not-allowed text-gray-400"
                    }
                    
                    
                    `}
              >
                Next
              </button>
            </Link>
          </div>
        </section>
      </section>

      {/* Footer */}

      <div className="flex-1" />

      <div className="flex flex-col w-full justify-center items-center text-[12px]">
        <p className="tracking-wide">
          CSS-Flex Mastery, created by set08 for CodeLab Set10
        </p>
        <div className="text-[10pxr]  font-semibold">
          GitHub • Twitter • LinkedIN
        </div>
      </div>
    </div>
  );
};
