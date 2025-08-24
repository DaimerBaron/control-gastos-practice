import { ChangeEvent } from "react"
import { categories } from "../data/categories"
import useBudget from "../hooks/useBudget"

function FilterCategory(){
    const {dispatch} = useBudget()
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        dispatch({type:'filter-by-category', payload:{id:e.target.value}})
    }
    return(
        <>
            <form>
                <div className="w-full shadow-sm p-4 bg-white rounded-xl flex gap-4 my-4">
                    <label htmlFor="filter-by-category">Categoría: </label>
                    <select onChange={handleChange}  className="w-full bg-sky-100 outline-none px-2" name="filter-by-category" id="filter-by-category">
                        <option  value="">--- Todas las categorias ---</option>
                        {categories.map((category)=><option key={category.id} value={category.id} >{category.name}</option>)}
                    </select>
                </div>
            </form>
        </>
    )
}


export  default FilterCategory