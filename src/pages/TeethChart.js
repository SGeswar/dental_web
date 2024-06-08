import React from 'react';
import './TeethChart.css';

// Import each image individually
import teeth1 from '../imgs/teethImgs/teeth1.png';
import teeth2 from '../imgs/teethImgs/teeth2.png';
import teeth3 from '../imgs/teethImgs/teeth3.png';
import teeth4 from '../imgs/teethImgs/teeth4.png';
import teeth5 from '../imgs/teethImgs/teeth5.png';
import teeth6 from '../imgs/teethImgs/teeth6.png';
import teeth7 from '../imgs/teethImgs/teeth7.png';
import teeth8 from '../imgs/teethImgs/teeth8.png';
import CloseIcon from '@mui/icons-material/Close';

const imageSources = [teeth1, teeth2, teeth3, teeth4, teeth5, teeth6, teeth7, teeth8];
const mirroredImages = [...imageSources, ...imageSources.reverse()];

const TeethImages = ({closePopup}) => {
  const handleClick = (index) => {
    alert(`Image ${index + 1} clicked!`);
  };

  return (
    
    <div style={{ width: '80vw !important'}}>
      <div onClick={closePopup} style={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end', paddingRight:40, paddingTop:20}}>
            <CloseIcon onClick={closePopup}/>
              </div>
          <div>
            {mirroredImages.map((src, index) => (
              <button key={index} onClick={() => handleClick(index)} className="image-button">
                <img src={src} alt={`Button ${index + 1}`} />
              </button>
            ))}
          </div>
          {/* <div >
            {mirroredImages.map((src, index) => (
              <button key={index + mirroredImages.length} onClick={() => handleClick(index + mirroredImages.length)} className="image-button">
              <img src={src} alt={`Button ${index + 1 + mirroredImages.length}`} />
            </button>
          ))}
          </div> */}
          <div>
  {mirroredImages.map((src, index) => (
    <button key={index + mirroredImages.length} onClick={() => handleClick(index + mirroredImages.length)} className="image-button">
      <img src={src} alt={`Button ${index + 1 + mirroredImages.length}`} style={{ transform: 'rotateX(180deg)' }} />
    </button>
  ))}
</div>
        </div>
   
  );
};

export default TeethImages;
// className="image-row"
// className="image-row"