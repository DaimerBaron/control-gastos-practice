import { categories } from "../data/categories"

function FilterCategory(){
    return(
        <>
            <form>
                <div className="w-full shadow-xl p-4 bg-white rounded-xl flex gap-4 my-4">
                    <label htmlFor="filter-by-category">Categoría: </label>
                    <select className="w-full bg-sky-100 outline-none px-2" name="filter-by-category" id="filter-by-category">
                        <option  value="">--- Todas las categorias ---</option>
                        {categories.map((category)=><option value={category.id} >{category.name}</option>)}
                    </select>
                </div>
            </form>
        </>
    )
}


export  default FilterCategory