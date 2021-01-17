import React, {useState,useEffect} from "react";

const App = () => {

  const [loans, setLoans] = useState([])

  //네트워킹
  const getData = async () => {
    return (
        await fetch("https://api.kivaws.org/v1/loans/newest.json")
            .then(data => data.json())
            .then(res => setLoans(res.loans))
            //.then(res => console.log(res.loans))
            .catch(err => console.log(err))

    )
  }

  useEffect(() => {
    getData()
  }, [])


  return (
      <div>

        {loans.map(item => (
            <>
              <h1>{item.name}</h1>
              <h2>{item.location.country}</h2>
              <h3>{item.loan_amount}</h3>
            </>

        ))}

        {/*<text>{loans.length}</text>*/}
        {/*{loans.map(loan => (*/}

        {/*    <Loan name={loan.name} country={loan.country} amount={loan.loan_amount} />*/}
        {/*))}*/}
      </div>
  )
}

export default App;
