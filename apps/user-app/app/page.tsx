"use client"
import { useBalance } from "@repo/store/useBalance";
import { balanceAtom } from "../../../packages/store/src/hooks/balance";
import { useSetRecoilState } from "recoil";
import { useSession } from "next-auth/react";

export default function Page() {
  const setBalance = useSetRecoilState(balanceAtom);
  const balance = useBalance();
  let value = balance;
  const session = useSession();

  function change() {
    value++;
    setBalance(value);
  }

  return (
    <div className="bg-blue-200 w-full h-screen font-bold">
      Hello from page.tsx
      the user Balance is {balance}
      <div>
        {JSON.stringify(session.data)}
      </div>
      <div>
        <button onClick={change}
          className="bg-red-300 text-white p-2 rounded-lg">increase</button>
      </div>
    </div>
  )
}
