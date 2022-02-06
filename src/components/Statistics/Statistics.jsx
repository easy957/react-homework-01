import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, data }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {data.map(stat => (
          <li
            className={s.item}
            key={stat.id}
            style={{
              backgroundColor: `
              rgb(
                ${stat.percentage * 2 + 120},
                ${stat.percentage * 4},
                ${stat.percentage * 2 + 50}
                )`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
