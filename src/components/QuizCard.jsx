export default function QuizCard({ category, title, image }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <p className="text-muted small mb-2">{category}</p>
          <h6 className="card-title text-primary">{title}</h6>
        </div>
      </div>
    </div>
  );
}