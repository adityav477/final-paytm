"use Client"
import { Button } from "./button";

// //Appbar this.props.
interface AppbarProps {
  user?: {
    id: string,
    email: string,
    number?: string,
    name: string

  };
  onSignIn: () => void;
  onSignOut: () => void;
}

export default function Appbar({ user, onSignIn, onSignOut }: AppbarProps) {

  return (
    <div className="flex justify-between items-center border-b-2 bg-blue-300 w-full px-2 pb-2">
      <div className="font-bold text-3xl p-2">
        Farzi
      </div>
      <div className="grid grid-cols-2 gap-2 mr-2 w-1/13 ">
        {user ?
          <div className="text-center bg-red-400 text-white rounded-full p-2 mx-2">
            {user.email.slice(0, 1)}
          </div>
          :
          <div>
          </div>
        }

        <div>
          <Button className="bg-red-400 text-white font-semibold rounded-lg px-4 py-2 " onClick={user ? onSignOut : onSignIn}>
            {user ? "LogOut" : "LogIn"}
          </Button>
        </div>

      </div>
    </div >
  )

}
