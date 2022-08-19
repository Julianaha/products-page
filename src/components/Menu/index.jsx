import styles from "./Menu.module.css";

export function Menu({ name }) {
  return (
    <>
      <button className="btnMenu">{name}</button>
    </>
  );
}
