import styled from 'styled-components';

export const Input = styled.input`
	outline: none;
	border: 1px solid #ddd;
	width: 100%;
	border-radius: 10px;
	padding: 8px;
	font-size: 1.2rem;
	transition: all 0.2s;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

	&:focus {
		background-color: #fafafa;
	}
`;
