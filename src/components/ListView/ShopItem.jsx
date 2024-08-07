const ShopItem = ({card}) => {

    return (
        <div className="card-list" key={ card.color + card.name }>
            <img src={card.img} alt={card.name}></img>
            <h3 className="card-list__name">{card.name.toUpperCase()}</h3>
            <span className="card-list__color">{card.color}</span>

            <div className="card-list__price">${card.price}</div>
            <button className="card-list__btn">Add to cart</button>

        </div>
    )
}

export default ShopItem
