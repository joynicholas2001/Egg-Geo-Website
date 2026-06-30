import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, image, link, actionLabel = 'Learn more' }) {
  return (
    <article className="card service-card h-100 shadow-sm border-0">
      {image && (
        <div className="service-card-img-wrap">
          <img src={image} alt="" className="card-img-top service-card-img" loading="lazy" />
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5 fw-bold">{title}</h3>
        {description && <p className="card-text text-muted flex-grow-1">{description}</p>}
        {link && (
          <Link to={link} className="btn btn-outline-primary btn-sm mt-auto align-self-start">
            {actionLabel}
          </Link>
        )}
      </div>
    </article>
  );
}
