export default function TableHead ({children}) {
    return (
        <thead className="bg-gray-800 h-10  w-full">
            <tr className="flex align-center gap-10 p-3 max-w-4xl">
               {children}
            </tr>
        </thead>
    )
}