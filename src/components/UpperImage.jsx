import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background: url('/screen-repair/images/screen1.jpg') center center no-repeat;
	background-size: cover;
	width: 100%;
	height: 200px;
`

const UpperImage = () => {
	return (
		<Container>{/* image container only */}</Container>
	)
}

export default UpperImage