import { filmInfoDetailsTitles } from '../mock/raw-data';
import { formatMinutesToTime, formatStringToDate } from '../utils';

const filmDetailsTableRowsTemplate = (filmInfo) => {

  const infoDetailsRow = (title, desc) => (
    `<tr class='film-details__row'>
        <td class='film-details__term'>${title}</td>
        <td class='film-details__cell'>${desc}</td>
      </tr>`
  );

  const row = filmInfoDetailsTitles.map((title) => {

    let info = '';

    switch (title) {
      case 'Writers':
        info = filmInfo[title.toLowerCase()].join(', ');
        break;
      case 'Actors':
        info = filmInfo[title.toLowerCase()].join(', ');
        break;
      case 'Release Date':
        info = formatStringToDate(filmInfo.release.date);
        break;
      case 'Runtime':
        info = formatMinutesToTime(filmInfo.runtime);
        break;
      case 'Country':
        info = filmInfo.release.releaseCountry;
        break;
      case 'Genres':
        info = filmInfo.genre.map((genre) => `<span class='film-details__genre'>${genre}</span>`).join('');
        break;
      default:
        info = filmInfo[title.toLowerCase()];
        break;
    }

    return infoDetailsRow(title, info);
  }).join('');

  return row;
};

export { filmDetailsTableRowsTemplate };
