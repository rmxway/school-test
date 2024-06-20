import { AppData } from '@/@types/types';
import { questions } from './questions';
import { getDataStorage } from './helpers/storage';

export const progressItems = questions.map((item) => item.id);
export const appData: AppData = getDataStorage() || { step: 0, data: [] };
export const limit = 10;
