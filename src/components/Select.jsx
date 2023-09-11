import ErrorInput from "./ErrorInput"

export default function Select ({id, labelContent, value, handleChange, children, err}) {
    return (
        
          <div className="flex flex-col">
            <label htmlFor={id}>{labelContent}</label>
            <select name={id} id={id} value={value} onChange={handleChange} className="mt-3 w-60 h-9 rounded bg-gray-800 px-3">
              <option value="">Selecione uma categoria</option>
              {children}
            </select>
            <ErrorInput message={err}/>
          </div>
        
    )
}