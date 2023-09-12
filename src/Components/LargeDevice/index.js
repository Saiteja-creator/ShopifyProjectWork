import Basic from '../Basic/index'
import Shopify from '../Shopify/index'
import Advanced from '../Advanced/index'
import './index.css'

const LargeDevice = () => {
  console.log(LargeDevice)
  return (
    <div>
      <div className="pay-month-year">
        <div className="pay-container">
          <p className="pay-monthly">Pay monthly</p>
          <p className="pay-yearly">Pay Yearly (Save 25%)</p>
        </div>
      </div>
      <div className="top-container">
        <div className="top-card">
          <div>
            <div className="card-container">
              <h1 className="bold-text">Basic</h1>
              <p className="bold-text">FOR INDIVIDUALS & SMALL BUSINESSES</p>
              <p>
                Everything you need to create your store,ship products,
                <br />
                and process payment
              </p>
            </div>
            <div>
              <Basic />
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="try-button">
              Try for free
            </button>
          </div>
        </div>
        <div className="top-card">
          <div>
            <div className="card-container">
              <h1 className="bold-text">Shopify</h1>
              <p className="bold-text">FOR SMALL BUSINESSES</p>
              <p>
                Level up your business with professional reporting and <br />{' '}
                more staff accounts
              </p>
            </div>
            <Shopify />
          </div>
          <div className="button-container">
            <button type="button" className="try-button">
              Try for free
            </button>
          </div>
        </div>
        <div className="top-card">
          <div>
            <div className="card-container">
              <h1 className="bold-text">Advanced</h1>
              <p className="bold-text">FOR MEDIUM TO LARGE BUSINESSES</p>
              <p>
                Get the best Shopify with custom reporting and our <br /> lowest
                transaction fees
              </p>
            </div>
            <Advanced />
          </div>
          <div className="button-container">
            <button type="button" className="try-button">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargeDevice
