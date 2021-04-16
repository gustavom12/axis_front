import React from "react";
function UploadImage({ setUrl,id, setLoading }: { setUrl: any, id: string, setLoading?: any}) {
  const backend: any = process.env.REACT_APP_URL?.replace("/graphql", "") ;
  const backendURL:any = `${backend}/upload/image`
  return (
    <input
      type="file"
      name="image"
      id={id}
      accept="image/x-png,image/jpeg"
      style={{ height: "0", width: "0" }}
      onChange={(e: any) => {
        setLoading(true)
        const input: any = e.target;
        console.log({body: input.files[0]})
        let formData = new FormData()
        //send automatically the image to backend on select
        formData.append('image', input.files[0])
        fetch(backendURL,{
          method: 'POST',
          body: formData,
        })
          .then((data:any)=>data.json())
          .then(json=>{
            console.log(json)
            setUrl(json.url)
            setLoading(false)
          })
          .catch(err =>{
            console.log(err)
            setLoading(false)})
        }}
    />
  );
}
export default UploadImage;
