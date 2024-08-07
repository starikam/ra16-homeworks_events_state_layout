import { ShopItem } from "../ShopItem"
import './ListView.css'
import PropTypes from 'prop-types'

export const ListView = ({ items }) => {
    return (
        <div className="container_list">
            <article className='cards_list'>
                {items.map((card, index) => {
                    return <ShopItem card={card} key={index} />
                })
            }
            </article>
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired
  }
