import { useState } from "react";
import useUser from "../../hooks/use-user";

import ImageUploadForm, {
  NoPreviewOutput,
  PreviewOutput,
} from "./createUploadForm";
import { createNewPost, uploadPostPhoto } from "../../services/firebase";

export default function CreatePost(props) {
  const {
    user: { userId },
  } = useUser();

  const handleModalClose = () => {
    props.handleModalToggle(false);
  };

  const [caption, setCaption] = useState("");
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [percent, setPercent] = useState(0);

  const createPostHandler = async () => {
    // Upload Photo to Cloud Storage and get URL
    if (selectedFile == null) {
      console.log("Error");
    }
    const imageUrl = await uploadPostPhoto(
      selectedFile,
      setPercent,
      setImageUrl
    );
    createNewPost(caption, imageUrl, userId);
  };

  const setCaptionHandler = (event) => {
    setCaption(event.target.value);
  };

  const setImageHandler = (event) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file !== null) {
      setPreview(URL.createObjectURL(file));
    }

    setSelectedFile(file);
  };

  return (
    <>
      <div className="justify-center items-center bg-color-slate max-h-full w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-3/4 h-5/6 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border border-slate rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
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
              <div className="w-full h-4/6 ">
                {preview ? (
                  <PreviewOutput preview={preview} />
                ) : (
                  <NoPreviewOutput />
                )}
              </div>
              <ImageUploadForm
                setImageHandler={setImageHandler}
                setCaption={setCaptionHandler}
                caption={caption}
              />
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
                onClick={createPostHandler}
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
