import { FC, useEffect, useState } from 'react';
import { TimerWrapper } from './styled';

interface TimerProps {
	start?: number;
	stop: () => void;
}

export const Timer: FC<TimerProps> = ({ start = 20, stop }) => {
	const [lost, setLost] = useState(`${start}:00`);
	const [alarm, setAlarm] = useState(false);
	const date = start * 1000 * 60 + 1000;
	const deadline = Date.now() + date;

	const getTime = () => {
		const time = deadline - Date.now();
		setLost(new Date(time).toLocaleTimeString('it-IT', { minute: '2-digit', second: 'numeric' }));

		if (Math.floor(time / 1000) <= 60) {
			setAlarm(true);
		}

		if (Math.floor(time / 1000) <= 0) {
			stop();
			return;
		}
	};

	useEffect(() => {
		const timer = setInterval(() => getTime(), 1000);
		return () => clearInterval(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <TimerWrapper $alarm={alarm}>{lost}</TimerWrapper>;
};
export default Timer;
