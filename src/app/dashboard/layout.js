import DashboardLayoutComponent from "@/components/DashboardLayout";
import AuthProvider from "@/components/AuthProvider";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
    </AuthProvider>
  );
}

