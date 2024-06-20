import styled, { css } from 'styled-components';

export const CheckboxWrapper = styled.div`
	${({ theme }) => css`
		position: relative;
		margin-bottom: 10px;

		input {
			display: none;
		}

		label {
			padding-left: 30px;
			cursor: pointer;
			transition: all 0.2s;

			&:has([type='radio']) {
				&:before {
					content: '';
					position: absolute;
					left: 0;
					width: 16px;
					height: 16px;
					border-radius: 50px;
					border: 2px solid ${theme.colors.primary};
				}

				&:after {
					content: '';
					position: absolute;
					left: 6px;
					top: 6px;
					transition: all 0.2s;
					width: 8px;
					height: 8px;
					border-radius: 50px;
					background-color: ${theme.colors.primary};
					transform: scale(0);
				}
			}

			&:has([type='radio']:checked) {
				&:after {
					transform: scale(1);
				}
			}

			&:has([type='checkbox']) {
				&:before {
					content: '';
					position: absolute;
					left: 0;
					width: 16px;
					height: 16px;
					border-radius: 4px;
					border: 2px solid ${theme.colors.primary};
				}

				&:after {
					content: '';
					position: absolute;
					left: 6px;
					top: 6px;
					transition: all 0.2s;
					width: 8px;
					height: 8px;
					border-radius: 2px;
					background-color: ${theme.colors.primary};
					transform: scale(0);
				}
			}

			&:has([type='checkbox']:checked) {
				&:after {
					transform: scale(1);
				}
			}
		}

		&:hover {
			label {
				color: ${theme.colors.primary};
			}
		}
	`}
`;
