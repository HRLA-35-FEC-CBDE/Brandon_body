import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    console.log(this.state.width)
    if (this.state.width >= 992) {
      return (
        <div>
          <div id="nav-bar"></div>
          <div id="page-content">
            <div className="flex-container product-header-elements-wrapper">
              <nav data-is="breadcrumbs" aria-label="Breadcrumb">
                <ul className="breadcrumb">
                  <li><a href="#">{'Snowboarding'}</a></li>
                  <li><a href="#">{'Snowboards'}</a></li>
                  <li><a href="#">{'All-Mountain Snowboards'}</a></li>
                </ul>
              </nav>
            </div>
            <div className="flex-container apparel-media-wrapper">
              <div className="row">
                <div className="cloumn mediaWrapper">
                  <img src="https://www.rei.com/media/153dbcc9-f374-4665-8af5-6a4d84da9983?size=784x588"></img>
                </div>
                <div className="column-infoWrapper-full-screen">
                  <div id="product-brand">{'Arbor'}</div>
                  <div>
                    <h1 id="product-information-full-screen">{'All-Mountain Snowboards - mens-2019/2020'}</h1>
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
                    <div className="stars-full-screen" id="itemNumber-full-screen">{'Number'}
                    </div>
                  </div>
                  <div class="product-price-wrapper">{'$319.95'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }


    if (this.state.width <= 991) {
      return (
        <div>
          <div id="nav-bar"></div>
          <div id="page-content">
            <div className="flex-container product-header-elements-wrapper">
              <nav data-is="breadcrumbs" aria-label="Breadcrumb">
                <ul className="breadcrumb">
                  <li><a href="#">{'Snowboarding'}</a></li>
                  <li><a href="#">{'Snowboards'}</a></li>
                  <li><a href="#">{'All-Mountain Snowboards - mens-2019/2020'}</a></li>
                </ul>
              </nav>
              <div id="product-brand">{'Arbor'}</div>
            </div>
            <div className="flex-container apparel-media-wrapper">
              <div className="row">
                <div className="titleWrapper">
                  <div>
                    <h1 id="product-information">{'Arbor Foundation Snowboard'}</h1>
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
                    <div className="stars" id="itemNumber">{'someItemNumber'}
                    </div>
                  </div>
                </div>
                <div className="mediaWrapper">
                  <div class="imageCarousel">
                    <div>
                      <img src="https://www.rei.com/media/153dbcc9-f374-4665-8af5-6a4d84da9983?size=784x588"></img>
                    </div>
                    <div className="dot-carousel">
                      <div className="dot-thumb"></div>
                      <div className="dot-thumb"></div>
                      <div className="dot-thumb"></div>
                      <div className="dot-thumb"></div>
                      <div className="dot-thumb"></div>
                      <div className="dot-thumb"></div>
                    </div>
                  </div>
                  <div className="image-info-wrapper">
                    <span className="image-count-wrapper">
                      "Image "
                      <span>{'5'}</span>
                      " of "
                      <span>{'6'}</span>
                    </span>
                  </div>
                </div>
                <div className="column infoWrapper">
                  <div class="product-price-wrapper">{'$319.95'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
export default App;