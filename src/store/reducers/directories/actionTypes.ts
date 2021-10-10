import { IApp } from './../../../apps/index';

export enum DirectoriesActionTypes {
  OPEN_DIRECTORY = "Directories/OPEN_DIRECTORY",
}

export interface IDirectoryFolder {
  name: string;
  type: "Folder";
  inside: Array<TDirectory>;
}

export interface IDirectoryApp {
  name: string;
  type: "App";
  app: IApp;
}

export interface IDirectoryFile {
  name: string;
  type: "File";
  openWith: IApp;
}

export type TDirectory = IDirectoryFolder | IDirectoryApp | IDirectoryFile;

export interface IDirectoriesState {
  directories: TDirectory[];
  processes: IApp[];
}
