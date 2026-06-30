import PageBanner from '../components/PageBanner';
import { usePageMeta } from '../hooks/usePageMeta';
import { filterParagraphs } from '../utils/contentFilter';
import siteMeta from '../data/site-meta.json';

export default function AboutPage() {
  const about = siteMeta.about;

  usePageMeta({
    title: about?.title || 'About Egg Geo',
    description: about?.content?.[0],
  });

  const content = filterParagraphs(about?.content || []);
  const displayImages = about?.images?.filter(img => !img.src.includes('logo') && !img.src.endsWith('.svg')) || [];

  return (
    <>
      <PageBanner
        title={about?.title || 'About Egg Geo'}
        subtitle="Global leader in geothermal exchange consulting"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            {content.map((p) => (
              <p key={p.slice(0, 50)} className="text-gray-600 mb-6 text-lg md:text-xl leading-relaxed">{p}</p>
            ))}
          </div>

          {displayImages.length > 0 && (
            <div className="mt-16 pt-16 border-t border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                {displayImages.map((img) => (
                  <div key={img.src} className="flex flex-col">
                    <figure className="text-center h-full flex flex-col justify-between">
                      <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
                        <img
                          src={img.src}
                          alt={img.alt || 'Egg Geo Document'}
                          className="w-full rounded-lg object-contain"
                          style={{ maxHeight: '600px' }}
                          loading="lazy"
                        />
                      </div>
                      {img.alt && (
                        <figcaption className="text-gray-500 text-sm mt-4 font-bold">
                          {img.alt}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
