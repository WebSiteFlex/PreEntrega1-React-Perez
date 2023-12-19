import Classes from "../Button/Button.module.css";

const Button =  (props) =>{
    return (
            <button onClick={props.click} className={Classes.navButton} >{props.label}</button>     
    )
};

export default Button;