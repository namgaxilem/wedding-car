"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextProps {
  blogName?: string;
  setBlogName: Dispatch<SetStateAction<string | undefined>>;
}
export const BlogBreadcrumbContext = createContext({} as ContextProps);

export const useBlogBreadcrumb = () => {
  return useContext(BlogBreadcrumbContext);
};

export default function BlogBreadcrumbProvider({ children }) {
  const [blogName, setBlogName] = useState<string>();

  return (
    <BlogBreadcrumbContext.Provider
      value={{
        blogName,
        setBlogName,
      }}
    >
      {children}
    </BlogBreadcrumbContext.Provider>
  );
}
