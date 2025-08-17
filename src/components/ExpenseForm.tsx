
function ExpenseForm() {
    return (
        <form className="space-y-5" action="">
            <legend className="uppercase text-center text-2xl font-bold border-b-2 py-2 border-blue-500">Nuevo gasto</legend>
            <div className="flex flex-col gap-2">
                <label className="font-bold" htmlFor="name" >Nombre gasto: </label>
                <input className=" border border-gray-400 rounded-lg bg-white outline-none w-full p-2" name="name" type="text" />
            </div>
        </form>
    )
}

export default ExpenseForm