import { useContext } from "react";
import {BudgetContext} from "../context/BudgetContext";

export default function useBudge(){
    const context = useContext(BudgetContext);
    if (!context){
        throw new Error("useBudge must be used within a BudgeProvider");
    }

    return context;
  
}