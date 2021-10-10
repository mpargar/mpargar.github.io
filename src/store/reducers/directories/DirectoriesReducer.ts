import { FileExplorerMetadata } from '../../../apps/FileExplorer';
import { IDirectoriesState } from './actionTypes';
const initialState:IDirectoriesState = {
	directories: [
		{
			name: "Apps",
			type: "Folder",
			inside: [
				FileExplorerMetadata
			],
		},
		{
			name: "Documents",
			type: "Folder",
			inside: []
		},
		{
			name: "Desktop",
			type: "Folder",
			inside: [],
		},
		{
			name: "Images",
			type: "Folder",
			inside: [],
		},
		{
			name: "Music",
			type: "Folder",
			inside: [],
		},
	],
	processes: [],
};
const DirectoriesReducer = (state = initialState, action:any) => {
	return state;
};

export default DirectoriesReducer;
