import './ShopItem.css'
import PropTypes from 'prop-types'

export const ShopItem = ({card}) => {
    const {name, price, color, img} = card

    return (
        <article className="card_list">
            <div className="card_image_list">
                <img src={img} alt={name} />
            </div>
            <div className="card_title_list">{name}</div>
            <div className="card_color_list">{color}</div>
                <span className="card_price_list">{price}$</span>
                <button className="card_button_list">ADD TO CART</button>
        </article>
    )
}

ShopItem.propTypes = {
    card: PropTypes.array.isRequired
}
