import HeadInfo from "../components/Headinfo";
import Image from "next/image";
import photosStyles from "../styles/photos.module.scss";
import Link from "next/link";

const photos = ({ photos }) => {
  return (
    <>
      <div>
        <HeadInfo title="Yammy photos" />
        <h1>my photos </h1>
        <ul className={photosStyles.photos}>
          {photos.map((photo) => (
            <Link href ={ `/photos/${photo.id}`}>
              
                <li key={photo.id} id={photo.id}>
                  <Image
                    src={photo.thumbnailUrl}
                    width={100}
                    height={100}
                    alt={photo.title}
                  />
                  <span>{photo.title}</span>
                </li>
  
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10"
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default photos;
