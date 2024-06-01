"use client"
import Select from "@repo/ui/Select";
import TextInput from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import Card from "@repo/ui/card";
import { useState } from "react";
import addOnRampTransaction from "../lib/actions/addOnRampTransaction";

const BANK_AT_DISPOSAL = [{
  name: "Kotak Bank",
  redirecturl: "https://netbanking.kotak.com/"
}, {
  name: "HDFC Bank",
  redirecturl: "https://netbanking.hdfcbank.com/"
}]
export default function AddMoney() {
  const [redirecturl, setRedirectUrl] = useState(BANK_AT_DISPOSAL[0]?.redirecturl);
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState(BANK_AT_DISPOSAL[0]?.name);

  return (
    <Card title="Add Money" >
      <TextInput label="Amount" placeholder="Enter Amount" onChange={(value: string) => {
        setAmount(Number(value));
      }}>
      </TextInput>

      <div className="flex flex-col justify-center gap-2 mt-2">
        <div className="font-semibold ">
          Select Bank
        </div>

        <Select onSelect={(value) => {
          // console.log(value);
          setProvider(BANK_AT_DISPOSAL.find(bank => bank.name === value)?.name || "NoBank");
          setRedirectUrl(BANK_AT_DISPOSAL.find(bank => bank.name === value)?.redirecturl);
        }}
          options={BANK_AT_DISPOSAL.map(bank => {
            return {
              key: bank.name,
              value: bank.name
            }
          })}
        >
        </Select>

        <div className="text-center">
          <Button children="Add Money" onClick={async () => {
            await addOnRampTransaction({ amount: amount, from: provider || "" });
            console.log("hi from AddMoney");
            window.location.href = redirecturl || "";
          }} className="text-center bg-blue-200 rounded-lg border-2 border-slate-200 w-1/5 px-2 py-1 mt-6">
          </Button>
        </div>
      </div>
    </Card >
  )
}
