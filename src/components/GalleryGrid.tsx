// src/components/GalleryGrid.tsx
import galleryCaptions from "../data/galleryCaptions";

// Define the GalleryCaption type if not already imported
type GalleryCaption = {
  src: string;
  alt: string;
  caption: string;
};

const GalleryGrid = () => {
  // Ensure galleryCaptions is typed
  const captions: GalleryCaption[] = galleryCaptions;
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {captions.map(({ src, alt, caption }, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 text-center">
              <p className="text-white text-sm sm:text-base">{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryGrid;