"use server"
import prisma from "@repo/db"
import getUserBalance from "./getUserBalance"
import getUserId from "./getSession";

export default async function p2pTransaction({ phoneNumber, amount }: {
  phoneNumber: string,
  amount: string,
}) {

  //checks if the user has sufficent balance or not 
  const userId = await getUserId();
  const balance = await getUserBalance();
  // console.log(userId);
  // console.log(balance);


  //finds the receiver 
  const receiver = await prisma.user.findFirst({
    where: {
      number: Number(phoneNumber),
    }
  })

  if (!receiver) {
    alert("Wrong Phone Number");
    return 0;
  }

  //start tha transaction 
  try {
    await prisma.$transaction(async (prisma: any) => {
      //lock the tables involving the transaction from balance model
      await prisma.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(userId)} FOR UPDATE`;

      console.log("hi from prisma ");
      if (balance < Number(amount)) {
        console.log("Insufficent Balance")
        alert("In Sufficent Balance");
        throw new Error("In Sufficent Balance");
      };

      //updates the sender Balance
      await prisma.balance.updateMany({
        where: {
          userId: Number(userId),
        },
        data: {
          amount: {
            decrement: Number(amount) * 100,
          }
        }
      })

      //updates the receiver balance
      await prisma.balance.updateMany({
        where: {
          userId: Number(receiver.id),
        },
        data: {
          amount: {
            increment: Number(amount) * 100,
          }
        }
      })

      //adding to p2p table 
      await prisma.p2PTransaction.create({
        data: {
          senderId: Number(userId),
          receiverId: Number(receiver.id),
          amount: Number(amount) * 100
        }
      })
    })
  } catch (e) {
    console.log(e);
  }
  return 1;
}
