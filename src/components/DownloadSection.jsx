import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DownloadSection({ resources = [] }) {
  if (!resources.length) return null;

  return (
    <section className="py-16 bg-light" aria-labelledby="downloads-heading">
      <div className="container mx-auto px-4 md:px-6">
        <h2 id="downloads-heading" className="text-2xl md:text-3xl font-bold text-navy mb-8">Downloads & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.url}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              href={resource.url}
              className="group flex items-center p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mr-4 group-hover:bg-primary transition-colors duration-300">
                <FileText className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <div className="flex-grow min-w-0">
                <strong className="block text-navy font-bold text-base truncate group-hover:text-primary transition-colors duration-300">
                  {resource.title}
                </strong>
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  {resource.type || 'Document'}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
