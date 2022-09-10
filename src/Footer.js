const Footer = ({length}) =>{

    const today = new Date()
    return (
        <footer>
            <p>{length} list item {length ===1 ? "item" : "item"}</p>
        </footer>
    )
}

export default Footer