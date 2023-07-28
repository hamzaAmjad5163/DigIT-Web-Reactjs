import React from 'react';
import '../../styles/imageContainer.css';
import image1 from '../../assets/img/icons8-facebook-100 (1) 1.png';
import image2 from '../../assets/img/icons8-adobe-illustrator-100 2.png';
import image3 from '../../assets/img/icons8-video-camera-100 (1) 1.png';
import image4 from '../../assets/img/icons8-business-report-100 2.png';
import image5 from '../../assets/img/icons8-gmail-100 2.png';
import image6 from '../../assets/img/icons8-code-100 2.png';

const ImageContainer = ({ imageUrl, title, description }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={title} className="image" style={{width:'55%',height:'50%'}}/>
      <div className="image-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  return (
    <>
    <div className="gallery" style={{marginTop:'5%'}}>
      <ImageContainer
        imageUrl={image1}
        title="Social Media Marketing"
        description="Ignite your brand's presence with our social prowess. Targeted campaigns that spark engagement and fuel growth."
      />
      <ImageContainer
        imageUrl={image2}
        title="Graphical Illustrations"
        description="Ignite your presence online with our web wizardry. Captivating websites that elevate your brand and engage users."
      />
      <ImageContainer
        imageUrl={image3}
        title="Videography"
        description="Amplify your online reach with our SEO mastery. Tailored strategies that boost visibility and drive results."
      />
      
      
    </div>
    <div className="gallery1" style={{marginTop:'5%'}}>
    <ImageContainer
        imageUrl={image4}
        title="Data Analytics"
        description="Decode the power of data with our analytics expertise. Actionable insights that steer your business towards success."
      />
    
      <ImageContainer
        imageUrl={image5}
        title="Email Marketing"
        description="Unleash your digital potential with our software artisans. Innovative solutions that elevate your operations and empower growth."
      />
      <ImageContainer
        imageUrl={image6}
        title="SEO &Web Development"
        description="Empower your online presence with our web development expertise. We craft captivating websites that elevate your brand and engage users effectively."
      />
    </div>
     </>
  );
};

export default ImageGallery;