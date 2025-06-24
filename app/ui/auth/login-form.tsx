"use client";

import { interBold, interLight } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useActionState } from "react";
import { authenticateLogin, AuthState } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const initialState: AuthState = { message: null };
  const [state, formAction, isPending] = useActionState(
    authenticateLogin,
    initialState
  );
  console.log(state);
  return (
    <form action={formAction} className="space-y-3 text-white">
      <div className="flex-1 rounded-lg bg-gradient-to-r bg-slate-900 p-6">
        <h1 className={`${interBold.className} mb-3 text-xl text-center`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>

            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-900"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                aria-describedby="email-error"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.message && (
                <p className="mt-2 text-sm text-red-500">{state.message}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium "
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500  text-gray-900"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                aria-describedby="password-error"
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="password-error" aria-live="polite" aria-atomic="true">
              {state.message && (
                <p className="mt-2 text-sm text-red-500">{state.message}</p>
              )}
            </div>
            <div
              className={`${interLight.className} mb-3 mt-1  text-xs text-blue-400 `}
            >
              Forgot your password?
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in
        </Button>
        <div className="flex flex-row">
          <div className={`${interLight.className} mt-1 text-xs`}>
            Need an account?
          </div>
          <div className="w-1" />{" "}
          <Link
            href="/register"
            className={`${interLight.className} mt-1 text-xs text-blue-400`}
          >
            Register
          </Link>
        </div>
        {/* form error */}
        <div className="flex h-8 items-end space-x-1"></div>
      </div>
    </form>
  );
}
