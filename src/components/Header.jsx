import { useGlobalState } from "../Store"
import { connectWallet } from "../services/blockchain"

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <header className="p-5 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 text-gray-500 hover:text-gray-700">
      <a href="/" className="flex justify-start items-center text-xl text-black">
        <span>Crowd Funding</span>
  
      </a>

      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
           <button type
           className="inline-block px-6 py-2 bg-green-500
            text-white font-medium text-xs 
            leading-tight rounded-full shadow-md
             hover:bg-green-700"
             >{connectedAccount.slice(0,6)+'...'+connectedAccount.slice(38,42)}</button>
        ) : (
           <button type
           className="inline-block px-6 py-2 bg-green-500
            text-white font-medium text-xs 
            leading-tight rounded-full shadow-md
             hover:bg-green-700"
             onClick={connectWallet}
             >CONNECT WALLET</button>
        )}
      </div>
    </header>
  )
}

export default Header