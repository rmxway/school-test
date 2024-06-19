import { Question } from '@/@types/types';

export const questions: Question[] = [
	{
		id: 'a1',
		question: 'Что должен знать Frontend разработчик в первую очередь?',
		type: 'radio',
		answers: [
			{
				id: '1',
				title: 'Photoshop',
			},
			{
				id: '2',
				title: 'Php, MySQL, HTML',
			},
			{
				id: '3',
				title: 'Typescript, HTML, CSS',
				correct: true,
			},
		],
	},
	{
		id: 'a2',
		question: 'Выберите state менеджеры:',
		type: 'checkbox',
		answers: [
			{
				id: '1',
				title: 'MobX',
				correct: true,
			},
			{
				id: '2',
				title: 'Laravel',
			},
			{
				id: '3',
				title: 'Redux Toolkit',
				correct: true,
			},
			{
				id: '4',
				title: 'React',
			},
			{
				id: '5',
				title: 'Effector',
				correct: true,
			},
		],
	},
	{
		id: 'a3',
		question: 'Опишите как работает EventLoop.',
		type: 'textarea',
	},
	{
		id: 'a4',
		question: 'Что выведет данный код?',
		code: `console.log(1);\nsetTimeout(() => console.log(2), 0); \nPromise.resolve(3).then(console.log); \nconsole.log(4);`,
		type: 'text',
	},
	{
		id: 'a5',
		question: 'Какой фреймворк первоначально популяризировал концепцию двустороннего связывания данных?',
		type: 'radio',
		answers: [
			{ id: '1', title: 'Vue' },
			{ id: '2', title: 'React' },
			{ id: '3', title: 'Angular', correct: true },
			{ id: '4', title: 'Ember' },
		],
	},
];
