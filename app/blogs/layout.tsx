import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { blogNav, navItems } from "@/data";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Aryan Blogs",
  description: "I write blogs and i mentioned all of them here in this website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative bg-black-100 flex   justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        
      <div className="max-w-7xl w-full">
      {/* <FloatingNav navItems={blogNav}/> */}

    
            {children}
            <Footer />

      </div>
    </main>
       
  );
}
