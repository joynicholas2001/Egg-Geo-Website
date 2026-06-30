export default function ProjectCard({ title, description, image }) {
  return (
    <article className="card project-card h-100 shadow-sm border-0 overflow-hidden">
      {image && (
        <div className="project-card-img-wrap">
          <img src={image} alt={title} className="card-img-top project-card-img" loading="lazy" />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title h6 fw-bold">{title}</h3>
        {description && <p className="card-text text-muted small mb-0">{description}</p>}
      </div>
    </article>
  );
}
