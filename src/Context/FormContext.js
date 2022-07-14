import { useState } from "react";
import { createContext } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [progressId, setProgressId] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    plan: "myself",
  });
  return (
    <FormContext.Provider
      value={{
        progressId,
        setProgressId,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
