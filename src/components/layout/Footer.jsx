import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-white text-navy/80 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">

          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              <img
                src="/images/wp-content_themes_egggeo_img_egg-geo-white.svg"
                alt="Egg Geo Logo"
                className="h-12 brightness-0 opacity-90"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Defining the future of groundwater intelligence, thermal energy networks, and environmental solutions across the United States.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/egg-systems-inc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <FaLinkedin className="w-5 h-5 text-navy group-hover:text-white transition-colors" aria-hidden="true" />
              </a>
              <a href="https://x.com/EggGeothermal" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <FaXTwitter className="w-5 h-5 text-navy group-hover:text-white transition-colors" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/GeothermalHVAC" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <FaFacebook className="w-5 h-5 text-navy group-hover:text-white transition-colors" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/egggeothermal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <FaInstagram className="w-5 h-5 text-navy group-hover:text-white transition-colors" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-navy font-semibold text-lg mb-6">Technical Services</h4>
            <ul className="space-y-3">
              <li><Link to="/technical-services/groundwater-exploration" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Groundwater Exploration</Link></li>
              <li><Link to="/technical-services/aquifer-studies" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Aquifer Studies</Link></li>
              <li><Link to="/technical-services/environmental-monitoring" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Environmental Monitoring</Link></li>
              <li><Link to="/technical-services/geophysical-surveys" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Geophysical Surveys</Link></li>
              <li><Link to="/technical-services/gis-data-analysis" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">GIS & Data Analysis</Link></li>
            </ul>
          </div>

          {/* Education & Resources */}
          <div>
            <h4 className="text-navy font-semibold text-lg mb-6">Education & Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/education-services/research-publications" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Research Publications</Link></li>
              <li><Link to="/education-services/technical-training" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Technical Training</Link></li>
              <li><Link to="/education-services/workshops" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Workshops & Webinars</Link></li>
              <li><Link to="/company/news" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Industry News</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 -ml-1">Contact Experts</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-navy font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest groundwater research and industry insights.</p>
            <form className="mb-6 flex">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="bg-gray-50 border border-gray-200 rounded-l-md px-4 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-primary text-navy"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Subscribe
              </button>
            </form>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span>2860 Scherer Dr. N, Suite 640<br />St. Petersburg, FL 33716, USA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span>(727) 214-5863</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span>info@egggeo.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy/60">
          <p>&copy; {new Date().getFullYear()} Egg Geo, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
