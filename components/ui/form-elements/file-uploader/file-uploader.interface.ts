import { Dispatch, SetStateAction } from "react";

export interface IFileUploader {
  onFieldChange: (url: string) => void;
  photoUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
}
