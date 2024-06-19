import styled, { css } from 'styled-components';

export const ProgressBarWrapper = styled.div`
	position: relative;
	display: flex;
	margin-bottom: 10px;
`;

export const ProgressItem = styled.div<{ $active?: boolean; $future: boolean }>`
	${({ theme, $active, $future }) => css`
		background-color: ${$active ? theme.colors.primary : theme.colors.gray.$4};
		opacity: ${$future ? 0.4 : 1};
		width: 30px;
		height: 10px;
		border-radius: ${theme.radius.borderRadius};
		margin: 0 4px 4px 0;
        transition: all 0.2s;
	`}
`;
