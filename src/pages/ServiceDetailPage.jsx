import PageBanner from '../components/PageBanner';
import DownloadSection from '../components/DownloadSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { getServiceBySlug, getContentList } from '../utils/contentFilter';
import services from '../data/services.json';
import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export default function ServiceDetailPage({ slug }) {
  const service = getServiceBySlug(services, slug);
  const { content, serviceList } = getContentList(service);

  usePageMeta({
    title: service?.title || slug,
    description: service?.description,
  });

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-navy mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg">The requested service page could not be found.</p>
      </div>
    );
  }

  const bannerImage = service.bannerImage || service.images?.[0]?.src;

  // Filter out the white logo that often gets scraped as an image
  const displayImages = service.images?.filter(img => !img.src.includes('egg-geo-white.svg')) || [];
  const youtubeVideos = service.youtubeVideos || [];

  return (
    <>
      <PageBanner title={service.title} subtitle={service.description?.slice(0, 120)} image={bannerImage} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg md:prose-xl max-w-none text-gray-600 mb-16"
          >
            {content.filter(p => !p.includes("Recent topics have included:")).map((paragraph) => (
              <p key={paragraph.slice(0, 50)} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Key Areas List */}
          {serviceList && serviceList.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 bg-light p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">
                {slug === 'seminars' ? 'Recent topics have included:' : 'Key Areas'}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceList.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-cyan mt-2.5 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Slide Presentations / Image Gallery */}
          {displayImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 pt-16 border-t border-gray-100"
            >
              <h3 className="text-2xl font-bold text-navy mb-10 text-center">Slide Presentations</h3>
              <div className={`grid grid-cols-1 gap-8 md:gap-12 ${
                displayImages.length === 1 ? 'max-w-2xl mx-auto' :
                displayImages.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
                'md:grid-cols-3'
              }`}>
                {displayImages.map((img, index) => {
                  const CardWrapper = img.link ? 'a' : 'div';
                  return (
                    <CardWrapper
                      key={img.src}
                      href={img.link}
                      target={img.link ? '_blank' : undefined}
                      rel={img.link ? 'noopener noreferrer' : undefined}
                      className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white ${img.link ? 'block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary' : ''}`}
                    >
                      <div className="aspect-[3/4] w-full bg-gray-50 flex items-center justify-center p-4">
                        <img
                          src={img.src}
                          alt={img.alt || `${service.title} media ${index + 1}`}
                          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/80 to-transparent pt-12 pb-6 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end h-full">
                        {img.alt && (
                          <p className="text-white text-lg font-bold text-center mb-2">{img.alt}</p>
                        )}
                        {img.link && (
                          <div className="flex items-center gap-2 text-primary font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mt-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span>View {img.alt}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </motion.div>
          )}

        </div>
      </section>

      {/* ── YouTube Videos Section ── */}
      {youtubeVideos.length > 0 && (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-5">
                <PlayCircle className="w-4 h-4" />
                Video Resources
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-navy leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
              >
                Watch &amp; Learn
              </h2>
              <p className="text-navy/60 text-lg mt-4 max-w-2xl mx-auto">
                Explore our curated video resources on thermal energy networks and geothermal technology.
              </p>
            </motion.div>

            {/* Video cards */}
            <div className={`grid gap-8 ${youtubeVideos.length === 1 ? 'max-w-3xl mx-auto' : 'md:grid-cols-2'}`}>
              {youtubeVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-500"
                >
                  {/* Responsive 16:9 YouTube embed */}
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-6 md:p-8">
                    <h3
                      className="text-navy text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-navy/60 text-sm leading-relaxed mb-4">{video.description}</p>
                    )}
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                    >
                      Watch on YouTube <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.pdfs?.length > 0 && <DownloadSection resources={service.pdfs.map((p) => ({ ...p, type: 'pdf' }))} />}
    </>
  );
}
