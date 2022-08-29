const filmDetailsControlsBtnTemplate = (state, type) => {

  type = type && type === 'alreadyWatched' ? 'watched' : type;

  const controlTypes = {
    'watchlist': 'Add to watchlist',
    'watched': 'Already watched',
    'favorite': 'Add to favorites'
  };

  const btnMainClass = 'film-details__control-button';
  const controlStateClass = state ? `${btnMainClass}--active` : '';

  return (
    `<button type='button' class='${btnMainClass} ${controlStateClass} ${btnMainClass}--${type}' id='${type}' name='${type}'>${controlTypes[type]}</button>`
  );
};

export { filmDetailsControlsBtnTemplate };
