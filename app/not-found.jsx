import Button from '../components/Button';

export const metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container not-found-container">
        <div className="not-found-card glass-panel">
          <div className="crown-icon">👑</div>
          <span className="badge badge-gold">404 Error</span>
          <h1 className="not-found-title">Lost in the Cosmic Void</h1>
          <p className="not-found-desc">
            The page you are looking for does not exist in the CK Kingdom. Return to the throne room to explore verified project information.
          </p>
          <div className="not-found-actions">
            <Button href="/" variant="primary" size="lg">
              <span>Return To Home</span>
              <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
