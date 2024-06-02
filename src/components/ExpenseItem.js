import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency + ' ' + props.cost}</td>
        <td>
            
            <i class="bi bi-plus-circle-fill" style={{fontSize: "1.5rem", color: "green"}} onClick={event=> increaseAllocation(props.name)}>
            {/* <button  onClick={event=> increaseAllocation(props.name)}></button> */}
            </i>
            
        </td>
        <td>
            <i class="bi bi-dash-circle-fill" style={{fontSize: "1.5rem", color: "red"}} onClick={event=> handleDeleteExpense(props.name)}>
            {/* <button  onClick={event=> increaseAllocation(props.name)}></button> */}
            </i>
            {/* <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete> */}
        </td>
        </tr>
    );
};
export default ExpenseItem;