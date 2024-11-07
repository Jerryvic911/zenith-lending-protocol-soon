import FundPage from "@/components/Fund";
import Navbar from "../components/Navbar";
import '@solana/wallet-adapter-react-ui/styles.css';
import WithdrawPage from "@/components/Withdraw";

export default function Home() {
  return (
    <div className="">
      
     <Navbar/>
     <FundPage/>
     <WithdrawPage/>
    </div>
  );
}
