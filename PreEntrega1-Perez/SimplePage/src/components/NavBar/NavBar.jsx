import Button from "../Button/Button";
import Toastify from 'toastify-js'
const NavBar = () => {
    return (
        <>
            <Button label={"Home"} click={ ()=>
            Toastify({
                text: "Your did Click Here in Home ",
                duration: 800,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: false,
                close: false,
                gravity: "top", 
                position: "left", 
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #FAEED1, #BBAB8C)",
                  color:"black",
                  fontSize:"26px"
                }
              }).showToast()
            }></Button>
            <Button label={"About Us"} click={()=> 
             Toastify({
                text: "Your did Click Here in About Us",
                duration: 800,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: false,
                close: false,
                gravity: "top", 
                position: "left", 
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #FAEED1, #BBAB8C)",
                  color:"black",
                  fontSize:"26px"
                }
              }).showToast()
            
            }></Button>
            <Button label={"Contact"} click={()=>
            Toastify({
                text: "Your did Click Here in Contact",
                duration: 800,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: false,
                close: false,
                gravity: "top", 
                position: "left", 
                stopOnFocus: true,
                style: {
                  background: "linear-gradient(to right, #FAEED1, #BBAB8C)",
                  color:"black",
                  fontSize:"26px"
                }
              }).showToast()
            }></Button>
        </>
    )
};

export default NavBar;