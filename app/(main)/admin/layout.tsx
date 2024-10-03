import "../../globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
          <div className="hidden md:block h-[100vh] w-[250px]">
            <Sidebar />
          </div>
          <div className="p-5 flex flex-col w-full   md:max-w-[1140px] ">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
