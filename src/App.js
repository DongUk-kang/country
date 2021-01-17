import React, {useState,useEffect} from "react";
import Loan from "./Loan";

const App = () => {

  const [loans, setLoans] = useState([])

  //네트워킹
  const getData = async () => {
    return (

    )
  }

  useEffect(() => {
    getData()
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
