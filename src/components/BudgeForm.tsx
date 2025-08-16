import React, { useMemo, useState } from "react";

export default function BudgeFrom() {
  const [budge, setBudge] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudge(e.target.valueAsNumber)
    console.log(isValid)
    
  }

  const isValid = useMemo(()=>{
    return isNaN(budge)||budge<=0
  },[budge])

  return (
    <>
      <form className="space-y-5">
        <div className="gap-y-4 flex flex-col">
          <label
            htmlFor="budge"
            className="text-3xl text-blue-600 font-bold text-center"
          >
            Definir Presupuesto
          </label>
          <input
            id="budge"
            type="number"
            className="w-full bg-white border border-gray-200 focus:border-blue-600 p-2 outline-none"
            name="budge"
            placeholder="Define tu presupuesto"
            value={budge} 
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
