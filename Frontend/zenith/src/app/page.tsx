import FundPage from "@/components/Fund";
import Navbar from "../components/Navbar";
import '@solana/wallet-adapter-react-ui/styles.css';
import WithdrawPage from "@/components/Withdraw";
import BorrowPage from "@/components/Borrow";
import RepaymentPage from "@/components/Repayment";

export default function Home() {
  return (
    <div className="">
      
     <Navbar/>
     <FundPage/>
     <WithdrawPage/>
     <BorrowPage/>
     <RepaymentPage/>
    </div>
  );
}
