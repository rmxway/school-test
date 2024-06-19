export interface Answer {
	id: string;
	title: string;
	correct?: boolean;
}

export type AnswerType = 'checkbox' | 'radio' | 'text' | 'textarea';

export interface Question {
	id: string;
	question: string;
	code?: string;
	type: AnswerType;
	answers?: Answer[];
}

export interface DataAnswer {
	question: string;
	answer: unknown;
}
