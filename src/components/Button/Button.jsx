import styles from './Button.module.scss'

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
            className={`${className} ${styles.button}`}
            type={type}
            disabled={isDisabled}
            onClick={onClick}
        >{children}</button>
    )
}

export default Button