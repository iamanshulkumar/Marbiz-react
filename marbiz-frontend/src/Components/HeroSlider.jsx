import React from "react";
import CelebCard from "./CelebCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSlider = (props) => {
  const { list } = props;
  

  // Determine the number of cards to display based on the device width
  const getNumVisibleCards = () => {
    if (window.innerWidth <= 768) {
      // For mobile devices, display 1 card at a time
      return 1;
    } else {
      // For desktop, display 6 cards at a time
      return 6;
    }
  };

  return (
    <div className="container">
      
      <Carousel style={{ padding: "20px 20px", }}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        // centerSlidePercentage={20}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}

        swipeable={true}
        emulateTouch={true}
        interval={5000}
        autoPlay={false}
        stopOnHover={true}
        dynamicHeight={false}
        renderThumbs={() => { }} // Hide the default thumbnail navigation
        selectedItem={0} // Set the initially selected item
        axis="horizontal" // Set the scroll direction
        useKeyboardArrows={true}
        transitionTime={500}
        swipeScrollTolerance={1}
        width="100%"

        centerSlidePercentage={100 / getNumVisibleCards()} // Adjust the percentage based on the number of cards
        itemsToShow={getNumVisibleCards()} // Specify the number of visible cards
      >
        {list.map((item) => (
          <CelebCard
            key={item.id}
            fullName={item.fullName}
            image={item.coverImage}
            category={item.category}
            regName={item.regName}
          />
        ))}
      </Carousel>


    </div>
  );
};

export default HeroSlider;
