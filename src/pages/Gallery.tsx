// src/pages/Gallery.tsx

const images = [
  { id: 1, src: '/public/images/Wood Pellets.jpg', alt: 'Wood Pellets Production' },
  { id: 2, src: './public/images/Briquette.jpg', alt: 'Biomass Briquettes' },
  { id: 3, src: '/public/images/Rice Straw and Husk.jpg', alt: 'Rice Straw Collection' },
  { id: 4, src: '/public/images/Bamboo.jpg', alt: 'Sustainable Bamboo Farming' },
];

const videos = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/ScMzIvxBSi4', // example video
    title: 'Sustainable Biomass Energy Overview',
  },
];

const news = [
  {
    id: 1,
    title: 'ShuHaRi Renewables Launches New Biochar Product',
    date: '2025-04-15',
    link: '#',
  },
  {
    id: 2,
    title: 'Partnership with Green Energy Initiatives',
    date: '2025-03-20',
    link: '#',
  },
];

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-wide">Gallery & News</h1>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map(({ id, src, alt }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img src={src} alt={alt} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map(({ id, src, title }) => (
            <div key={id} className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-64"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Latest News</h2>
        <ul className="space-y-4">
          {news.map(({ id, title, date, link }) => (
            <li key={id} className="border-l-4 border-green-500 pl-4">
              <a
                href={link}
                className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors duration-300"
              >
                {title}
              </a>
              <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
