export function RecentP2PTransactionCard({ transaction, sign, fromOrToEnum }: {
  transaction: {
    receiverId: number,
    time: Date,
    amount: number
  },
  sign: signature,
  fromOrToEnum: fromOrToEnum,
}) {
  return (
    <div className="grid grid-cols-2 w-full pb-2">
      <div className="">
        <div className="font-semibold">
          {fromOrToEnum}: {transaction.receiverId}
        </div>
        <div>
          {transaction.time.toLocaleString(`en-Us`, { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

      <div className="flex justify-end text-lg font-semibold">
        {sign} RS. {transaction.amount}
      </div>
    </div>
  )
}

export enum signature {
  "+",
  "-"
}

export enum fromOrToEnum {
  "from",
  "to"
}
