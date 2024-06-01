import { onRampStatus } from "@prisma/client";
import prisma from "..";

async function main() {
  const example1 = await prisma.user.create({
    data: {
      email: "example1@gmail.com",
      name: "example1",
      number: 1111111111,
      password: "example1",
      OnRampTransaction: {
        create: {
          status: onRampStatus.Success,
          from: "HDFCBank",
          token: "1234",
          amount: 2000 * 100,
        }
      },
      Balance: {
        create: {
          amount: 2000 * 100,
          locked: 0
        }
      }
    }
  })
  const example2 = await prisma.user.create({
    data: {
      email: "example2@gmail.com",
      name: "example2",
      number: 2222222222,
      password: "example2",
      OnRampTransaction: {
        create: {
          status: "Success",
          from: "HDFCBank",
          token: "12345",
          amount: 2000 * 100,
        }
      },
      Balance: {
        create: {
          amount: 2000 * 100,
          locked: 0
        }
      }
    }
  })
  console.log({ example1, example2 });
}

main();

