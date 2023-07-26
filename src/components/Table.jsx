import  TableHead from "./TableHead"

export default function Table ({headers, children}) {
    return (
        <>
          <table>
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