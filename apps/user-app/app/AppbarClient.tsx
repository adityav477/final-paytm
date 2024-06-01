"use client"
import Appbar from "@repo/ui/Appbar"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  return (
    <div>
      {/* @ts-ignore */}
      <Appbar user={session.data?.user} onSignIn={signIn}
        onSignOut={() => {
          signOut();
          router.push("/api/auth/signin");
        }} ></Appbar>
    </div>
  )
}
