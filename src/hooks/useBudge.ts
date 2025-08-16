import { useContext } from "react";
import { BudgeContext } from "../context/BudgeContext";

export default function useBudge(){
    const context = useContext(BudgeContext);
    if (!context){
        throw new Error("useBudge must be used within a BudgeProvider");
    }

    return context;
  
}