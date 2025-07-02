import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import MainSection from "@/components/MainSection";
import DashboardLayout from "./DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex">
        <Sidebar />
        <section id="content">
          <Navbar />
          <MainSection />
        </section>
      </div>
    </DashboardLayout>
  );
}
