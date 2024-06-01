"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db";

export async function getTransactions() {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  // console.log(session);
  // console.log(userId);
  const transactions = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(userId),
    }
  })
  return transactions.reverse();
}
