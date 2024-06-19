import { FC, useEffect, useState } from 'react';
import { TimerWrapper } from './styled';

interface TimerProps {
	start?: number;
}

export const Timer: FC<TimerProps> = ({ start = 20 }) => {
	const [lost, setLost] = useState(`${start}:00`);
	const date = start * 1000 * 60 + 1000;
	const deadline = Date.now() + date;

	const getTime = () => {
		const time = new Date(deadline - Date.now());

		setLost(time.toLocaleTimeString('it-IT', { minute: '2-digit', second: 'numeric' }));
	};

	useEffect(() => {
		const timer = setInterval(() => getTime(), 1000);
		return () => clearInterval(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <TimerWrapper>{lost}</TimerWrapper>;
};
export default Timer;
