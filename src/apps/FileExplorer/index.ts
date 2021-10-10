import { IDirectoryApp } from './../../store/reducers/directories/actionTypes';
import FileExplorer from "./FileExplorer";
import FileImage from "../../assets/img/Arhive.svg";

export const FileExplorerMetadata: IDirectoryApp = {
  name: "Files",
  type: "App",
  app: {
    icon: FileImage,
    component: FileExplorer,
  }
}

export default FileExplorer;

