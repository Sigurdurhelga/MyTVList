import React from 'react';

const Pick = ({Title, ImgLink}) => {
  var divImage = {
    backgroundImage : 'url(' + ImgLink + ')',
    backgroundSize : 'contain',
    backgroundRepeat : 'no-repeat',
    backgroundPosition : 'center',
    width: 300,
    height: 300
  };
  console.log(this);
  return (
    <div className="pick" style={divImage}>
      <div className="pick-title">
        {Title}
      </div>
    </div>
  )
}

export default Pick;