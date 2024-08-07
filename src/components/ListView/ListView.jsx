import ShopItem from "./ShopItem"
import './ListView.css'

const ListView = ({cards}) => {

    return (
        <div className="cards-list">
        {cards.map(card => {return <ShopItem card ={card}/>})}
        </div>
    )

}

export default ListView