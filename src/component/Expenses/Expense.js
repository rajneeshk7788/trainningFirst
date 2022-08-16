import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
// import { Scrollbars } from 'react-custom-scrollbars-2';
import './ExpenseItem.css'

const Expense = () => {
    const expense = [
        { date: new Date(2021, 2, 28), title: 'Car ', amount: 294.67, },
        { date: new Date(2031, 5, 28), title: 'Mobile', amount: 94.67, },
        { date: new Date(1993, 12, 8), title: 'Rough', amount: 24.67, },
        { date: new Date(1993, 11, 4), title: 'Mouse', amount: 29.67, },
        { date: new Date(2021, 5, 2), title: 'KeyBord', amount: 84.67, },
        { date: new Date(2010, 2, 28), title: 'Toys', amount: 984.67, },
        { date: new Date(2011, 7, 18), title: 'Clothes', amount: 27.67, },

    ]
    // const addExpenseHandeler = expense =>{
    //     console.log("In Expense.js");
    //     console.log(expense);
    // }
    return (
        <>
            {/* <Scrollbars style={{ width: 900, height: 500 }} className='expense'> */}
            <Card className='expense'>
                <ExpenseItem
                    title={expense[0].title}
                    amount={expense[0].amount}
                    date={expense[0].date} />
                <ExpenseItem
                    title={expense[1].title}
                    amount={expense[1].amount}
                    date={expense[1].date} />
                <ExpenseItem
                    title={expense[2].title}
                    amount={expense[2].amount}
                    date={expense[2].date} />
                <ExpenseItem
                    title={expense[3].title}
                    amount={expense[3].amount}
                    date={expense[3].date} />
                <ExpenseItem
                    title={expense[0].title}
                    amount={expense[0].amount}
                    date={expense[0].date} />
                <ExpenseItem
                    title={expense[1].title}
                    amount={expense[1].amount}
                    date={expense[1].date} />
                <ExpenseItem
                    title={expense[2].title}
                    amount={expense[2].amount}
                    date={expense[2].date} />
                <ExpenseItem
                    title={expense[3].title}
                    amount={expense[3].amount}
                    date={expense[3].date} />
                <ExpenseItem
                    title={expense[4].title}
                    amount={expense[4].amount}
                    date={expense[4].date} />
                <ExpenseItem
                    title={expense[5].title}
                    amount={expense[5].amount}
                    date={expense[5].date} />
                <ExpenseItem
                    title={expense[6].title}
                    amount={expense[6].amount}
                    date={expense[6].date} />
                    </Card>
            {/* </Scrollbars> */}
        </>
    )
}

export default Expense