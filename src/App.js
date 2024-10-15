import React, { useState } from 'react';
import AccountDetails from './components/AccountDetails';
import UploadDocuments from './components/UploadDocuments '
import EducationalDetails from './components/EducationalDetails';
import CreatePassword from './components/CreatePassword';

function App() {
  const [slide, setSlide] = useState(1);
  const totalSlides = 4;

  const handlePreviousClick = () => {
    if (slide > 1) {
      setSlide((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (slide < totalSlides) {
      setSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative p-8"> 

      <div className="absolute top-16 left-40 ml-8 flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTThzBWwRvwP2YNoMs2wbgP3vvta2pMPJoSw&s" 
          alt="Need a Job"
          className="w-24 h-20 mr-4"
        />
      </div>

      <div className="flex flex-row items-center w-full max-w-screen-xl p-10 bg-white rounded-lg shadow-lg"> 
        <div className="flex-1">
          <img
            aria-hidden="true"
            alt="working person"
            src="https://mygradepaper.com/wp-content/uploads/2022/03/Work-in-progress-rafiki.png"
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 p-6 relative">
          {
            slide === 1 ? (
              <AccountDetails />
            ) : slide === 2 ? (
              <EducationalDetails />
            ) : slide === 3 ? (
              <UploadDocuments />
            ) : slide === 4 ? (
              <CreatePassword />
            ) : null
          }
        </div>
      </div>

      <div className="flex justify-center items-center fixed bottom-16 right-8 transform -translate-x-1/2 w-full max-w-md">

        <button onClick={handlePreviousClick} className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded"> 
          ←
        </button>

        <div className="flex space-x-1">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className={`w-5 h-5 rounded-full border border-sky-400 ${slide === index + 1 ? 'bg-sky-600' : 'bg-secondary'}`}
            />
          ))}
        </div>

        <button onClick={handleNextClick} className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-3 rounded"> 
          →
        </button>
      </div>
    </div>
  );
}

export default App;