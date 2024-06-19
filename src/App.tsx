import './index.css';
import Container from './components/layout/Container';
import { questions } from './questions';
import { useEffect, useState } from 'react';
import { Step, ProgressBar, Timer } from './components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { Button } from './components/ui';
import { List } from './styled';
import { DataAnswer } from '@/@types/types';
import { declOfNum } from './helpers/declOfNum';

const progressItems = questions.map((item) => item.id);
const newData: DataAnswer[] = [];
const limit = 10;

function App() {
	const [step, setStep] = useState(0);
	const [isStart, setIsStart] = useState(true);
	const isLastStep = step === questions.length;

	const resetTest = () => {
		setStep(0);
		setIsStart(true);
	};

	useEffect(() => {
		if (isLastStep) console.log(newData);
	}, [isLastStep]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container $pt $pb>
				{isStart && (
					<>
						<h2>Добро пожаловать в тестовый блок по Frontend</h2>
						<div>Что бы начать тестирование, нажмите на кнопку.</div>
						<div>
							Обратите внимание что для тестирование выделено {limit}{' '}
							{declOfNum(limit, ['минута', 'минуты', 'минут'])}.
						</div>
						<br />
						<Button $primary onClick={() => setIsStart(false)}>
							Начать тест
						</Button>
					</>
				)}
				{!isStart && isLastStep && (
					<>
						<h2>Тестирование завершено!</h2>
						<div>{newData.length ? 'Ваши ответы:' : 'Вы не ответили ни на один вопрос.'}</div>
						<br />
						{newData.length ? (
							<List>
								{newData.map((item) => (
									<li>
										<div>Вопрос: {item.question}</div>
										<div>
											Ответ: {Array.isArray(item.answer) ? item.answer.join(', ') : item.answer}
										</div>
									</li>
								))}
							</List>
						) : null}
						<Button $white onClick={resetTest}>
							Начать заново
						</Button>
					</>
				)}
				{!isStart && step < questions.length && (
					<>
						<Timer start={limit} stop={() => setStep(questions.length)} />
						<h2>Тестирование</h2>
						<ProgressBar items={progressItems} active={progressItems[step]} step={step} />
						<Step {...questions[step]} data={newData} onNext={() => setStep((prev) => prev + 1)} />
					</>
				)}
			</Container>
		</ThemeProvider>
	);
}

export default App;
