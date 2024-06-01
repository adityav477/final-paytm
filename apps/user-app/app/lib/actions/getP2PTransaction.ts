import getUserId from "./getSession";
import prisma from "@repo/db";

export async function getP2PTransaction() {
  const userId = await getUserId();
  const transactions = await prisma.p2PTransaction.findMany({
    where: {
      OR: [
        { senderId: Number(userId) }, { receiverId: Number(userId) }
      ]
    }
  })
  const sentTransactions = transactions.filter((t: any) => t.senderId === Number(userId));
  // console.log(sentTransactions);

  const receivedTransactions = transactions.filter((t: any) => t.receiverId === Number(userId));
  // console.log("receiverId : ");
  // console.log(receivedTransactions);
  // console.log(transactions);

  // const receiverTransactions = await prisma.p2ptransaction.findMay({
  //   where: {
  //     receiverId: Number(userId),
  //   }
  // })
  return { sentTransactions, receivedTransactions };
}
