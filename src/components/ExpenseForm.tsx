import { categories } from "../data/categories"

function ExpenseForm() {
    return (
        <form className="space-y-5" action="">
            <legend className="uppercase text-center text-2xl font-bold border-b-2 py-2 border-blue-500">Nuevo gasto</legend>
            <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="name" >Nombre gasto: </label>
                <input id="name" placeholder="Añade el nombre del gasto" className=" border border-gray-400 rounded-lg bg-white outline-none w-full p-2" name="name" type="text" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="amount" >Cantidad: </label>
                <input id="amount" placeholder="Añade la cantidad del gasto ej. 300" className=" border border-gray-400 rounded-lg bg-white outline-none w-full p-2" name="amount" type="number" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="category" >Categoria: </label>
                <select className="border border-gray-400 rounded-lg text-black bg-white outline-none w-full p-2" name="category" id="category">
                    <option value="--Seleccione--">-- Seleccione--</option>
                    {categories.map((category) => (<option key={category.id} value={category.id}>{category.name}</option>))}
                </select>
            </div>

            <input value="Añadir gasto" type="submit" className="bg-blue-600 p-2 w-full text-white font-bold uppercase rounded-lg " />

        </form>
    )
}

export default ExpenseForm