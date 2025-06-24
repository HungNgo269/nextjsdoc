import React from "react";

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative  flex items-center justify-center md:h-screen bg-[url('/auth/background_auth.jpg')] bg-cover bg-center bg-transparent bg-">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        {children}
      </div>
    </div>
  );
}
