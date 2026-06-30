import PageBanner from '../components/PageBanner';
import { usePageMeta } from '../hooks/usePageMeta';
import { filterParagraphs } from '../utils/contentFilter';
import siteMeta from '../data/site-meta.json';
import contact from '../data/contact.json';

export default function CareersPage() {
  const careers = siteMeta.careers;
  const content = filterParagraphs(careers?.content || []);

  usePageMeta({
    title: careers?.title || 'Careers',
    description: content[0],
  });

  return (
    <>
      <PageBanner
        title={careers?.title || 'Careers'}
        subtitle="Join us at the Thermal Network Edge"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {content.map((p) => (
              <p key={p.slice(0, 50)} className="text-gray-600 mb-6 text-lg md:text-xl leading-relaxed">{p}</p>
            ))}
            <a 
              href={`mailto:${contact.email}`} 
              className="inline-block bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 mt-6 shadow-lg shadow-primary/30"
            >
              Apply at {contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
