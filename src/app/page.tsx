"use client";

import React, { useEffect, useState } from "react";
import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />

      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
