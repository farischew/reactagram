const ImageUploadForm = ({ setImageHandler, setCaption, caption }) => {
  return (
    <form className="pt-4 flex flex-col gap-2">
      <input type="file" onChange={setImageHandler} className="mb-6" />
      <label>Write a Caption for Your Post:</label>
      <input
        className="border border-gray-primary rounded-lg p-1.5"
        type="text"
        value={caption}
        onChange={setCaption}
        placeholder="Enter your caption..."
      />
    </form>
  );
};

export default ImageUploadForm;

export const PreviewOutput = (props) => {
  return (
    <div className="flex justify-center content-center items-center align-items">
      <img src={props.preview} alt="" className="object-cover max-h-96" />
    </div>
  );
};

export const NoPreviewOutput = () => {
  return (
    <div className="w-full h-full bg-slate flex justify-center content-center items-center">
      <h2>No Photo Selected</h2>
    </div>
  );
};
