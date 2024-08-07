import './IconSwitch.css'
import PropTypes from 'prop-types'

export const IconSwitch = ({ icon,  onSwitch }) => {
  return (
    <div className="store_header">
        <div className="store_menu">
        <button className="store_btn material-icons"
            onClick={onSwitch}>
            {icon}
        </button>
        </div>
    </div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
}
