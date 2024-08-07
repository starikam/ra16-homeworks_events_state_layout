import { useState } from "react"
import IconSwitch from "./IconSwitch/IconSwitch"
import CardView from "./CardsView/CardsView"
import ListView from "./ListView/ListView"


const Store = ({products}) => {
    const [iconMode, setIcon] = useState("view_list")

    return (
        <>
        <IconSwitch icon={iconMode} onSwitch={() => iconMode === "view_list" ? setIcon("view_module"): setIcon("view_list")}/>
        {iconMode === "view_list" ? <ListView cards = {products}/>:<CardView cards = {products}/>}
        </>
        
        )
}


export default Store