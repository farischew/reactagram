import { createContext } from "react";
import { cld } from "../lib/cloudinary";

const CloudinaryContext = createContext();

export const CloudinaryContextProvider = (props) => {
  const cloudinary = cld;

  return (
    <CloudinaryContext.Provider
      value={{
        cld: cloudinary,
      }}
    >
      {props.children}
    </CloudinaryContext.Provider>
  );
};

export default CloudinaryContext;
