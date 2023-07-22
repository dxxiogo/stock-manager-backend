export default function Textarea ({id, labelContent, value, handleChange}) {
    return (
        <>
            <label htmlFor={id}>{labelContent}</label>
            <textarea name={id} id={id} value={value} onChange={handleChange}></textarea>
        </>
    )
}