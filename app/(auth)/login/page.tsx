import LoginForm from "@/app/ui/auth/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div>
      <div className="flex h-20 w-full items-end rounded-lg p-3 md:h-36"></div>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
