import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

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
        <div>
          <img
            src={
              detail.thumbnail
                ? `${detail.thumbnail.path}.${detail.thumbnail.extension}`
                : "default-image-url"
            }
            alt="character-thumbnail"
          />
          <div>
            <h3>{detail.name}</h3>
            <p>comics</p>
            <ul>
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
            <p>series</p>
            <ul>
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
            <p>stories</p>
            <ul>
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
            <p>events</p>
            <ul>
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
      )}
    </div>
  );
}

export default Detail;
