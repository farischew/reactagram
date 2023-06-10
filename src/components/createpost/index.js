import { useState } from "react";

import ImageUploadForm, {
  NoPreviewOutput,
  PreviewOutput,
} from "./createUploadForm";

export default function CreatePost(props) {
  const handleModalClose = () => {
    props.handleModalToggle(false);
  };

  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const imageUploader = async () => {
    // const formData = new FormData();
    // if (selectedFile !== null) {
    //   formData.append("image", selectedFile);
    //   const response = await fetch(UPLOAD_URL, {
    //     method: "POST",
    //     headers: {
    //       accept: "application/json",
    //     },
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   for (const key in data) {
    //     loadedItems.push({
    //       item: key,
    //       price: data[key],
    //     });
    //   }
    //   ctx.setItemsHandler(loadedItems);
    //   loadedItems.forEach((obj) => {
    //     finalOutput[obj.item] = { price: obj.price, people: [] };
    //   });
    //   ctx.setFinalOutputHandler(finalOutput);
    //   setImageUploaded(true);
  };

  const setImageHandler = (event) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file !== null) {
      setPreview(URL.createObjectURL(file));
    }

    setSelectedFile(file);
    setImageUploaded(false);
  };

  return (
    <>
      <div className="justify-center items-center bg-slate opacity-70 max-h-full w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"></div>
      <div className="justify-center items-center max-h-full w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 h-4/5 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Create a post</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleModalClose}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="w-full h-4/6">
                {preview ? (
                  <PreviewOutput preview={preview} />
                ) : (
                  <NoPreviewOutput />
                )}
              </div>
              <ImageUploadForm setImageHandler={setImageHandler} />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleModalClose}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleModalClose}
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
