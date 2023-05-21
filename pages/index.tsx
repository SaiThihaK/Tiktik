import axios from 'axios'
import Head from 'next/head'
import NoResult from '../components/NoResult'
import VideoCard from '../components/VideoCard'
import { Video } from '../types'


interface Iprop  {
  videos: Video[]
}


export default function Home({videos}:Iprop) {

  return (
    <div>
      <Head>
        <title>Tik Tik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='videos h-full flex flex-col gap-20'>
        {
        videos.length > 0 ? (
          videos?.map((video:Video)=><VideoCard post={video} key={video._id}/>)
        ):(<NoResult text='No Video to show' />)
        }
      </div>
    </div>
  )
}


export const getServerSideProps = async()=>{
  const {data} = await axios.get("http://localhost:3000/api/post");
  return{
    props:{videos:data}
  }
}