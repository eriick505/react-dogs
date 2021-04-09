import React from 'react';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_GET } from '../../../api';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import styles from './FeedModal.module.css';

function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    const { response, json } = request(url, options);
  }, [photo, request]);

  return (
    <div className="styles.modal">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
