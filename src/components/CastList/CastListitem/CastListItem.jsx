import PropTypes from 'prop-types';
import css from './CastListItem.module.css';

const CastListItem = ({ profilePath, originalName, name }) => {
  
  const imageUrl = profilePath
    ? `https://image.tmdb.org/t/p/w300${profilePath}`
    : `https://dummyimage.com/150x225/2b1313/d4af37.png&text=No+Image`;

  return (
    <li className={css.castListItem}>
      <img
        className={css.castImage}
        src={imageUrl}
        alt={originalName || name}
      />
      <p className={css.castName}>{name}</p>
    </li>
  );
};

CastListItem.propTypes = {
  profilePath: PropTypes.string, 
  originalName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CastListItem;
