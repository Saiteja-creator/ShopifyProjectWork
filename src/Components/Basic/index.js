import {AiOutlineCheck} from 'react-icons/ai'
import './index.css'

const Basic = () => {
  console.log('Basic')
  return (
    <div>
      <div className="price-container">
        <h1>$1,994</h1>
        <p>INR/mo</p>
      </div>
      <p className="offer-para">Get your first 3 months for $20/mo</p>
      <div className="description-container">
        <p className="description-head">Whats included on Basic</p>
        <div className="description-with-symbol">
          <AiOutlineCheck className="symbol" />
          <p className="des-para">Basic report</p>
        </div>
        <div className="description-with-symbol">
          <AiOutlineCheck className="symbol" />
          <p className="des-para">Up to 1,000 inventory locations</p>
        </div>
        <div className="description-with-symbol">
          <AiOutlineCheck className="symbol" />
          <p className="des-para">2 staff accounts</p>
        </div>
      </div>
    </div>
  )
}

export default Basic
