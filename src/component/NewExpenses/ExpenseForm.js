import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        

    }



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.1" step="0.01" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2024-12-12" onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className='new-expense__action'>
                    <button>Add Expense</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm