import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setDetail(json.data.results[0]);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.detail}>
          <img
            src={
              detail.thumbnail
                ? `${detail.thumbnail.path}.${detail.thumbnail.extension}`
                : "default-image-url"
            }
            alt="character-thumbnail"
            className={styles.detail__img}
          />
          <div className={styles.detail__component}>
            <h2 className={styles.detail__title}>{detail.name}</h2>
            <div className={styles.detail__box}>
              <p>Comics</p>
              <ul className={styles.detail__box_list}>
                {detail.comics &&
                detail.comics.items &&
                detail.comics.items.length > 0 ? (
                  detail.comics.items.map((c, index) => (
                    <li key={index}>{c.name}</li>
                  ))
                ) : (
                  <p>No comics available</p>
                )}
              </ul>
            </div>
            <div className={styles.detail__box}>
              <p>Series</p>
              <ul className={styles.detail__box_list}>
                {detail.series &&
                detail.series.items &&
                detail.series.items.length > 0 ? (
                  detail.series.items.map((s, index) => (
                    <li key={index}>{s.name}</li>
                  ))
                ) : (
                  <p>No series available</p>
                )}
              </ul>
            </div>
            <div className={styles.detail__box}>
              <p>Stories</p>
              <ul className={styles.detail__box_list}>
                {detail.stories &&
                detail.stories.items &&
                detail.stories.items.length > 0 ? (
                  detail.stories.items.map((st, index) => (
                    <li key={index}>{st.name}</li>
                  ))
                ) : (
                  <p>No stories available</p>
                )}
              </ul>
            </div>
            <div className={styles.detail__box}>
              <p>Events</p>
              <ul className={styles.detail__box_list}>
                {detail.events &&
                detail.events.items &&
                detail.events.items.length > 0 ? (
                  detail.events.items.map((e, index) => (
                    <li key={index}>{e.name}</li>
                  ))
                ) : (
                  <p>No events available</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
