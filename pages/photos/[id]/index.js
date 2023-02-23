
import Image from "next/image";
import Link from 'next/link'


const index = ( { photo }) => {
    const {title, url} = photo;


  return (
    <div>
        <h2>image</h2>
         <div>
            <Image src ={url} width={500} height={500}/>
            <span>{title}</span>

        </div>
        <Link href="/photos">
            go back
        </Link> 
    </div>
  )
}

//prop넘기기, context로 아래 geStaticPath에서 id를 가져옴           
// context 안의 params: {id: id.toString() }

export const getStaticProps = async (context)=>{
    const {id} = context.params;
    const res = await fetch( `https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.json();

    return {
        props:{
            photo
        }
    }
}

export const getStaticPaths = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10');
    const photos = await res.json();

    const ids = photos.map( photo =>
    photo.id
    )

    const paths = ids.map( id => {
        return{
            params: {id: id.toString() }
        }
    }
    
    )

    return{
        paths,
        fallback: false,
    }
}

export default index
