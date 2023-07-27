import  TableHead from "./TableHead"

export default function Table ({headers, children}) {
    return (
        <>
          <table className="bg-black w-3/5">
            <TableHead>
                {
                  headers.map(header => (
                    <th key={header}>{header}</th>
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