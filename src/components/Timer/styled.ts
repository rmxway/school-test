import styled, { css } from 'styled-components';

export const TimerWrapper = styled.div<{ $alarm: boolean }>`
	${({ $alarm, theme }) => css`
		position: relative;
		padding: 8px 0 8px 10px;
		border: 1px solid ${$alarm ? theme.colors.danger : '#ccc'};
		color: ${$alarm ? theme.colors.danger : theme.colors.dark};
		border-radius: 10px;
		display: inline-block;
		min-width: 51px;
	`}
`;
