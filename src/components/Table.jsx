import  TableHead from "./TableHead"

export default function Table ({headers, children}) {
    return (
        <>
          <table className="m-10 h-30 w-11/12">
            <TableHead>
                {
                  headers.map(header => (
                    <th key={header} className="">{header}</th>
                 ))
                }
            </TableHead>
            <tbody className="p-2">
                {children}
            </tbody>
          </table>  
        </>
    )
}