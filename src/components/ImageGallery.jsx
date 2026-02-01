import { useState, useEffect, useCallback } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import axios from "axios";
import Button from "./Button";
import Modal from "./Modal";
import styled from "styled-components";

const Gallery = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    gap: 20px;
`;

const ImageGallery = ({query})  => {
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [modalImage, setModalImgae] = useState("")
  const [modalTags, setModalTags] = useState("")


useEffect(() => {
    if (query) {
        setPage(1)
        setGifs([])
        fetchGifs(query, 1)
    } else {
        setGifs([])
    }
  }, [query])

  useEffect(() => {
    if (page !== 1 && query) {
      fetchGifs(query, page)
    }
  }, [page, query])

    const fetchGifs = useCallback((word, page) => {
    axios
      .get(
        `https://pixabay.com/api/?q=${word}&page=${page}&key=50843029-710c41440238bfac4a870a64c&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((response) => {
        setGifs(prev => ([...prev, ...response.data.hits]));
      })
      .catch(console.error);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prev => prev + 1)
  }, []);

  const openModal = useCallback((image, tags) => {
    setShowModal(true)
    setModalImgae(image)
    setModalTags(tags)
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false)
    setModalImgae("")
    setModalTags("")
  }, []);

  return (<>
<Gallery>
        <ImageGalleryItem
            items={gifs}
            onImageClick={openModal}
          />
        </Gallery>

                  {gifs.length > 10 && (
            <Button onClick={loadMore} />
          )}
        {showModal && (
          <Modal
            largeImageURL={modalImage}
            tags={modalTags}
            onClose={closeModal}
          />
        )}
      </>)

}

export default ImageGallery;


// class ImageGallery extends Component {
//   state = {
//     gifs: [],
//     page: 1,
//     showModal: false,
//     modalImage: "",
//     modalTags: "",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.query !== this.props.query) {
//       this.setState({ page: 1, gifs: [] });
//       this.fetchGifs(this.props.query, 1);
//     }

//     if (prevState.page !== this.state.page) {
//       this.fetchGifs(this.props.query, this.state.page);
//     }
//   }

//   fetchGifs = (word, page) => {
//     axios
//       .get(
//         `https://pixabay.com/api/?q=${word}&page=${page}&key=50843029-710c41440238bfac4a870a64c&image_type=photo&orientation=horizontal&per_page=12`
//       )
//       .then((response) => {
//         this.setState(prev => ({
//           gifs: [...prev.gifs, ...response.data.hits],
//         }));
//       })
//       .catch(console.error);
//   };

//   loadMore = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };

//   openModal = (image, tags) => {
//     this.setState({
//       showModal: true,
//       modalImage: image,
//       modalTags: tags,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//       modalImage: "",
//       modalTags: "",
//     });
//   };



//   render() {
//     return (
//       <>
//         <Gallery>
//           <ImageGalleryItem
//             items={this.state.gifs}
//             onImageClick={this.openModal}
//           />
//         </Gallery>

//                   {this.state.gifs.length > 0 && (
//             <Button onClick={this.loadMore} />
//           )}
//         {this.state.showModal && (
//           <Modal
//             largeImageURL={this.state.modalImage}
//             tags={this.state.modalTags}
//             onClose={this.closeModal}
//           />
//         )}
//       </>
//     );
//   }
// }

// export default ImageGallery;
