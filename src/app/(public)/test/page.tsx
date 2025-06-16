'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden">
      
    </main>
  );
}
