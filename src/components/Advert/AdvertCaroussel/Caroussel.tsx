import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-iconly';

function Carrousel({ advert }: any) {
  // console.log('caca');
  const [index, setIndex] = useState(0);
  const slides = advert.images;

  function handleNext() {
    if (index === 3) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrevious() {
    if (index === 0) {
      setIndex(3);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${slides[index].thumbnail})`,
        }}
      >
        <div>
          <ChevronLeft primaryColor="white" onClick={handlePrevious} />
        </div>

        <div>
          <ChevronRight primaryColor="white" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
