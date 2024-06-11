"use client"
import { CldUploadWidget } from 'next-cloudinary';
 

 const Upload=({image,setImage})=>{

    return(
        <CldUploadWidget uploadPreset="ifoxp6ps"
        onSuccess={(results)=>{
            setImage(results?.info.secure_url)
            alert('uploaded')
        }}>
        {({ open }) => {
            return (
            <button onClick={() => open()}>
                Upload an Image
            </button>
            );
        }}
        </CldUploadWidget>
    )
 }

 export default Upload