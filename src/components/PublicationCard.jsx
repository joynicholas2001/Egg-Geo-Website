export default function PublicationCard({ title, description, image, url, type }) {
  const isExternal = url?.startsWith('http');

  return (
    <article className="card publication-card h-100 shadow-sm border-0">
      {image && (
        <img src={image} alt="" className="card-img-top publication-card-img" loading="lazy" />
      )}
      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary align-self-start mb-2 text-uppercase">
          {type || 'Publication'}
        </span>
        <h3 className="card-title h6 fw-bold">{title}</h3>
        {description && <p className="card-text text-muted small flex-grow-1">{description}</p>}
        {url && (
          <a
            href={url}
            className="btn btn-outline-primary btn-sm mt-auto align-self-start"
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {type === 'pdf' ? 'Download PDF' : 'View'}
          </a>
        )}
      </div>
    </article>
  );
}
