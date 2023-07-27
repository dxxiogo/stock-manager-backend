export default function InventoryInsight ({title, amount}) {
    return (
        <div className="flex flex-col bg-gray-800 w-64 px-5 py-3 rounded shadow-2xl h-32 gap-4">
            <span>{title}</span>
            <span className="font-semibold text-4xl text-center">{amount}</span>
        </div>
    )
}