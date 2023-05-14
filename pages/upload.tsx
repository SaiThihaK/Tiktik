import { SanityAssetDocument } from '@sanity/client';
import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa';
import { client } from '../utils/client';

const Upload = () => {
const [loading,setLoading] = useState(false);
const [videoAccesset,setVideoAccesset] = useState<SanityAssetDocument | undefined>();
const [wrongFile,setWrongFile]  = useState(false)

const uploadVideoHandler = async(e:any)=>{
    const selectedFile = e.target.files[0];
    const fileTypes = ['video/mp4', 'video/webm', 'video/ogg'];
    console.log(selectedFile)
   
    // if(fileTypes.includes(selectedFile.type)){
    // setWrongFile(false);
    // setLoading(true);
    // try{
    // const res = await client.assets.upload('file',selectedFile,{
    //     contentType:selectedFile.type,
    //     filename:selectedFile.name
    // });
    // setVideoAccesset(res);
    // setLoading(false);
    // }catch(err){
    //     console.log(err)
    // }
    // }else{
    // setWrongFile(false);
    // return;
    // }
}
  return (
    <div className='flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-5 pt-5 lg:pt-10 bg-[#F8F8F8] justify-center'>
     <div className=' bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6'>
        <div>
          <div className="flex flex-col gap-2">
            <p className='text-2xl font-bold'>Upload Video</p>
            <p className='text-md text-gray-400'>Post a video to your account</p>
          </div>
          <div className='border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100'>
            {loading ? (
              <p className='text-center text-3xl text-red-400 font-semibold'>
                Uploading...
              </p>
            ) :(<div>
              {
                videoAccesset ? (<div>
                 I got Video
                </div>):(
                <label className='flex flex-col items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                <p className='font-semibold text-xl'><FaCloudUploadAlt className='text-gray-400 text-6xl' /></p>
                <p className='text-xl'>Upload video</p>
                </div>
                <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                        MP4 or WebM or ogg <br />
                        720x1280 resolution or higher <br />
                        Up to 10 minutes <br />
                        Less than 2 GB
                </p>
                <p className='bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                        Select file
                </p>
                <input type="file" name="upload-video"  className="w-0 h-0" onClick={uploadVideoHandler}/>
                </label>) 
              }
            </div>)
          }
          </div>
          </div>
     </div>
    </div>
  )
}

export default Upload