import { AppData } from '@/@types/types';

export const storageName = 'school-test-data';
export const timerName = 'school-test-timer';

export const setDataStorage = (appData: AppData) => {
	if (appData) {
		localStorage.setItem(storageName, JSON.stringify(appData));
	}
};

export const getDataStorage = (): AppData => {
	const data = localStorage.getItem(storageName);
	return data ? JSON.parse(data) : { data: [], isNew: false, step: 0 };
};

export const removeStorageTimer = () => {
	localStorage.removeItem(timerName);
};

export const setStorageTimer = () => {
	localStorage.setItem(timerName, JSON.stringify(Date.now()));
};

export const getStorageTimer = () => {
	const data = localStorage.getItem(timerName);
	return data ? JSON.parse(data) : 0;
};
