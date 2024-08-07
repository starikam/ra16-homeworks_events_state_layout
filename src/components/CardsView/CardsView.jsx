import { ShopCard } from "../ShopCard"
import './CardsView.css'
import PropTypes from 'prop-types'

export const CardsView = ({ cards }) => {
    return (
        <div className="container">
            {cards.map((card, index) => {
                return <ShopCard card={card} key={index} />
            })
            }
        </div>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired,
  }
