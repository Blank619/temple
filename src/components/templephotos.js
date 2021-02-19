import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";
import DSC_5033 from './DSC_5033.JPG'
import DSC_5034 from './DSC_5034.JPG'
import DSC_5036 from './DSC_5036.JPG'
import DSC_5038 from './DSC_5038.JPG'
import DSC_5042 from './DSC_5042.JPG'
import DSC_5045 from './DSC_5045.JPG'
import DSC_5047 from './DSC_5047.JPG'
import DSC_5048 from './DSC_5048.JPG'
import DSC_5053 from './DSC_5053.JPG'



class TemplePhotos extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
     DSC_5033,
     DSC_5034,
     DSC_5036,
     DSC_5042,
     DSC_5045,
     DSC_5047,
     DSC_5048,
     DSC_5053,
     DSC_5038
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
        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={()=>
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

export default TemplePhotos;