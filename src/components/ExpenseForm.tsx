import { useEffect, useState } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import ErrorMessage from "./ErrorMessage";
import useBudget from "../hooks/useBudget";

function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    name: "",
    amount: 0,
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState<string | null>(null);
  const [ prevousAmount, setPreviousAmount ] = useState(0);
  const { dispatch, state, availableBudget } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const expenseToEdit = state.expense.filter(
        (currenExpense) => currenExpense.id === state.editingId
      )[0];
      setExpense(expenseToEdit);
    } else {
      setExpense({
        name: "",
        amount: 0,
        category: "",
        date: new Date(),
      });
    }
  }, [state.editingId, state.expense]);

  const handleChangeDate = (value: Value) => {
    setExpense({ ...expense, date: value });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountValid = ["amount"].includes(name);
    setExpense({ ...expense, [name]: isAmountValid ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validar si hay campos vacios
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // validar que no me pase de presupuesto

    if (prevousAmount - expense.amount > availableBudget) {
      setError("El gasto excede el presupuesto disponible");
      return;
    }

    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { ...expense, id: state.editingId } },
      });
        setPreviousAmount(expense.amount);
    } else {
      dispatch({ type: "add-expense", payload: { expense } });
    }
    setExpense({
      name: "",
      amount: 0,
      category: "",
      date: new Date(),
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <legend className="uppercase text-center text-2xl font-bold border-b-2 py-2 border-blue-500">
        {state.editingId ? "Actualizar Gasto" : "Nuevo Gasto"}
      </legend>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="name">
          Nombre gasto:{" "}
        </label>
        <input
          onChange={handleChange}
          id="name"
          value={expense.name}
          placeholder="Añade el nombre del gasto"
          className=" border border-gray-400 rounded-lg bg-white outline-none w-full p-2"
          name="name"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="amount">
          Cantidad:{" "}
        </label>
        <input
          onFocus={() => setError(null)}
          onChange={handleChange}
          id="amount"
          value={expense.amount}
          placeholder="Añade la cantidad del gasto ej. 300"
          className=" border border-gray-400 rounded-lg bg-white outline-none w-full p-2"
          name="amount"
          type="number"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="category">
          Categoria:{" "}
        </label>
        <select
          onChange={handleChange}
          value={expense.category}
          className="border border-gray-400 rounded-lg text-black bg-white outline-none w-full p-2"
          name="category"
          id="category"
        >
          <option value="--Seleccione--">-- Seleccione--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-bold" htmlFor="date">
          Fecha:{" "}
        </label>
        <DatePicker
          value={expense.date}
          onChange={handleChangeDate}
          id="date"
          className="border border-gray-400 rounded-lg bg-white outline-none w-full p-2"
        />
      </div>

      <input
        value="Añadir gasto"
        type="submit"
        className="bg-blue-600 p-2 w-full text-white font-bold uppercase rounded-lg "
      />
    </form>
  );
}

export default ExpenseForm;
