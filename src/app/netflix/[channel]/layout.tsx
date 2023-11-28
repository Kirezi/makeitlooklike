import NavBar from "components/NavBar/NavBar";
import styles from "./netflix.module.css";

export default function NetflixLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={styles.netflix}>
        <NavBar />
        {children}
      </section>
    </>
  );
}
