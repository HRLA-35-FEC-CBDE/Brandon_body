import React from 'react';
import Thumb from './thumbList.jsx';
import ThumbImage from './thumbImageList.jsx';
import axios from 'axios';
import images from './images.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        category:'',
        subCategory:'',
        categoryType:'',
        comany:'',
        title:'',
        itemNumber:''
      },
      decrementDisabled: true,
      width: window.innerWidth,
      quantity: 0,
      thumbArray: [],
      selectedIdx: 0,
    }
    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }
  getData() {
    for(var i=0; i<4; i++){
      var imageId = Math.floor(Math.random()*(20-1)*1);
      this.state.thumbArray.push(images[imageId])
    }
    var id = Math.floor(Math.random()*(100-1)*1);
    axios.get(`/item/${id}`)
    .then(result=>{
      this.setState({
        product: result.data[0]
      });
    })
    .catch(err=>{
      console.log('error')
    })
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  updateImage(imageUrl, idx) {
    this.setState({
      selectedIdx: idx
    })
  }
  increaseQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
      decrementDisabled: false,
    })
  }
  decreaseQuantity() {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState({
        quantity: quantity - 1,
        decrementDisabled: quantity === 1,
      })
    } else {
      this.setState({
        decrementDisabled: false,
      })
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.getData();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { decrementDisabled, width, product } = this.state;
    if (width >= 992) {
      return (
        <div>
          <div id="nav-bar"></div>
          <div id="page-content">
            <div className="flex-container product-header-elements-wrapper">
              <nav data-is="breadcrumbs" aria-label="Breadcrumb">
                <ul className="breadcrumb">
                  <li><a href="#">{product.category}</a></li>
                  <li><a href="#">{product.subCategory}</a></li>
                  <li><a href="#">{product.categoryType}</a></li>
                </ul>
              </nav>
            </div>
            <div className="flex-container apparel-media-wrapper">
              <div className="row">
                <div className="cloumn mediaWrapper">
                  <img src={this.state.thumbArray[this.state.selectedIdx]}></img>
                  <div>
                    <ThumbImage updateImage={this.updateImage} images={this.state.thumbArray} selectedIdx={this.state.selectedIdx} />
                  </div>
                </div>
                <div className="column-infoWrapper-full-screen">
                  <div id="product-brand">{product.company}</div>
                  <div>
                    <h1 id="product-information-full-screen">{product.title}</h1>
                  </div>
                  <div className="starsItem-full-screen">
                    <div id="starSide-full-screen">
                      <div className="ratingBackground-full-screen">
                        <span className="ratingPlaceholder-full-screen"></span>
                        <span className="ratingPlaceholder-full-screen"></span>
                        <span className="ratingPlaceholder-full-screen"></span>
                        <span className="ratingPlaceholder-full-screen"></span>
                        <span className="ratingPlaceholder-full-screen"></span>
                      </div>
                      <div className="ratings-full-screen">
                        <span className="ratingIcon-full-screen"></span>
                        <span className="ratingIcon-full-screen"></span>
                        <span className="ratingIcon-full-screen"></span>
                        <span className="ratingIcon-full-screen"></span>
                        <span className="ratingIcon-full-screen"></span>
                      </div>
                      <div className="numbers-full-screen">
                        <div id="rating-full-screen">{'5 '}</div>
                        <div id="numberReviews-full-screen">{' (1)'}</div>
                      </div>
                    </div>
                    <div className="stars-full-screen" id="itemNumber-full-screen">Item #{product.itemNumber}
                    </div>
                  </div>
                  <div className="product-price-wrapper">${product.price}.00</div>
                  <div className="message-wrapper">
                    <div className="product-shipping-message">
                      <button className="product-shipping-message-button">
                        <span className="icon-shipping"><i className="fas fa-truck"></i></span>
                        {"This item ships for FREE!"}
                      </button>
                    </div>
                    <div className="dividend-message">
                      <span>REI Members get back an estimated $32.00 on this item as part of their<a>{" member dividend."}</a></span>
                    </div>
                  </div>
                  <label className="size">{'Size'}</label>
                  <ul className="size-selection" >
                    <li>
                      <button className="size-title">Small</button>
                    </li>
                    <li>
                      <button className="size-title">Medium</button>
                    </li>
                    <li>
                      <button className="size-title">Large</button>
                    </li>
                  </ul>
                  <label className="product-quantity-select">
                    {'Quantity'}
                  </label>
                  <div className="quantity-button-wrapper">
                    <button className="quantity-btn icon icon-collapse" onClick={this.decreaseQuantity} disabled={decrementDisabled}>
                      <span className="sr-only">Decrement quantity</span>
                    </button>
                    <input value={this.state.quantity}></input>
                    <button className="quantity-btn icon icon-expand" onClick={this.increaseQuantity}>
                      <span className="sr-only">Increment quantity</span>
                    </button>
                  </div>
                  <div className="restriction-alert-warning">
                    <div className="restriction-mesg">
                      <span className="icon icon-warning"></span>
                      <span className="alert-text">
                        <span className="sr-only">Warning:</span>
                        {" Shipping restrictions apply "}
                        <button id="showRestrictionMessage" className="icon icon-info restriction-info-icon">
                          <i className="fas fa-info-circle"></i>
                          <span className="sr-only">opens dialog to show more info on restrictions</span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="shipping-options">
                    <section className="product-shipping-options-container">
                      <form>
                        <div className="radio">
                          <input type="radio" checked="checked" ></input>
                          <label className="h6">{"Ship to address"}</label>
                        </div>
                        <div className="radio pick-up-radio">
                          <input type="radio" disabled="disabled"></input>
                          <label className="h6">
                            <div>Pick up in store - Free</div>
                            <div className="shipping-no-in-store">This item is not available for in-store pickup</div>
                          </label>
                        </div>
                        <div className="primary-button">
                          <button className="product-buy-button">
                            <span className="product-cart-primary-text">Add to cart</span>
                            <span id="sub-total"> -$ {product.price}.00</span>
                          </button>
                        </div>
                        <div className="buybox-buttons">
                          <button className="wishlist-button">Add to wish list</button>
                          <button className="registry-button">Add to registry</button>
                        </div>
                      </form>
                    </section>
                  </div>
                  <div className="return-popover-wrapper">
                    <a class="return-popover">REI return policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }


    if (width <= 991) {
      return (
        <div>
          <div id="nav-bar"></div>
          <div id="page-content">
            <div className="flex-container product-header-elements-wrapper">
              <nav data-is="breadcrumbs" aria-label="Breadcrumb">
                <ul className="breadcrumb">
                  <li><a href="#">{product.category}</a></li>
                  <li><a href="#">{product.subCategory}</a></li>
                  <li><a href="#">{product.categoryType}</a></li>
                </ul>
              </nav>
              <div id="product-brand">{product.company}</div>
            </div>
            <div className="flex-container apparel-media-wrapper">
              <div className="row">
                <div className="titleWrapper">
                  <div>
                    <h1 id="product-information">{product.title}</h1>
                  </div>
                  <div className="starsItem">
                    <div id="starSide">
                      <div className="ratingBackground">
                        <span className="ratingPlaceholder"></span>
                        <span className="ratingPlaceholder"></span>
                        <span className="ratingPlaceholder"></span>
                        <span className="ratingPlaceholder"></span>
                        <span className="ratingPlaceholder"></span>
                      </div>
                      <div className="ratings">
                        <span className="ratingIcon"></span>
                        <span className="ratingIcon"></span>
                        <span className="ratingIcon"></span>
                        <span className="ratingIcon"></span>
                        <span className="ratingIcon"></span>
                      </div>
                      <div className="numbers">
                        <div id="rating">{'5 '}</div>
                        <div id="numberReviews">{' (1)'}</div>
                      </div>
                    </div>
                    <div className="stars" id="itemNumber">Item #{product.itemNumber}
                    </div>
                  </div>
                </div>
                <div className="mediaWrapper">
                  <div class="imageCarousel">
                    <div>
                      <div className="zoom-cursor" ></div>
                      <img src={this.state.thumbArray[this.state.selectedIdx]}></img>
                    </div>
                    <Thumb updateImage={this.updateImage} images={this.state.thumbArray} selectedIdx={this.state.selectedIdx} />
                  </div>
                  <div className="image-info-wrapper">
                    <span className="image-count-wrapper">
                      {" Image "}
                      <span>{this.state.selectedIdx + 1}</span>
                      {" of "}
                      <span>{this.state.thumbArray.length}</span>
                    </span>
                  </div>
                </div>
                <div className="column infoWrapper">
                  <div className="product-price-wrapper">${product.price}.00</div>
                  <div className="buy-grid">
                    <div className="user-selection">
                      <label className="size">{'Size'}</label>
                      <ul className="size-selection" >
                        <li>
                          <button className="size-title">Small</button>
                        </li>
                        <li>
                          <button className="size-title">Medium</button>
                        </li>
                        <li>
                          <button className="size-title">Large</button>
                        </li>
                      </ul>
                      <label className="product-quantity-select">
                        {'Quantity'}
                      </label>
                      <div className="quantity-button-wrapper">
                        <button className="quantity-btn icon icon-collapse" onClick={this.decreaseQuantity} disabled={decrementDisabled}>
                          <span className="sr-only">Decrement quantity</span>
                        </button>
                        <input value={this.state.quantity}></input>
                        <button className="quantity-btn icon icon-expand" onClick={this.increaseQuantity}>
                          <span className="sr-only">Increment quantity</span>
                        </button>
                      </div>
                      <div className="restriction-alert-warning">
                        <div className="restriction-mesg">
                          <span className="icon icon-warning"></span>
                          <span className="alert-text">
                            <span className="sr-only">Warning:</span>
                            {" Shipping restrictions apply "}
                            <button id="showRestrictionMessage" className="icon icon-info restriction-info-icon">
                              <i className="fas fa-info-circle"></i>
                              <span className="sr-only">opens dialog to show more info on restrictions</span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="shipping-options">
                        <section className="product-shipping-options-container">
                          <form>
                            <div className="radio">
                              <input type="radio" checked="checked" ></input>
                              <label className="h6">{"Ship to address"}</label>
                            </div>
                            <div className="radio pick-up-radio">
                              <input type="radio" disabled="disabled"></input>
                              <label className="h6">
                                <div>Pick up in store - Free</div>
                                <div className="shipping-no-in-store">This item is not available for in-store pickup</div>
                              </label>
                            </div>
                            <div className="primary-button">
                              <button className="product-buy-button">
                                <span className="product-cart-primary-text">Add to cart</span>
                                <span id="sub-total"> -$ {product.price}.00</span>
                              </button>
                            </div>
                            <div className="buybox-buttons">
                              <button className="wishlist-button">Add to wish list</button>
                              <button className="registry-button">Add to registry</button>
                            </div>
                          </form>
                        </section>
                      </div>
                      <div className="return-popover-wrapper">
                        <a className="return-popover">REI return policy</a>
                      </div>
                      <div className="message-wrapper">
                        <div className="product-shipping-message">
                          <button className="product-shipping-message-button">
                            <span className="icon-shipping"><i class="fas fa-truck"></i></span>
                            {"This item ships for FREE!"}
                          </button>
                        </div>
                        <div className="dividend-message">
                          <span>REI Members get back an estimated $32.00 on this item as part of their<a>{" member dividend."}</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      )
    }
  }
}
export default App;