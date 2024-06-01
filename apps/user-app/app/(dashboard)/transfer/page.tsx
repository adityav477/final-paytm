import AddMoney from "../../components/AddMoney";
import BalanceComponent from "../../components/BalanceComponent";
import RecentTransactionComponent from "../../components/RecentTransactionComponent";

export default function Transfer() {

  return (
    <div className="w-full">
      <div className="text-4xl border-b-2 border-slate-200 rounded-lg text-[#6a51a6] pt-8 pb-4 mb-8 pl-4 font-bold">
        Transfer
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 w-full gap-2">
          <div className="py-8 rounded-lg">
            <AddMoney />
          </div>

          <div className="grid grid-rows-2 gap-2 py-8">
            <BalanceComponent />
            <RecentTransactionComponent />
          </div>

        </div>
      </div>
    </div >
  )
}

