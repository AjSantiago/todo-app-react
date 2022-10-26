import type { Note } from './types';

const api = {
	notes: {
		list: (): Note[] => [
			{
				id: 'nota',
				title: 'Primera nota',
				lastEdited: '10/10/10',
				archived: false,
				content: 'Algún contenido',
				categories: ['random'],
			},
			{
				id: 'nota2',
				title: 'Segunda nota',
				lastEdited: '10/10/10',
				archived: false,
				content: 'Algún contenido',
				categories: ['random'],
			},
		],
	},
};

export default api;
