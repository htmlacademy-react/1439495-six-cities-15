import './loading-spinner.css';

function LoadingSpinner(): JSX.Element {
  return (
    <div className='loader-wrp' data-testid='loading-spinner'>
      <span className="loader"></span>
    </div>
  );
}

export default LoadingSpinner;
