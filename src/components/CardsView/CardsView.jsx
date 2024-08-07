import ShopCard from "./ShopCard"
import './CardsView.css'

const CardView = ({cards}) => {

    return (
        <div className="cards">
        {cards.map(card => {return <ShopCard card ={card}/>})}
        </div>
    )
}

export default CardView