import data from '../data/data.js'
import './top-nav.css'
const Topnav = () =>{
    return(
        <div className="topnav">
            <div>
                <span>{data.length} Product</span>
            </div>
            <div>
                <span>Order </span>
                <select>
                    <option>Latest</option>
                    <option>Lowest</option>
                    <option>Highest</option>
                </select>
            </div>
            <div>
                <span>Filter </span>
                <select>
                    <option>ALL</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
        </div>
    )
} 

export default Topnav;