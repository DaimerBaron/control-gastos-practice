import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import { formatDate } from "../helpers";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

type ExpenseDetailsProps = {
  expense: Expense;
};

import  useBudget  from "../hooks/useBudget";
function ExpenseDetails({ expense }: ExpenseDetailsProps) {

    const { dispatch } = useBudget();
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => dispatch({type: 'edit-expense', payload: { id: expense.id }})}>
        Actualizar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = (id: string) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => dispatch({type: 'delete-expense', payload: { id }})}
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  const category = categories.filter(
    (category) => category.id === expense.category[0]
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions(expense.id)}
      >
        <div className="bg-white rounded-xl shadow-lg p-4 w-full flex gap-4 mt-1  justify-between items-center select-none cursor-pointer ">
          <div>
            <img
              className="w-10 h-10"
              src={`/public/icono_${category[0]?.icon}.svg`}
              alt=""
            />
          </div>
          <div className="flex-1 space-y-1">
            <p className="font-bold uppercase">{expense.name}</p>
            <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
            <p className="">{category[0]?.name}</p>
          </div>
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default ExpenseDetails;
