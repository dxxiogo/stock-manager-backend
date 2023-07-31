export default function Button ({content, ...rest}) {
    return <button {...rest} className= {`rounded  p-1 w-20 ${rest.className}`}>{content}</button>
}