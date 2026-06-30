import PageBanner from '../components/PageBanner';
import ContactForm from '../components/ContactForm';
import { usePageMeta } from '../hooks/usePageMeta';
import contact from '../data/contact.json';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: 'Contact Egg Geo for thermal energy and geothermal consulting services',
  });

  return (
    <>
      <PageBanner title="Contact" subtitle="Get in touch with our team" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold mb-6 text-navy">Reach Us</h2>
              <address className="mb-6 not-italic">
                <p className="mb-2 font-bold text-navy">Address</p>
                <p className="text-gray-600 leading-relaxed">{contact.address}</p>
              </address>
              <div className="mb-6">
                <p className="font-bold text-navy mb-2">Phone</p>
                <a href={`tel:${contact.phone.replace(/[^\d]/g, '')}`} className="text-gray-600 hover:text-primary transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div className="mb-8">
                <p className="font-bold text-navy mb-2">Email</p>
                <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold mb-6 text-navy">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
