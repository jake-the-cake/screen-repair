import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: space=between;
	row-gap: 20px;
	`

const Quote = () => {
	return (
		<Container>
			Quote page
		</Container>
	)
}

export default Quote