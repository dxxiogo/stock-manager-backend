export default function Input ({id, type, labelContent, value, handleChange}) {
    return (
          <div className="flex flex-col">
            <label htmlFor={id}>{labelContent}</label>
            <input type={type} name={id} id={id} value={value} onChange={handleChange} className="w-64 h-9 rounded mt-3 bg-gray-800 p-3 max-md:w-96 max-sm:w-96 max-[410px]:max-w-xs"/>
          </div>
    )
}