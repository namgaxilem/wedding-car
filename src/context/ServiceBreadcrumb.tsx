"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextProps {
  carName?: string;
  setCarName: Dispatch<SetStateAction<string | undefined>>;
}
export const ServiceBreadcrumbContext = createContext({} as ContextProps);

export const useServiceBreadcrumb = () => {
  return useContext(ServiceBreadcrumbContext);
};

export default function ServiceBreadcrumbProvider({ children }) {
  const [carName, setCarName] = useState<string>();

  return (
    <ServiceBreadcrumbContext.Provider
      value={{
        carName,
        setCarName,
      }}
    >
      {children}
    </ServiceBreadcrumbContext.Provider>
  );
}
