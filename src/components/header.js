import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
    // const onClick =()=>{
    //     console.log('Click')
    // }
    const location = useLocation()
    return (
        <header className='header'>
            {/* inline style={{color:'red',backgroundColor:'black'}} */}
            <h1>{title}</h1>
            {location.pathname ==='/' && (
                <Button 
                    color={showAdd?'red':'green'}
                    text={showAdd?'Close':'Add'} 
                    onClick={onAdd}
                />
            )}
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker'
}
Header.propTypes={
    title:PropTypes.string.isRequired,
    color:PropTypes.string,
    onClick:PropTypes.func
}

//CSS in JS
// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }
export default Header
