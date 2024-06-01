import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
const SelectCurrency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const selectRef = useRef();

    const map = {
        "$": '$ Dollar',
        "£": '£ Pound',
        "€": '€ Euro',
        "₹": '₹ Ruppee',
    }

    const changeLocation = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    const onClick = ()=>{
        selectRef.current.focus()
    }

    return (
        <>
        <div className='alert alert-success' onClick={onClick}> Currency ({map[currency]})
            
        </div>
        <div className="custom-select" style={{width: 200}} >
        <select ref={selectRef} onChange={event=>changeLocation(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
        </div>
        </>
    );
};
export default SelectCurrency;