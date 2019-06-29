import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer((props) => {
	const { colors, handleClick } = props;
	return (
		<div style={{ height: '100%' }}>
			{colors.map((c, i) => (
				<DraggableColorBox
					key={c.name}
					index={i}
					color={c.color}
					name={c.name}
					handleClick={() => handleClick(c.name)}
				/>
			))}
		</div>
	);
});

export default DraggableColorList;
