export default function Button ({content, ...rest}) {
    return <button {...rest} className= {rest.className}>{content}</button>
}