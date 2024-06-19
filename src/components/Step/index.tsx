import { Question } from '@/@types/types';
import { FC } from 'react';
import { StepWrapper } from './styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Checkbox, Input, TextArea } from '@/src/components/ui';
import { DataAnswer } from '@/@types/types';

export const Step: FC<Question & { onNext: () => void; data: DataAnswer[] }> = ({
	id,
	question,
	code,
	type,
	answers,
	onNext,
	data: newData,
}) => {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm();

	const onSubmit: SubmitHandler<Record<string, string>> = (data) => {
		newData.push({
			question,
			answer: data[id],
		});
		onNext();
	};

	return (
		<StepWrapper>
			<div>{question}</div>
			{code && <pre>{code}</pre>}
			<form onSubmit={handleSubmit(onSubmit)}>
				{(type === 'checkbox' || type === 'radio') &&
					answers?.map((answer) => (
						<Checkbox
							key={answer.id}
							id={answer.title}
							title={answer.title}
							type={type}
							name={id}
							register={register}
						/>
					))}
				{type === 'text' && (
					<Input
						type="text"
						id={id}
						{...register(id, { required: true, minLength: 3, maxLength: 100 })}
						placeholder="Максимальное кол-во символов: 100"
					/>
				)}
				{type === 'textarea' && (
					<TextArea
						id={id}
						{...register(id, { required: true, minLength: 10, maxLength: 350 })}
						placeholder="Минимальное кол-во символов: 10, максимум: 350"
						rows={5}
					/>
				)}
				<Button type="submit" $primary disabled={!isValid}>
					Ответить
				</Button>
			</form>
		</StepWrapper>
	);
};
export default Step;
