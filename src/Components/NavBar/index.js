import {useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import './index.css'

const NavBar = () => {
  const [isClose, setClose] = useState(false)
  const changeData = () => {
    setClose(!isClose)
  }
  console.log('sss')
  return (
    <div className="app-container">
      <nav className="large_device">
        <div className="image-container-large">
          <img
            src="https://res.cloudinary.com/dlphlzfzq/image/upload/v1694452996/Screenshot_2023-09-11_225256_p3mkkb.png"
            alt="imageNav"
            className="NavBarImage"
          />
          <h1 className="heading-large">shopify</h1>

          <div className="arrow-down">
            <p className="Nav-para">Solution</p>
            <IoIosArrowDown />
          </div>
          <div className="arrow-down">
            <p className="Nav-para">Pricing</p>
          </div>
          <div className="arrow-down">
            <p className="Nav-para">Resources</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="button-container">
          <button type="button" className="large-login-button">
            Log in
          </button>
          <button type="button" className="large-start-button">
            Start free trial
          </button>
        </div>
      </nav>
      <nav>
        <div className="small-device">
          <div className="image-container-large">
            <img
              src="https://res.cloudinary.com/dlphlzfzq/image/upload/v1694452996/Screenshot_2023-09-11_225256_p3mkkb.png"
              alt="imageNav"
              className="NavBarImage"
            />
            <h1>Shopify</h1>
          </div>
          <div className="button-small">
            <button type="button" className="start-button">
              Start free trial
            </button>
            {isClose ? (
              <button
                type="button"
                onClick={changeData}
                className="adjust-button"
              >
                <AiOutlineClose />
              </button>
            ) : (
              <button type="button" onClick={changeData}>
                <AiOutlineMenu />
              </button>
            )}
          </div>
        </div>
        <div className="displayList">
          {isClose && (
            <>
              <ul className="list">
                <li className="each-list">Solutions</li>
                <li className="each-list">Price</li>
                <li className="each-list">Resources</li>
                <li className="each-list">Login in</li>
              </ul>
            </>
          )}
        </div>
      </nav>
      <hr />
    </div>
  )
}

export default NavBar
