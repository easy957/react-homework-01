import s from './Friend.module.css';

export default function Friend({ avatar, name, isOnline }) {
  let markerClasses = [s.marker];
  isOnline
    ? markerClasses.push(s.markerGreen)
    : markerClasses.push(s.markerRed);

  return (
    <li className={s.friend}>
      <span className={markerClasses.join(' ')}></span>
      <img
        className="avatar"
        src={avatar}
        alt="User avatar"
        style={{
          width: 48,
        }}
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}
