import React, {useState,useEffect} from "react";
import Loan from "./Loan";

const App = () => {

  const [loans, setLoans] = useState([])

  useEffect(() => {

  }, [])


  return (
      <div>
        {/*{loans.map(loan => (*/}

        {/*    <Loan name={loan.name} country={loan.country} amount={loan.loan_amount} />*/}
        {/*))}*/}
      </div>
  )
}

export default App;
