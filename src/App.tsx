import './index.css';
import Container from './components/layout/Container';
import { questions } from './questions';
import { useEffect, useState } from 'react';
import { Step, ProgressBar, Timer } from './components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { Button } from './components/ui';
import { List } from './styled';
import { declOfNum } from './helpers/declOfNum';
import { removeStorageTimer, setDataStorage, setStorageTimer } from './helpers/storage';
import { appData, limit, progressItems } from './vars';

function App() {
	const [step, setStep] = useState(appData.step);
	const [isStart, setIsStart] = useState(appData.step === 0);
	const isLastStep = step === questions.length;

	const startTest = () => {
		setIsStart(false);
		setStorageTimer();
	};

	const resetTest = () => {
		setStep(0);
		setIsStart(true);
		Object.assign(appData, { step: 0, data: [] });
		setDataStorage(appData);
		removeStorageTimer();
	};

	useEffect(() => {
		if (appData) {
			appData.step = step;
			setDataStorage(appData);
			console.log(appData);
		}
	}, [step]);

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
						<Button $primary onClick={startTest}>
							Начать тест
						</Button>
					</>
				)}
				{!isStart && isLastStep && (
					<>
						<h2>Тестирование завершено!</h2>
						<div>{appData.data.length ? 'Ваши ответы:' : 'Вы не ответили ни на один вопрос.'}</div>
						<br />
						{appData.data.length ? (
							<List>
								{appData.data.map((item) => (
									<li key={item.question}>
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
						<Step {...questions[step]} data={appData.data} onNext={() => setStep((prev) => prev + 1)} />
					</>
				)}
			</Container>
		</ThemeProvider>
	);
}

export default App;
