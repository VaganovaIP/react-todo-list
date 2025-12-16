const Button = (props) => {
    const {
        className = '',
        type = 'button',
        children,
    } = props

    return(
        <button
            className={`${className} button`}
            type={type}
        >{children}</button>
    )
}

export default Button