import  TableHead from "./TableHead"

export default function Table ({headers, children}) {
    return (
        <>
          <table className="bg-black my-10 max-w-6xl min-h-min">
            <TableHead>
                {
                  headers.map(header => (
                    <th key={header} className="">{header}</th>
                 ))
                }
            </TableHead>
            <tbody>
                {children}
            </tbody>
          </table>  
        </>
    )
}