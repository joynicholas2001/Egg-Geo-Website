import { Link } from 'react-router-dom';
import contact from '../data/contact.json';
import navigation from '../data/navigation.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="egg-footer bg-white text-navy py-5 mt-auto border-t border-gray-200" role="contentinfo">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <img
              src="/images/wp-content_themes_egggeo_img_egg-geo-white.svg"
              alt="Egg Geo"
              height="48"
              className="mb-3 brightness-0 opacity-90"
            />
            <p className="text-navy">
              Defining the future of thermal energy networks and geothermal energy consulting.
            </p>
          </div>

          <div className="col-lg-4">
            <h2 className="h6 text-uppercase fw-bold mb-3">Quick Links</h2>
            <ul className="list-unstyled footer-links">
              {navigation.structure.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-navy hover:text-primary text-decoration-none">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h2 className="h6 text-uppercase fw-bold mb-3">Contact</h2>
            <address className="text-navy mb-2 not-italic" style={{ whiteSpace: 'pre-line' }}>
              {contact.address}
            </address>
            <p className="mb-1">
              <a href={`tel:${contact.phone.replace(/[^\d]/g, '')}`} className="text-navy hover:text-primary text-decoration-none">
                {contact.phone}
              </a>
            </p>
            <p className="mb-0">
              <a href={`mailto:${contact.email}`} className="text-navy hover:text-primary text-decoration-none">
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <hr className="border-gray-200 my-4" />
        <p className="text-center text-navy mb-0 small">
          &copy;{year} Egg Geo, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
