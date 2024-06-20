import { FC, useEffect, useRef, useState } from 'react';
import { TimerWrapper } from './styled';
import { getStorageTimer } from '@/src/helpers/storage';

interface TimerProps {
	start?: number;
	stop: () => void;
}

export const Timer: FC<TimerProps> = ({ start = 20, stop }) => {
	const time = useRef(0);
	const commonTime = start * 1000 * 60;
	const stampTime = getStorageTimer();
	time.current = commonTime - (Date.now() - stampTime);

	const firstSecond = new Date(time.current).toLocaleTimeString('it-IT', { minute: '2-digit', second: 'numeric' });
	const [lost, setLost] = useState(firstSecond);
	const [alarm, setAlarm] = useState(false);

	const getTime = () => {
		time.current = commonTime - (Date.now() - stampTime);
		setLost(new Date(time.current).toLocaleTimeString('it-IT', { minute: '2-digit', second: 'numeric' }));

		if (Math.floor(time.current / 1000) <= 60) {
			setAlarm(true);
		}

		if (Math.floor(time.current / 1000) <= 0) {
			stop();
			return;
		}
	};

	useEffect(() => {
		const timer = setInterval(() => getTime(), 1000);

		return function () {
			clearInterval(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <TimerWrapper $alarm={alarm}>{lost}</TimerWrapper>;
};
export default Timer;
