import {Puff} from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <Puff type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderComponent;
