import styled, { css } from 'styled-components';

export const CheckboxWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		margin-bottom: 10px;

		label {
			cursor: pointer;
			transition: all 0.2s;
		}

		input {
			margin-right: 10px;
		}

		&:hover {
			label {
				color: ${theme.colors.primary};
			}
		}
	`}
`;
