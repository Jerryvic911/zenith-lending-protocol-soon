import React from 'react';

// Define the type for individual card data
interface Card {
  badge: string;
  title: string;
  description: string;
}

// Define the props type for the Cards component
interface CardsProps {
  cardData: Card[];
}

const Cards: React.FC<CardsProps> = ({ cardData }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Central Circle */}
      <div className="absolute w-40 h-40 bg-[#000329] rounded-full z-10"></div>
      
      {/* Card Grid */}
      <div className="grid grid-cols-2 gap-6 p-8 max-w-4xl">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`relative p-8 bg-[#1A1E3E] rounded-2xl shadow-lg transition-transform hover:scale-[1.02] ${index === 1 || index === 3 ? 'pl-12' : ''}`}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-sm font-medium text-[#FB23FF] bg-[#FB23FF33] rounded-full">
              {item.badge}
            </span>

            {/* Title */}
            <h2 className="mt-6 text-3xl font-semibold text-white">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example usage
const cardData: Card[] = [
  {
    badge: 'SECURITY',
    title: 'Robust Security',
    description:
      'Built on advanced blockchain technology which is Solana. Zenith offers top-tier security protocols to protect assets and personal information.',
  },
  {
    badge: 'INNOVATION',
    title: 'Cutting Edge',
    description:
      'Leverage cutting-edge technology to stay ahead in the crypto space.',
  },
  {
    badge: 'FLEXIBILITY',
    title: 'Smart Flexibility',
    description:
      'Our platforms offer unmatched flexibility for enthusiasts and traders.',
  },
  {
    badge: 'SUPPORT',
    title: '24/7 Support',
    description:
      'Our support team is available around the clock to assist you.',
  },
];

export default function Card() {
  return <Cards cardData={cardData} />;
}
