import { FC, useRef, useState, ChangeEvent, DragEvent } from "react";
import { uploadImage } from "../../api/useUploadData";

import "./UploadModal.scss";

interface Image {
  name: string;
  file: File;
}

interface UploadModalProps {
  onCancel: () => void;
}

export const UploadModal: FC<UploadModalProps> = ({ onCancel }) => {
  const [image, setImage] = useState<Image | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const selectFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file || file.type.split("/")[0] !== "image") return;

    setImage({
      name: file.name,
      file: file,
    });
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files && event.dataTransfer.files[0];

    if (file && file.type.split("/")[0] === "image") {
      setImage({
        name: file.name,
        file: file,
      });
    }
  };

  const upload = async () => {
    if (image) {
      setUploadStatus("uploading");

      const status = await uploadImage(image);

      if (status === "success") {
        setUploadStatus("success");
      } else {
        setUploadStatus("error");
      }
    }
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="upload-modal" onClick={onCancel}>
      <div className="upload-modal__container">
        <div className="upload-modal__content" onClick={handleModalClick}>
          <h2 className="upload-modal__title">
            Upload a .jpg or .png Cat Image
          </h2>
          <p className="upload-modal__guide">
            Any uploads must comply with the <span>upload guidelines</span> or
            face deletion.
          </p>
          <div
            onClick={selectFile}
            className={`upload-modal__drag-area ${
              isDragging ? "dragover" : ""
            }`}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            {image ? (
              <img
                className="upload-modal__image"
                src={URL.createObjectURL(image.file)}
                alt={image.name}
              />
            ) : (
              <>
                <p className="upload-modal__select" role="button">
                  <span> Drag here</span> your file or <span>Click here</span>{" "}
                  to upload
                </p>
              </>
            )}
            <input
              type="file"
              name="file"
              className="file"
              ref={fileInputRef}
              onChange={onFileSelect}
              style={{ width: 0, height: 0, position: "absolute", top: -9999 }}
            />
          </div>
          {image ? (
            <p className="upload-modal__selected-file">
              Image File Name: {image.name}
            </p>
          ) : (
            <p className="upload-modal__selected-file">No file selected</p>
          )}

          {image && (
            <button
              className="upload-modal__button"
              type="button"
              onClick={upload}
            >
              Upload Photo
            </button>
          )}

          {image && uploadStatus === "success" && (
            <div className="upload-modal__status">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
                  fill="#97EAB9"
                />
              </svg>
              <p className="upload-modal__response">
                Thanks for the Upload - Cat found!
              </p>
            </div>
          )}
          {image && uploadStatus === "error" && (
            <div className="upload-modal__status">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
                  fill="#FF868E"
                />
              </svg>
              <p className="upload-modal__response">
                No Cat found - try a different one
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
