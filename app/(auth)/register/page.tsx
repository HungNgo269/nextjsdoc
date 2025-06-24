import { Suspense } from "react";
import { Metadata } from "next";
import RegisterForm from "@/app/ui/auth/register-form";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div>
      <div className="flex h-20 w-full items-end rounded-lg p-3 md:h-36"></div>
      <Suspense>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
