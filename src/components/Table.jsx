import ItemRow from "./ItemRow";

export default function Table ({items}) {
    return (
        <div className="overflow-x-auto m-5 max-md:mx-1">
          <table className="min-w-full">
            <thead className="bg-gray-800 h-14 shadow-2xl p-2 w-max max-sm:text-sm">
              <tr className="">
                <th className="px-4">ID</th>
                <th className="max-md:px-18">Nome</th>
                <th className="max-md:hidden">Em estoque</th>
                <th className="max-md:hidden">Categoria</th>
                <th  className="max-md:hidden">Preço</th>
                <th>Ações</th>
              </tr>
          </thead>
            <tbody className="p-2">
              {
                items.map(({id, name, inStock, category, price}) => (
                <ItemRow 
                  id={id} 
                  name={name} 
                  category={category} 
                  amount={inStock} 
                  price={price} 
                  key={id}/>
              ))
            } 
            </tbody>
          </table>  
        </div>
    )
}