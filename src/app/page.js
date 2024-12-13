"use client"
import Image from "next/image";

// Card component for image sections
const ImageCard = ({ backgroundImage, title }) => (
  <div 
    className="w-64 h-80 relative rounded-xl bg-cover bg-center flex justify-center items-end p-4 hover:scale-105 transition-all duration-300 cursor-pointer"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div className="flex justify-center items-center font-playfair text-2xl font-semibold z-10">
      {title}
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-light-orange/80 h-full w-full flex rounded-xl" />
  </div>
);


// Promo section component
const PromoSection = () => (
  <div className="relative w-64 min-h-[658px] px-4 rounded-xl bg-[url('/5off.jpg')] bg-cover bg-center flex flex-col justify-center items-center gap-4">
    <div className="absolute inset-0 bg-light-orange/50 h-full w-full flex rounded-xl z-0" />
    <div className="gap-4 flex flex-col justify-center items-center z-[1]">
      <h2 className="text-5xl font-light font-playfair">Welcome</h2>
      <div className="text-md font-medium text-left pl-4">
        APPLY PROMO CODE FOR YOUR FIRST PURCHASE
      </div>
      <p className="text-8xl font-playfair">5%</p>
    </div>
    <div className="space-y-2 mt-2 z-[1]">
      <p className="text-2xl font-medium">PROMO CODE:</p>
      <p className="text-3xl font-playfair">SUN01</p>
      <p className="text-sm mt-4">www.sunflower.com</p>
    </div>
  </div>
);

export default function Home() {
  const imageCards = [
    { backgroundImage: '/new-trends.jpg', title: 'New Trends' },
    { backgroundImage: '/top.jpeg', title: 'Top' },

    { backgroundImage: '/ready.jpg', title: 'Ready Stocks' },

    { backgroundImage: '/new-arrivals.jpg', title: 'New Arrivals' },
    { backgroundImage: '/dress.jpg', title: 'Dress' },

    { backgroundImage: '/more.jpg', title: 'More' }
  ];

  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-row gap-4 justify-center items-center">
          <PromoSection />
          
          <div className="grid grid-cols-3 gap-4">
            {imageCards.map((card, index) => (
              <ImageCard 
                key={index}
                backgroundImage={card.backgroundImage}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
