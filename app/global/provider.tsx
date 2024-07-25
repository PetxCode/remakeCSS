"use client";
import React, { createContext, FC, ReactNode } from "react";

interface iContext {
  children: ReactNode;
}

interface iContextData {
  entry: string;
  setEntry: React.Dispatch<React.SetStateAction<string>>;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext({} as iContextData);

const Provider: FC<iContext> = ({ children }) => {
  const [entry, setEntry] = React.useState<string>("");
  const [user, setUser] = React.useState<string>("");
  return (
    <Context.Provider value={{ entry, user, setEntry, setUser }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
