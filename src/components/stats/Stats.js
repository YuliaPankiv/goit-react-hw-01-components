import css from './stats.module.css';


export default function Stats({ stats }) {
  return (
    <ul className={css.stats}>
      <li>
        <span className="label">Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
}

