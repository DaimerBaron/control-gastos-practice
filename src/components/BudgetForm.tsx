import React, { useMemo, useState } from "react";
import useBudget from "../hooks/useBudget";
export default function BudgetFrom() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(e.target.valueAsNumber)) return;
    setBudget(e.target.valueAsNumber)
  }

  const isValid = useMemo(()=>{
    return isNaN(budget)||budget<=0
  },[budget])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch({type:'add-budget', payload:{budget}})
  }

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="gap-y-4 flex flex-col">
          <label
            htmlFor="budget"
            className="text-3xl text-blue-600 font-bold text-center"
          >
            Definir Presupuesto
          </label>
          <input
            id="budget"
            type="number"
            className="w-full bg-white border border-gray-200 focus:border-blue-600 p-2 outline-none"
            name="budget"
            placeholder="Define tu presupuesto"
            value={budget} 
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          className=" disabled:opacity-20 disabled:bg-gray-500 disabled:cursor-not-allowed bg-blue-600 w-full cursor-pointer text-white p-2 hover:bg-blue-700"
          disabled= {isValid}
        />
      </form>
    </>
  );
}
