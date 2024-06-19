import styled, { css } from 'styled-components';

export const StepWrapper = styled.div`
	${({ theme }) => css`
		position: relative;

		& > div {
			font-size: 1.75rem;
			line-height: 1;
			font-weight: 600;
		}

		& > pre {
			background-image: ${theme.gradients.dark()};
			color: #fff;
			font-family: Tahoma, Geneva, Verdana, sans-serif;
			font-size: 1.2rem;
			line-height: 1.5;
			padding: 20px;
			border-radius: ${theme.radius.borderRadius};
		}

		form {
			margin: 20px 0;
			display: flex;
			flex-direction: column;
			align-items: flex-start;

			button {
				margin-top: 20px;
			}
		}
	`}
`;
