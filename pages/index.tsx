import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home( { posts } : any ) {

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            yediting&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <ul>
              {posts.map( (post : any) =>(
                <li key ={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        </div>

      </main>
    </>
  )
}

// export const getServerSideProps =async () => {
//   const res = await fetch("http://localhost:8080/api/posts")
//   const posts = await res.json();
  
//   return{
//     props:(
//       {posts}
//     )
//   }
// }

//build를 할

export const getStaticProps =async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_end=10")
  const posts = await res.json();
  
  return{
    props:{
      posts
    },
    revalidate: 20
  }
}