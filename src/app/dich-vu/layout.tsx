import ServiceBreadcrumb from "./_views/ServiceBreadcrumb";

export default function Layout({ children }) {
  return (
    <>
      <ServiceBreadcrumb />
      {children}
    </>
  );
}
