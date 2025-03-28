import React, { useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";

const PostModal = ({
  isOpen,
  onClose,
  caption,
  setCaption,
  selectedFile,
  setSelectedFile,
  handleImageChange,
  handlePostCreation,
  isLoading,
}) => {
  const imageRef = useRef(null);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("Image size should be less than 2MB");
        return;
      }
      setError("");
      handleImageChange(event);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-black border border-gray-700 rounded-lg w-full max-w-md shadow-xl relative top-10">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Create Post</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>
        <div className="p-4">
          <input
            type="text"
            className="w-full bg-gray-800 text-white rounded-lg p-2 focus:outline-none border border-gray-700"
            placeholder="Caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <input
            type="file"
            hidden
            ref={imageRef}
            onChange={handleFileChange}
          />
          <button
            onClick={() => imageRef.current.click()}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 mt-3"
          >
            <BsFillImageFill size={18} /> Upload Image
          </button>

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          {selectedFile && (
            <div className="relative mt-4">
              <div className="w-full h-56 rounded-lg overflow-hidden border border-gray-700">
                <img
                  src={selectedFile}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute top-2 right-2 bg-gray-800 rounded-full p-1 text-white hover:bg-gray-600"
                onClick={() => setSelectedFile(null)}
              >
                ✕
              </button>
            </div>
          )}
        </div>
        <div className="flex justify-end p-4 border-t border-gray-700">
          <button
            className={`bg-blue-500 text-white rounded-lg px-4 py-2 transition-all duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
            onClick={handlePostCreation}
            disabled={isLoading}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
