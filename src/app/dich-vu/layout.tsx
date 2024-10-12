import ServiceBreadcrumbProvider from "@/context/ServiceBreadcrumb";
import ServiceBreadcrumb from "./_views/ServiceBreadcrumb";

export default function Layout({ children }) {
  return (
    <ServiceBreadcrumbProvider>
      <ServiceBreadcrumb />
      {children}
    </ServiceBreadcrumbProvider>
  );
}
