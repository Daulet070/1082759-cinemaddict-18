import { formatStringToDateWithTime } from '../utils';

const filmDetailsCommentsTemplate = (filmInfoComments) => {

  const filmDetailsComment = ({ id, author, comment, date, emotion }, idx) => {

    const commentDay = formatStringToDateWithTime(date);

    return (
      `<li id='comment-${id}' class='film-details__comment'>
        <span class='film-details__comment-emoji'>
          <img src='./images/emoji/${emotion[idx]}.png' width='55' height='55' alt='emoji-smile'>
        </span>
        <div>
          <p class='film-details__comment-text'>${comment}</p>
          <p class='film-details__comment-info'>
            <span class='film-details__comment-author'>${author}</span>
            <span class='film-details__comment-day'>${commentDay}</span>
            <button class='film-details__comment-delete'>Delete</button>
          </p>
        </div>
      </li>`
    );
  };

  return filmInfoComments.map((comment, idx) => filmDetailsComment(comment, idx)).join('');
};

export { filmDetailsCommentsTemplate };
