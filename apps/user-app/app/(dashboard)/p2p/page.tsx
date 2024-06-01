import RecentP2PTransaction from "../../components/RecentP2PTransaction";
import SendMoney from "../../components/SendMoney";

export default function P2P() {

  return (
    <div className="w-full">
      <div className="text-4xl border-b-2 border-slate-200 rounded-lg text-[#6a51a6] pt-8 pb-4 mb-8 pl-4 font-bold">
        Peer To Peer
      </div>
      <div className="grid grid-cols-2 w-full gap-4">
        <div className="w-full">
          <SendMoney />
        </div>
        <div>
          <RecentP2PTransaction />
        </div>
      </div>
    </div >
  )
}
