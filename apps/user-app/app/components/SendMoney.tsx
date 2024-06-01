"use client"
import Card from "@repo/ui/card";
import { useState } from "react";
import TextInput from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import p2pTransaction from "../lib/actions/p2pTransaction";

export default function SendMoney() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <Card title="Send Money">
      <div>
        <TextInput label="Number" placeholder="Send to" onChange={(value: string) => {
          setPhoneNumber(value);
        }} />

        <TextInput label="Amount" placeholder="Amount to Send" onChange={(value: string) => {
          setAmount(value);
        }} />

        <div className="text-center">
          <Button children="Send" className="text-center rounded-md bg-blue-400 px-4 py-2 mt-4" onClick={async () => {
            const test = await p2pTransaction({ phoneNumber, amount });
            if (!test) {
              alert("Wrong Phone Number")
            } else {
              window.location.href = "/transfer" || "";
            }
          }} >
          </Button>
        </div>
      </div>
    </Card>
  )
}
