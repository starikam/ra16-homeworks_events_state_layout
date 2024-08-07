const ShopCard = ({card}) => {

    return (
        <div className="card" key={card.name + card.color}>
            <h3 className="card__name">{card.name.toUpperCase()}</h3>
            <span className="card__color">{card.color}</span>
            <img src={card.img} alt={card.name}></img>
            <div className="card__price">
                <div>${card.price}</div>
                <button className="card__btn">Add to cart</button>
            </div>
        </div>
    )
}

export default ShopCard