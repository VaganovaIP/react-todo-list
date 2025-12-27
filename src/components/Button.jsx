const Button = (props) => {
    const {
        className = '',
        type = 'button',
        children,
        isDisabled,
        onClick,
    } = props

    return(
        <button
            className={`${className} button`}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button