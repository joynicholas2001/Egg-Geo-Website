import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
export default function NewsSection() {
  const news = [
    {
      date: "Oct 15, 2026",
      category: "Research",
      title: "New Methodologies in Deep Aquifer Yield Testing",
      excerpt: "Our latest whitepaper explores innovative non-invasive techniques for assessing deep aquifer potential without compromising structural integrity.",
    },
    {
      date: "Sep 28, 2026",
      category: "Industry Update",
      title: "Regulatory Changes in Groundwater Monitoring",
      excerpt: "Understanding the new EPA guidelines and what they mean for municipal water resource planning over the next decade.",
    },
    {
      date: "Sep 12, 2026",
      category: "Company News",
      title: "Egg Geo Expands Operations to the Pacific Northwest",
      excerpt: "We are proud to announce our new regional office dedicated to addressing unique environmental challenges in the PNW.",
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">Latest <span className="text-primary">Insights</span></h2>
          <p className="text-gray-600">Stay updated with our newest research publications, industry news, and corporate announcements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col h-full group focus-within:ring-2 focus-within:ring-primary focus-within:outline-none"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>

              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-8 flex-grow">
                {item.excerpt}
              </p>

              <Link to="/news" className="flex items-center gap-2 text-primary font-bold hover:text-navy transition-colors mt-auto w-fit focus-visible:outline-none rounded">
                Read Article
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
