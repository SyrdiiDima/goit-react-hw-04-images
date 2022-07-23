import { Oval } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <div className={css.Loader}>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="blue"
        secondaryColor="yellow"
      />
    </div>
  );
};

export default Loader;