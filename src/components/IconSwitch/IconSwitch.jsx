import './IconSwitch.css'

const IconSwitch = ({icon, onSwitch}) => {

    return (
        <i className="material-icons" onClick={onSwitch}>
            {icon}
        </i>
    )

}

export default IconSwitch