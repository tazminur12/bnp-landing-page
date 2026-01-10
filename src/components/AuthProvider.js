"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const authToken = localStorage.getItem("dashboardAuth");
    
    // If not on login page and not authenticated, redirect to login
    if (pathname !== "/dashboard/login" && authToken !== "authenticated") {
      router.push("/dashboard/login");
    } else if (authToken === "authenticated") {
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-800 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // If on login page, always show it
  if (pathname === "/dashboard/login") {
    return children;
  }

  // If authenticated, show dashboard
  if (isAuthenticated) {
    return children;
  }

  // Otherwise, show nothing (will redirect)
  return null;
}
