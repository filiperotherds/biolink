'use client'

import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <main className="min-h-screen flex flex-col items-center relative overflow-hidden bg-[url('/ocean-background.jpg')] bg-cover bg-center bg-no-repeat">
      
    </main>
  );
}
