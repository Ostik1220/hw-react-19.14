// import { Component } from "react";
import styled from "styled-components";

const ItemStyle = styled.li`
  list-style: none;
    margin-bottom: 20px;
    cursor: pointer;
`;

const ImageGalleryItem = ({ items, onImageClick }) => {
  return (
    <>
      {items.map(item => (
          <ItemStyle key={item.id}>
          <img
            src={item.webformatURL}
            alt={item.tags}
            className="gallery-image"
            onClick={() =>
              onImageClick(item.largeImageURL, item.tags)
            }
          />  
          </ItemStyle>
      ))}
    </>
  );
}

export default ImageGalleryItem;
// class ImageGalleryItem extends Component {

    
//   render() {
//     const { items, onImageClick } = this.props;

//     return (
//       <>
//         {items.map(item => (
//             <ItemStyle key={item.id}>
//             <img
//               src={item.webformatURL}
//               alt={item.tags}
//               className="gallery-image"
//               onClick={() =>
//                 onImageClick(item.largeImageURL, item.tags)
//               }
//             />
//             </ItemStyle>
//         ))}
//       </>
//     );
//   }
// }

// export default ImageGalleryItem;
