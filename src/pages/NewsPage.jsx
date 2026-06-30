import PageBanner from '../components/PageBanner';
import NewsCard from '../components/NewsCard';
import { usePageMeta } from '../hooks/usePageMeta';
import { filterParagraphs } from '../utils/contentFilter';
import news from '../data/news.json';

export default function NewsPage({ slug }) {
  const article = news.find((n) => n.slug === slug);

  usePageMeta({
    title: article?.title || 'News',
    description: article?.description,
  });

  if (!article) {
    return (
      <div className="container py-5">
        <h1>Article Not Found</h1>
      </div>
    );
  }

  const content = filterParagraphs(article.content);
  const images = article.images?.filter((img) => !img.src?.includes('egg-geo-white')) || [];

  return (
    <>
      <PageBanner
        title={article.title}
        subtitle={article.description?.slice(0, 150)}
        image={slug === 'industry' ? 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=2000&q=80' : images[0]?.src}
        size="small"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {slug === 'industry' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {content.map((item, index) => {
                const lines = item.split('\n');
                const title = lines[0];
                const body = lines.slice(1).join('\n');
                const img = images[index];
                return (
                  <div className="flex h-full" key={`${index}-${title.slice(0, 20)}`}>
                    <NewsCard
                      title={title}
                      excerpt={body || item}
                      image={img?.src}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div>
                {content.map((p) => (
                  <p key={p.slice(0, 50)} className="text-gray-600 mb-6 text-lg leading-relaxed">{p}</p>
                ))}
                {images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {images.map((img) => (
                      <div key={img.src}>
                        <img src={img.src} alt={img.alt || ''} className="w-full h-auto rounded-lg shadow-md object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
