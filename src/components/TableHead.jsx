export default function TableHead ({children}) {
    return (
        <thead className="bg-gray-800 h-10 w-full">
            <tr className="flex justify-between items-center px-4 py-2">
               {children}
            </tr>
        </thead>
    )
}