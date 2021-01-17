import React from 'react';

const Loan = ({name, country, loan_amount}) => {




    return (
        <div>
            <h1>{name}</h1>
            <h2>{country}</h2>
            <h3>{loan_amount}</h3>
        </div>
    );
};

export default Loan;
