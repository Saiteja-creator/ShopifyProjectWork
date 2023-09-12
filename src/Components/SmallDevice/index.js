import {Component} from 'react'
import Basic from '../Basic/index'
import Shopify from '../Shopify/index'
import Advanced from '../Advanced/index'
import './index.css'

class SmallDevice extends Component {
  state = {Active: 'Basic'}

  getResult = () => {
    const {Active} = this.state
    console.log(Active, 'ACTIVEEEE')
    switch (Active) {
      case 'Basic':
        return <Basic />
      case 'Shopify':
        return <Shopify />
      case 'Advanced':
        return <Advanced />
      default:
        return null
    }
  }

  changeToBasic = () => {
    this.setState({Active: 'Basic'})
  }

  changeToShop = () => {
    this.setState({Active: 'Shopify'})
  }

  changeToAdvance = () => {
    this.setState({Active: 'Advanced'})
  }

  render() {
    return (
      <div>
        <div className="button-container-el">
          <button
            type="button"
            className="button-style"
            onClick={this.changeToBasic}
          >
            Basic
          </button>

          <button
            type="button"
            className="button-style"
            onClick={this.changeToShop}
          >
            Shopify
          </button>
          <button
            type="button"
            className="button-style"
            onClick={this.changeToAdvance}
          >
            Advanced
          </button>
        </div>
        <hr />
        <div>{this.getResult()}</div>
        <div className="button-container">
          <button type="button" className="try-button">
            Try for free
          </button>
        </div>
      </div>
    )
  }
}

export default SmallDevice
