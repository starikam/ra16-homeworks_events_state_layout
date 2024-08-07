import products from "../../products"
import { IconSwitch } from "../IconSwitch"
import { useState } from 'react';
import './Store.css'
import { CardsView } from "../CardsView/CardsView";
import { ListView } from "../ListView/ListView";
import PropTypes from 'prop-types'

export const Store = () => {
    const [icon, setIcon] = useState('view_list');
    const module = icon === 'view_module';
    
    const onSwitch = () => {
        setIcon(() => {
            if (module) return 'view_list ';
            return 'view_module'
        })
    }

    return (
        <>
            <IconSwitch icon={icon} onSwitch={onSwitch}/>
            {module ? <CardsView cards={products}/> : <ListView items={products}/>}
        </>
  )
}

Store.propTypes = {
    products: PropTypes.array.isRequired,
    icon: PropTypes.string,
  }
