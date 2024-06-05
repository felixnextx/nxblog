import NxBlogLogo from "@/ui/nxblog-logo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-10 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-32">
        <NxBlogLogo />
      </div>

      
    </main>
  );
}
