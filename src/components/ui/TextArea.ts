import styled from 'styled-components';

export const TextArea = styled.textarea`
	outline: none;
	border: 1px solid #ddd;
	flex-grow: 1;
    align-self: stretch;
    max-width: 100%;
	border-radius: 10px;
	padding: 8px;
	font-size: 1.2rem;
	transition: all 0.2s;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

	&:focus {
		background-color: #fafafa;
	}
`;
