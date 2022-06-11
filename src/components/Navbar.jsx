import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: #004512;
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const TitleContainer = styled.div`
	padding: 10px;
`

const TitleText = styled.div`
	font-size: 22px;
	font-family: serif;
	letter-spacing: 1.4px;
	font-weight: 900;
	color: white;
	text-shadow: 1px 1px 14px black;
	border: 1px solid white;
	padding: 3px 5px;
	background: url('./images/screen-bg.png') center center;
	background-size: 100px;
`

const SubtitleText = styled.div`
	font-size: 12px;
	letter-spacing: 4px;
	color: white;
	display: flex;
	justify-content: center;
`

const LinksAndInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	align-items: end;
`

const InfoContainer = styled.div`
	font-size: 12px;
	font-style: italic;
`

const LinkContainer = styled.div`
	display: flex;
	column-gap: 10px;
	font-size: 14px;
	text-transform: uppercase;
	align-items: center;
	margin-top: auto;
`

const LinkText = styled.div``

const Navbar = () => {
	return (
		<Container>
			<TitleContainer>
				<TitleText>Thompson</TitleText>
				<SubtitleText>Screen Repair</SubtitleText>
			</TitleContainer>
			<LinksAndInfo>
				<InfoContainer>Call today for a FREE estimate (phone) 123-123-1234</InfoContainer>
				<LinkContainer>
					<LinkText>Home</LinkText>|
					<LinkText>Services</LinkText>|
					<LinkText>Gallery</LinkText>|
					<LinkText>About Us</LinkText>|
					<LinkText>Contact</LinkText>
				</LinkContainer>
			</LinksAndInfo>
		</Container>
		)
}

export default Navbar