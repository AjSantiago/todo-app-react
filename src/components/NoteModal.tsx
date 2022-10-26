import type { Note } from '../types';

type Props = {
	note: Partial<Note>;
	onClose: VoidFunction;
	onChange: (field: string, value: string) => void;
	onSave: VoidFunction;
};

export default function NoteModal({ note, onClose, onChange, onSave }: Props) {
	return (
		<section
			className='nes-dialog'
			style={{
				width: '100vw',
				height: '100vh',
				position: 'fixed',
				top: 0,
				left: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					position: 'absolute',
					backgroundColor: 'rgba(0,0,0,0.2)',
					width: '100%',
					height: '100%',
				}}
			/>
			<form
				method='dialog'
				style={{ backgroundColor: 'white', zIndex: 1, padding: 12, border: '5px solid black' }}
			>
				<h1 className='title'>Create / Edit note</h1>
				<div className='nes-field'>
					<label htmlFor='title'>Title</label>
					<input
						value={note.title}
						onChange={(event) => onChange('title', event.target.value)}
						type='text'
						id='title'
						className='nes-input'
						style={{ border: '3px solid black' }}
					/>
				</div>
				<div className='nes-field'>
					<label htmlFor='content'>Content</label>
					<textarea
						value={note.content}
						onChange={(event) => onChange('content', event.target.value)}
						id='content'
						className='nes-textarea'
						style={{ border: '3px solid black' }}
					/>
				</div>
				<div
					style={{
						marginTop: 24,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<button className='nes-btn' onClick={onClose}>
						Close
					</button>
					<button className='nes-btn is-primary' onClick={onSave}>
						Save
					</button>
				</div>
			</form>
		</section>
	);
}
