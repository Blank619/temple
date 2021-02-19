import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";
import t1 from './t1.jpg'
import t2 from './t2.jpg'
import t3 from './t3.jpg'
import t4 from './t4.jpg'
import t5 from './t5.jpg'

class Trusties extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      t1,
      t2,
      t3,
      t4,
      t5

    ]
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex}>
          <figure>
            <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
              this.setState({ photoIndex: privateKey, isOpen: true })
            }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}
export default Trusties;