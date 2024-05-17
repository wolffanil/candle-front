import { FC, useCallback } from "react";
import { IFileUploader } from "./file-uploader.interface";
import { useDropzone } from "@uploadthing/react";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { convertFileToUrl } from "@/utils/convertFileToUrl";
import Button from "../../Button";

const FileUploader: FC<IFileUploader> = ({
  onFieldChange,
  photoUrl,
  setFiles,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50 mt-[40px]"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {photoUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={photoUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col py-5 text-grey-500">
          <img
            src="/img/file-upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Перетощить фото сюда</h3>
          <p className=" mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full !text-[18px]">
            Выбрать в компютере
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
