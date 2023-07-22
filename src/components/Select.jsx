export default function Select ({id, labelContent, value, handleChange, children}) {
    return (
        <>
          <label htmlFor={id}>{labelContent}</label>
          <select name={id} id={id} value={value} onChange={handleChange}>
            <option value="">Selecione uma categoria</option>
            {children}
          </select>  
        </>
    )
}