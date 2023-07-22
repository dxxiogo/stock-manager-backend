export default function Input ({id, type, labelContent, value, handleChange}) {
    return (
        <>
          <label htmlFor={id}>{labelContent}</label>  
          <input type={type} name={id} id={id} value={value} onChange={handleChange}/>
        </>
    )
}