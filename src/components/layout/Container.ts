import styled, { css } from 'styled-components';

import { media } from '@/src/theme';

/**
 * Adaptive container block
 * @param {boolean} $pt - padding-top: 40px
 * @param {boolean} $pb - padding-top: 40px
 * @param {boolean} $flex - display: flex; flex-direction: column
 */

interface ContainerProps {
	$pt?: boolean;
	$pb?: boolean;
	$flex?: boolean;
}

export const Container = styled.div<ContainerProps>`
	position: relative;
	display: block;
	padding: 0 20px;
	width: auto;
	flex-grow: 1;
	max-width: 100%;
	margin: 0 auto;

	${({ $pt }) =>
		$pt &&
		css`
			padding-top: 40px;
		`}

	${({ $pb }) =>
		$pb &&
		css`
			padding-bottom: 40px;
		`}

	${({ $flex }) =>
		$flex &&
		css`
			display: flex;
			flex-direction: column;
		`}

	${media.greaterThan('sm')`
		max-width: 100%;
	`}

	${media.greaterThan('md')`
		max-width: 624px;
	`}

	${media.greaterThan('lg')`
		max-width: 680px;
	`}
`;

export default Container;
