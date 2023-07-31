export default function TableHead ({children}) {
    return (
        <thead className="bg-gray-800 h-14 shadow-2xl p-2">
            <tr className="">
               {children}
            </tr>
        </thead>
    )
}