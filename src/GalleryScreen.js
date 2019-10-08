import React from 'react'
import './GalleryScreen.scss'
import { CSSTransition } from 'react-transition-group'

const GALLERY_IMAGES = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
]

const AUTOPLAY_TIME = 3000

class GalleryScreen extends React.Component {
  state = {
    selectedGalleryIndex: 0
  }

  componentDidMount() {
    this.slideshowTimer = setInterval( this.gotoNextImage, AUTOPLAY_TIME )
  }

  componentWillUnmount() {
    clearTimeout( this.slideshowTimer )
  }

  gotoNextImage = () => {
    const { selectedGalleryIndex } = this.state
    if ( selectedGalleryIndex === GALLERY_IMAGES.length - 1 ) {
      this.setState({ selectedGalleryIndex: 0 })
    }
    else {
      this.setState({ selectedGalleryIndex: selectedGalleryIndex + 1 }) 
    }
  }

  onClickGalleryButton = e => {
    const { galleryIndex } = e.target.dataset
    this.setState({ selectedGalleryIndex: parseInt( galleryIndex, 10 ) })
    /* Restart the autoplay interval, so that the next slide shows exactly 3 seconds after this click */
    clearTimeout( this.slideshowTimer )
    this.slideshowTimer = setInterval( this.gotoNextImage, AUTOPLAY_TIME )
  }

  render() {
    const { selectedGalleryIndex } = this.state

    return (
      <div className='gallery-screen'>
        <h1>Robot Gallery</h1>
        <p>Here are some of our favorite robots.</p>

        <div className='gallery-container'>
          {GALLERY_IMAGES.map(( image, i ) => {
            const isSelected = i === selectedGalleryIndex
            /* TODO: Wrap each image tag in a CSSTransition component */
            return (
              <img
                key={`image-${ i }`}
                className={isSelected ? 'selected' : ''}
                src={image}
                alt=''
              />
            )
          })}
        </div>

         <div className='gallery-buttons'>
          {GALLERY_IMAGES.map(( _, i ) => {
            const isSelected = i === selectedGalleryIndex
            return (
              <div
                key={`button-${ i }`}
                onClick={this.onClickGalleryButton}
                data-gallery-index={i}
                className={isSelected ? 'selected' : ''}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default GalleryScreen