import { FC } from 'react';

import { ButtonStyle, Props } from './styled';

/**
 * Custom button with some properties.
 ** Необходимо доработать анимацию
 * @param {?boolean} $w100 - width 100%
 * @param {?boolean} $inactive - pointer-events: none
 * @param {?boolean} $margins - margin-right and margin-bottom 10px
 * @param {?boolean} (styled boolean params) - $success, $danger, $primary, $white, $dark
 */

export const Button: FC<Props> = ({ children, ...props }) => {
	return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
