"use server"
import prisma from "@repo/db";
import getUserId from "./getSession";

export default async function addOnRampTransaction({ amount, from }: { amount: number, from: string, }) {
  const userId = await getUserId();
  const token = (Math.random() * 1000).toString();

  // console.log("hi from addOnRampTransaction");
  // console.log(userId);

  const newTransaction = await prisma.onRampTransaction.create({
    data: {
      amount: amount * 100,
      from: from,
      token: token,
      userId: Number(userId)
    }
  })
  // console.log(newTransaction);
}

