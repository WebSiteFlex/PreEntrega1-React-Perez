import classes from "./Button.module.css"

const Button = ({click, label})=>{
    return(
     <button onClick={click} className={classes.button}>{label}</button>
    )
}

export default Button