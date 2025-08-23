import useBudget from "../hooks/useBudget";
import { categories } from "../data/categories";

function FilterCategory() {
  const { dispatch } = useBudget();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "filter-by-category",
      payload: { categoryId: e.target.value },
    });
  };
  return (
    <form className="bg-white p-4 rounded-lg shadow-sm mb-5 ">
      <div className="flex gap-4 items-center">
        <label className="font-bold" htmlFor="filter">
          Categoria:{" "}
        </label>
        <select
          onChange={handleChange}
          className="bg-slate-200 py-2 pl-3 pr-10 rounded-lg w-full outline-none cursor-pointer "
          name="filter"
          id="filter"
        >
          <option value="">--- Todas las categorías ---</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default FilterCategory;
