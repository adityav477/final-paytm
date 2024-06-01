"use server"
import getUserId from "./getSession";
import prisma from "@repo/db";

export default async function getUserBalance() {

  const userId = await getUserId();
  const userBalance = await prisma.balance.findFirst({
    where: {
      userId: Number(userId),
    },
  })
  if (!userBalance) {
    alert("failed to retrieve the balance");
    return 0;
  }

  // console.log("user is ");
  // console.log(userBalance);


  const balance = userBalance.amount;
  return balance;
}
