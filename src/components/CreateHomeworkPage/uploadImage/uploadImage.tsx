import React from "react";
function UploadImage({ setUrl,id, setLoading }: { setUrl: any, id: string, setLoading?: any}) {
  const backend: any = process.env.REACT_APP_URL?.replace("/graphql", "") ;
  const backendURL:any = `${backend}/upload/image`
  return (
    <input
      type="file"
      name="image"
      id={id}
      style={{ height: "0", width: "0" }}
      accept="image/x-png,image/gif,image/jpeg"
      onChange={(e: any) => {
        if(setLoading)setLoading(true)
        const input: any = e.target;
        let formData = new FormData()
        //send automatically the image to backend on select
        formData.append('image', input.files[0])
        fetch(backendURL,{
          method: 'POST',
          body: formData,
        })
          .then((data:any)=>data.json())
          .then(json=>{
            setUrl(json.url)
            console.log(json)
            if(setLoading)setLoading(false)
          })
          .catch(err =>{
            console.log(err)
            if(setLoading)setLoading(false)})
        }}
    />
  );
}
export default UploadImage;
