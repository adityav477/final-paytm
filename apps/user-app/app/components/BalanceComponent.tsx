import Card from "@repo/ui/card"
import BalanceCard from "@repo/ui/BalanceCard"
import getUserBalance from "../lib/actions/getUserBalance"

export default async function BalanceComponent() {
  const balance = await getUserBalance();
  const lockedAmount = 0;
  // console.log("balance is ");
  // console.log(balance);
  // console.log(typeof (balance));

  return (
    <Card title="Balance">
      <div className="pt-2">
        <BalanceCard title="Unlocked Balance" amount={balance} />
        <BalanceCard title="Locked Balance" amount={lockedAmount} />
        <BalanceCard title="Total Balance" amount={(balance + lockedAmount)} />
      </div>

    </Card>
  )
}
