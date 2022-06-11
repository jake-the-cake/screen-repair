import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: space=between;
	row-gap: 20px;
`
const UpperContent = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`

const LowerContent = styled.div``

const InfoContainer = styled.div``

const ImageContainer = styled.div``

const ServicesContainer = styled.div``

const Home = () => {
	document.title = `Thompson Screen Repair - Home`

	return (
		<Container>
			<UpperContent>
				<InfoContainer>
					Info
				</InfoContainer>
				<ImageContainer>
					Image
				</ImageContainer>
			</UpperContent>
			<LowerContent>
				<ServicesContainer>
					Services
				</ServicesContainer>
			</LowerContent>
		</Container>
	)
}

export default Home