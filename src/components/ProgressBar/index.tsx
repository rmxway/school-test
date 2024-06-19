import { FC } from 'react';
import { ProgressBarWrapper, ProgressItem } from './styled';

interface ProgressBarProps {
	active: string;
	items: string[];
	step: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ active, items, step }) => (
	<ProgressBarWrapper>
		{items.map((item, idx) => (
			<ProgressItem key={item} $active={item === active} $future={idx > step} />
		))}
	</ProgressBarWrapper>
);
export default ProgressBar;
