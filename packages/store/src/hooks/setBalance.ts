"use client"
import { useSetRecoilState } from "recoil"
import { balanceAtom } from "./balance"

export default function setBalance({ balance }: { balance: number }) {
  const setTheBalance = useSetRecoilState(balanceAtom);
  // console.log("balance is " + balance);
  setTheBalance(balance);
}
