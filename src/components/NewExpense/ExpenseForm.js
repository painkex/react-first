import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const [tuvasvoirmagueule,setTuvasvoirmagueule] = useState('NIOUUU');

  const [data, setData] = useState({
      title:'',
      amount:'',
      date:'',
  })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const inputOnChangeHandler = (event) => {
   const titi = "tutu";
    const a = {
      [titi]:"tata",
    }
    setData((prevData) => ({...prevData, [event.target.name]:event.target.value}))
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(data)
  }
  const nioufunction = (e) => {

    console.log(tuvasvoirmagueule);
    setTuvasvoirmagueule(`${tuvasvoirmagueule}KYYYYYYK`);// -> NIOUUUKYYYYYYK
    setTuvasvoirmagueule((NIOUUUKYYYYYYK) => `${NIOUUUKYYYYYYK}KYYYYYYK`);// -> NIOUUUKYYYYYYKKYYYYYYK
    setTuvasvoirmagueule((NIOUUUKYYYYYYKKYYYYYYK) => `${NIOUUUKYYYYYYKKYYYYYYK}KYYYYYYK`);// -> NIOUUUKYYYYYYKKYYYYYYK

    const tuvasvraimntvoir = 'KYYYYYYKS';
    console.log(tuvasvoirmagueule);
    e.preventDefault();

  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={inputOnChangeHandler} name="title" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" min="0.01" onChange={inputOnChangeHandler} name="amount" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputOnChangeHandler}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
