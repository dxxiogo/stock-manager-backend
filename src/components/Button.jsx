export default function Button ({content, ...rest}) {
    return <button {...rest} className= {`rounded mt-4 p-1 w-24 ${rest.className}`}>{content}</button>
}