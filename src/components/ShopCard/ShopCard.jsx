import './ShopCard.css'
import PropTypes from 'prop-types'

export const ShopCard = ({card}) => {
    const {name, price, color, img} = card

    return (
        <article className="card">
            <h2 className="card_title">{name}</h2>
            <h4 className="card_color">{color}</h4>
            <div className="card_image">
                <img src={img} alt={name} />
            </div>
            <footer className='card_footer'>
                <span className="card_price">{price}$</span>
                <button className="card_button">ADD TO CART</button>
            </footer>
        </article>
    )
}

ShopCard.propTypes = {
    card: PropTypes.array.isRequired
}
  