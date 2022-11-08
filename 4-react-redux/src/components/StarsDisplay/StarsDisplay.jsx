import './StarsDisplay.css'

 
export const StarsDisplay = ({ amount }) => {
    const full = new Array(parseInt(amount)).fill(0)
    const empty = new Array(5 - amount).fill(0)

    return <div className='stars'>
        {
            full.map((star, i) => <img src={require('../../assets/star_full.svg').default} alt='' key={i}/>)
        }
        {
            empty.map((star, i) => <img src={require('../../assets/star_empty.svg').default} alt='' key={i}/>)
        }
    </div>
}