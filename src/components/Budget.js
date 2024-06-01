import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const value = event.target.value
        // if(value > remaining) {
        //     alert("The value cannot exceed remaining funds  £"+remaining);
        //     // setNewBudget(budget);
        //     return;
        // }

        if(value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending £"+totalExpenses);
            setNewBudget(value);
            return;
        }
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;