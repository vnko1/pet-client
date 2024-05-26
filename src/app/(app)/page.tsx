import styles from "./app.module.scss";

export default function Home() {
  return (
    <main>
      <section className={styles["hero"]}>
        <div className="container">
          <h1 className={styles["title"]}>Take good care of your small pets</h1>
        </div>
      </section>
    </main>
  );
}
