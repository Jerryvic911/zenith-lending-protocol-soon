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
      <div className="absolute hidden md:block w-40 h-40 bg-[#000329] rounded-full z-10"></div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-8 gap-8 max-w-4xl">
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`relative mb-8 md:mb-0 w-full max-w-[500px] h-[250px] p-6 bg-[#1A1E3E] rounded-2xl shadow-lg transition-transform hover:scale-[1.02] ${index % 2 === 0 ? 'md:mr-4' : ''}`}
          >
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-sm font-medium text-[blue] bg-blue-950 rounded-full">
              {item.badge}
            </span>

            {/* Title */}
            <h2 className="mt-6 text-xl md:text-2xl font-semibold text-white">
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
