import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <h2 className="h4 mb-4">Page Not Found</h2>
      <p className="text-muted mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </div>
  );
}
