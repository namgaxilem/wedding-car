import BlogBreadcrumbProvider from "@/context/BlogBreadcrumb";
import BlogBreadcrumb from "./_view/BlogBreadcrumb";

export default function Layout({ children }) {
  return (
    <BlogBreadcrumbProvider>
      <BlogBreadcrumb />
      {children}
    </BlogBreadcrumbProvider>
  );
}
