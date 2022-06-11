import React from 'react'
import styled from 'styled-components'
import June from '../components/seasonal-ads/June'

const Container = styled.div`
	width: 100%;
	flex: 1;
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

const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
`

const InfoHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 20px 5px;
	width: fit-content;
	margin: 0px auto;
	border-bottom: 1px solid rgba(0,0,0,.2);
`

const InfoHeaderTitle = styled.div`
	font-size: 16px;
	transform: scaleX(1.5);
`

const InfoHeaderSubtitle = styled.div`
	font-size: 12px;
	transform: scaleY(.8);
	text-transform: uppercase;
	color: #696;
	font-style: italic;
	margin: -1px auto;
`

const InfoBody = styled.div`
	display: flex;
	column-gap: 15px;
`

const SeasonalAd = styled.div`
	border: 1px solid rgba(0,0,0,.2);
	display: flex;
	justify-content: center;
	text-align: center;
`

const BlogMessage = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
`

const ImageContainer = styled.div`
	img {
		width: 300px;
	}
`

const ServicesContainer = styled.div``

const Home = () => {
	document.title = `Thompson Screen Repair - Home`

	return (
		<Container>
			<UpperContent>
				<InfoContainer>
					<InfoHeader>
						<InfoHeaderTitle>
							Proudly Serving Bayville, NJ
						</InfoHeaderTitle>
						<InfoHeaderSubtitle>
							*** and surrounding areas ***
						</InfoHeaderSubtitle>
					</InfoHeader>
					<InfoBody>
						<SeasonalAd>
							<June />
						</SeasonalAd>
						<BlogMessage>
							Cool news, folks. We are building a real website for all of your screen repair needs... I can also assemble your grill for you, if you'd like. Don't worry if the directions got misplaced. I'm a pro at this, thanks to my youth experience at Lavallete Hardware. I'm not sure if that was spelled correctly or not.
						</BlogMessage>
					</InfoBody>
				</InfoContainer>
				<ImageContainer>
					<img src="screen-repair/images/flyer.jpg" alt="" />
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