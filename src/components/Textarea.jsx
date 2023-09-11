import ErrorInput from "./ErrorInput"

export default function Textarea ({id, labelContent, value, handleChange, err}) {
    return (
            <div className="flex flex-col mt-4 ">
                <label htmlFor={id}>{labelContent}</label>
                <textarea name={id} id={id} value={value} onChange={handleChange} className="rounded h-32 mt-3 bg-gray-800 p-3"></textarea>
                <ErrorInput message={err}/>
            </div>
    )
}