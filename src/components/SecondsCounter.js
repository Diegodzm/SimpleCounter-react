import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './SecondsCounter.css'



function SecondsCounter(props) {

    return  <div className='Reloj d-inline-flex bg-black'>
        <div className='clockImg m-1 border border-2 rounded bg-dark'><FontAwesomeIcon icon={faClock} /></div>
        <div className='HThousSeconds m-1 border border-2 rounded  bg-dark'>{props.HundredThousandUnit}</div>
        <div className='tenThousandSeconds m-1 border border-2 rounded  bg-dark'>{props.TenThousandUnit}</div>
        <div className='ThousandSeconds m-1 border border-2 rounded  bg-dark'>{props.ThousandUnit}</div>
        <div className='hundredSeconds m-1 border border-2 rounded  bg-dark'>{props.HundredUnit}</div>
        <div className='tenSeconds m-1 border border-2 rounded  bg-dark'>{props.TenUnit}</div>
        <div className='Seconds m-1 border border-2 rounded  bg-dark'>{props.seconds}</div>
    </div>

}
export default SecondsCounter;