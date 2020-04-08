import React from 'react'
import styled, { css } from 'styled-components'

// styled components
const subColor = 'grey'
const mainColor = 'black'

const FormGroupWrapper = styled.div`
	position: relative;
	margin: 45px 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}

	@media screen and (max-width: 425px) {
		margin: 15px 0;
	}
`

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${subColor};
`

const getInputLabelStyles = (props) => (props.value.length ? shrinkLabelStyles : null)

const InputLabel = styled.label`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	${getInputLabelStyles}
`

const Input = styled.input`
	background: none;
	background-color: white;
	color: ${mainColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&:focus ~ ${InputLabel} {
		${shrinkLabelStyles}
	}
`

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<FormGroupWrapper>
			<Input onChange={handleChange} {...otherProps} />
			{label ? <InputLabel {...otherProps}>{label}</InputLabel> : null}
		</FormGroupWrapper>
	)
}

export default FormInput
