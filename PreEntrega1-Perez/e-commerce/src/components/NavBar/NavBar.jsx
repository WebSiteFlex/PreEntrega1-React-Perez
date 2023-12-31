import Button from "../ItemListContainer/ItemListContainer"

const NavBar = () => {
    return (
        <>

            <h1>Simple Site </h1>
            <Button label={"Home"} click={() => {
                alert("you clicked in Home!")
            }}></Button>
            <Button label={"Contact"} click={() => {
                alert("you clicked in Contact!")
            }}></Button>
            <Button label={"About us"} click={() => {
                alert("you clicked in About us!")
            }}></Button>
        </>
    )
}

export default NavBar