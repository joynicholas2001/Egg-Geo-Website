import { motion } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import { usePageMeta } from '../hooks/usePageMeta';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

// ── Activity Books data ──────────────────────────────────────────────────────
const books = [
  {
    id: 'new-childrens-book',
    title: 'Our Hidden Powers',
    subtitle: "New Children's Book",
    cover: 'https://egggeo.com/wp-content/uploads/2023/05/image002-1-1024x589.png',
    link: 'https://news.cision.com/baseload-capital-sweden-ab/r/new-children-s-book---our-hidden-powers--empowers-kids-to-explore-renewable-energy,c3744631',
  },
  {
    id: 'young-kids-story',
    title: 'The Happy House',
    subtitle: 'Young Kids Story Book',
    cover: 'https://egggeo.com/wp-content/uploads/2023/01/Young-Kids-Story-BookTHH01BSmallAFDjpg_Page1-791x1024.jpg',
    link: 'https://egggeo.com/young-kids-story/',
  },
  {
    id: 'middle-school-activities',
    title: 'Middle School Activities',
    subtitle: 'Activity Workbook',
    cover: 'https://egggeo.com/wp-content/uploads/2023/01/Middle-School-Activities-20150430jpg_Page1-rotated.jpg',
    link: 'https://egggeo.com/middle-school-activities/',
  },
  {
    id: 'kids-activities',
    title: 'The Happy House',
    subtitle: 'Kids Colouring Book',
    cover: 'https://egggeo.com/wp-content/uploads/2023/01/Kids-Activities-040615_THH_ColoringBookjpg_Page1-791x1024.jpg',
    link: 'https://egggeo.com/kids-activities/',
  },
  {
    id: 'middle-school-book-2',
    title: 'Middle School Book 2',
    subtitle: 'Advanced Activity Book',
    cover: 'https://egggeo.com/wp-content/uploads/2023/01/Middle-School-Book-All-20150420jpg_Page1.jpg',
    link: 'https://egggeo.com/middle-school-book-2/',
  },
];

export default function ActivityBooksPage() {
  usePageMeta({
    title: 'Activity Books – Egg Geo',
    description:
      "Explore Egg Geo's educational activity books for kids and middle schoolers — featuring The Happy House story, colouring books, and geothermal science workbooks.",
  });

  return (
    <>
      <PageBanner
        title="Activity Books"
        subtitle="Defining the future of thermal energy networks"
        image="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 pt-4"
          >
            <h2 className="text-2xl font-bold text-navy mb-10 text-center">
              Featured Books
            </h2>

            {/* Books grid — same pattern as Publications page */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {books.map((book, index) => (
                <a
                  key={book.id}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
                >
                  {/* Cover — aspect-[3/4] with object-contain, identical to Publications */}
                  <div className="aspect-[3/4] w-full bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover overlay — identical to Publications */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/95 via-navy/80 to-transparent pt-12 pb-6 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end h-full">
                    <p className="text-white text-lg font-bold text-center mb-1">
                      {book.title}
                    </p>
                    <p className="text-white/70 text-sm text-center mb-3">
                      {book.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
