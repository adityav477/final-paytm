import { z } from "zod";
import express from "express";
import prisma from "@repo/db";

const app = express();
app.use(express.json());

const reqBluePrint = z.object({
  token: z.string(),
  userId: z.string(),
  amount: z.string(),
})

app.post("/bankAPI/receive", async (req, res) => {
  // console.log(req.body);
  const zodResult = reqBluePrint.safeParse(req.body);
  // console.log(zodResult);
  if (!zodResult.success) {
    res.status(411).json({
      message: "Wrong data provided",
    })
  }

  const paymentData: {
    token: string,
    userId: string,
    amount: string
  } = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount
  }

  try {
    await prisma.$transaction([
      prisma.balance.updateMany({
        where: {
          userId: Number(paymentData.userId),
        },
        data: {
          amount: {
            increment: Number(paymentData.amount),
          }
        }
      }),

      prisma.onRampTransaction.updateMany({
        where: {
          token: paymentData.token,
        },
        data: {
          status: "Success",
        }
      })
    ])

    res.status(200).json({
      message: "Success",
    })
  } catch (error) {
    res.status(401).json({
      message: "transactin in bank-webhook failed",
    })

  }

})

// app.post("/bankAPI/send",(req,res) => {
//   const zodResult
// })

app.listen(3003, () => {
  console.log("bank-webhook started at port 3000");
})
