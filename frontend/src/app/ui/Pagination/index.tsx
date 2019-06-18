import classNames from 'classnames';
import calculate from './calculate';

const Pagination = ({ pagination: { pages, page }, pageSet }) =>
  pages > 1 && (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        onClick={page == 1 ? null : pageSet.bind(null, page - 1)}
        className="pagination-previous"
        title="This is the first page"
        // disabled={page == 1}
      >
        Назад
      </a>
      <a
        onClick={page == pages ? null : pageSet.bind(null, page + 1)}
        // disabled={page == pages}
        className="pagination-next">
        Вперед
      </a>
      <ul className="pagination-list">
        {calculate({ page, pages }).map((el, index) => (
          <li key={index}>
            <a
              className={classNames('pagination-link', {
                'is-current': el == page,
                'not-allowed': typeof el !== 'number',
              })}
              onClick={typeof el === 'number' ? pageSet.bind(null, el) : null}
              aria-label="Page 1"
              aria-current="page">
              {el}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

export default Pagination;
