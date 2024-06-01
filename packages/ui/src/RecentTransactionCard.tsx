
export default function Transaction({ transaction }: {
  transaction: {
    status: string,
    from: String,
    token: String,
    amount: number,
    time: Date,
  }
}) {
  // console.log(transaction);
  return (
    <div className="flex justify-between mt-4 mb-2">
      <div className="">
        <div className="text-lg font-semibold">
          {transaction.status}
        </div>
        <div>
          {transaction.time.toLocaleString(`en-Us`, { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

      <div className="text-lg font-semibold">
        Rs. {transaction.amount / 100}
      </div>
    </div>
  )
}
