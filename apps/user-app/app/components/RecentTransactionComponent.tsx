import Card from "@repo/ui/card";
import Transaction from "@repo/ui/RecentTransactionCard";
import { getTransactions } from "../lib/actions/getTransaction";


export default async function RecentTransactionComponent() {
  const transactions = await getTransactions();
  // console.log(transactions);
  return (
    <Card title="Recent Transactions">
      {transactions.map((t: any) => {
        // console.log(t);
        return (
          < Transaction transaction={
            {
              status: t.status,
              from: t.from,
              token: t.token,
              amount: t.amount,
              time: t.time,
            }
          } />
        )
      })}
    </Card>
  )
}
