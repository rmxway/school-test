import './index.css';
import Container from './components/layout/Container';
import { questions } from './questions';
import { useEffect, useState } from 'react';
import { Step, ProgressBar, Timer } from './components';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';
import { Button } from './components/ui';
import { LastInfo } from './styled';
import { DataAnswer } from '@/@types/types';

const progressItems = questions.map((item) => item.id);
const newData: DataAnswer[] = [];
const limit = 1;

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
						<div>Что бы начать тестирование, нажмите "Начать".</div>
						<div>Обратите внимание что для тестирование выделено {limit} минут.</div>
						<br />
						<Button $white onClick={() => setIsStart(false)}>
							Начать
						</Button>
					</>
				)}
				{!isStart && isLastStep && (
					<>
						<h2>Тестирование завершено!</h2>
						<div>Ваши ответы:</div>
						<LastInfo>{JSON.stringify(newData, null, 2)}</LastInfo>
						<Button $white onClick={resetTest}>
							Начать заново
						</Button>
					</>
				)}
				{!isStart && step < questions.length && (
					<>
						<Timer start={limit} />
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
