export default function BalanceCard({ title, amount }: {
  title: string,
  amount: number,
}) {
  return (
    <div className="flex justify-between border-b-2 border-slate-200 px-2 py-2">
      <div>
        {title}
      </div>
      <div>
        Rs. {amount / 100}
      </div>
    </div>
  )
}
