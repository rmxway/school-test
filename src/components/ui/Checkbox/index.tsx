import { AnswerType } from '@/@types/types';
import { FC } from 'react';
import { CheckboxWrapper } from './styled';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckboxProps {
	name: string;
	id: string;
	title: string;
	type: AnswerType;
	register: UseFormRegister<FieldValues>;
}

export const Checkbox: FC<CheckboxProps> = ({ name, id, title, type = 'text', register }) => (
	<CheckboxWrapper>
		<label htmlFor={id}>
			<input id={id} type={type} value={title} {...register(name, { required: true })} />
			{title}
		</label>
	</CheckboxWrapper>
);
export default Checkbox;
