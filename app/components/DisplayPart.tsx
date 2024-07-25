import { Dispatch, FC, SetStateAction, useState } from "react";

interface iProps {
  value: boolean;
}

export const DisplayPart: FC<iProps> = ({ value }) => {
  return (
    <div className={`flex w-full justify-between relative mt-10`}>
      <div
        className={`animate-bounce absolute z-10 border border-black
          ${value ? "top-5 right-5  " : "top-0 left-0 "}
          rounded-md h-[100px] w-[100px] flex justify-center items-center bg-red-200 `}
      >
        1
      </div>

      <div className="absolute top-0 right-0  border rounded-md h-[100px] w-[100px] flex justify-center items-center bg-red-100 ">
        2
      </div>
    </div>
  );
};
