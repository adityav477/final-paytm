import Card from "@repo/ui/card";
import { getP2PTransaction } from "../lib/actions/getP2PTransaction";
import { RecentP2PTransactionCard } from "@repo/ui/RecentP2PTransaction";
import { signature, fromOrToEnum } from "@repo/ui/RecentP2PTransaction";

export default async function RecentP2PTransaction() {
  const { sentTransactions, receivedTransactions } = await getP2PTransaction();

  return (
    <div >
      <Card title="Recent Sent P2P" >
        {
          sentTransactions.map((transaction: any) => {
            return (
              <RecentP2PTransactionCard transaction={{
                time: transaction.time,
                receiverId: transaction.receiverId,
                amount: transaction.amount,
                //@ts-ignore
              }} sign={signature[1]} fromOrToEnum={fromOrToEnum[1]} />
            )
          })
        }
      </Card>

      <Card title="Recent Received P2P">
        {/* <h1 className="text-2xl font-semibold mb-2">Recent Received P2P</h1> */}
        {
          receivedTransactions.map((transaction: any) => {
            return (
              <RecentP2PTransactionCard transaction={{
                time: transaction.time,
                receiverId: transaction.receiverId,
                amount: transaction.amount,
                //@ts-ignore
              }} sign={signature[0]} fromOrToEnum={fromOrToEnum[0]} />
            )

          })
        }
      </Card >
    </div >
  )
}
