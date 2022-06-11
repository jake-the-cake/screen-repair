import React from 'react'
import styled from 'styled-components'
import {Phone} from '@mui/icons-material'

const Container = styled.div`
	background-color: #004512;
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const TitleContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	row-gap: 2px;
`

const TitleText = styled.div`
	font-size: 22px;
	font-family: serif;
	letter-spacing: 1.8px;
	font-weight: 900;
	color: white;
	text-shadow: 1px 1px 14px black;
	border: 1px solid white;
	padding: 3px 5px;
	background: url('screen-repair/images/screen-bg.png') center center;
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
	display: flex;
	align-items: start;
	column-gap: 20px;
	color: #92ad12;
`

const NumberContainer = styled.div`
	display: flex;
	align-items: start;
	margin-top: 0px;
	letter-spacing: 2px;
	color: white;
	font-weight: 700;
	column-gap: 10px;
`

const LinkContainer = styled.div`
	display: flex;
	column-gap: 10px;
	font-size: 12px;
	letter-spacing: 1px;
	text-transform: uppercase;
	align-items: center;
	margin-top: auto;
	color: #92ad12;
	// font-weight: 700;
`

const LinkText = styled.a`
	color: white;
	cursor: pointer;

	&:hover {
		color: gray;
	}
`

const Navbar = () => {
	return (
		<Container>
			<TitleContainer>
				<TitleText>Thompson</TitleText>
				<SubtitleText>Screen Repair</SubtitleText>
			</TitleContainer>
			<LinksAndInfo>
				<InfoContainer>
					Call today for a FREE estimate...
					<NumberContainer>
						<Phone style={{width:'16px', marginTop:'-5px'}} /> (609)316-7767
					</NumberContainer>
					</InfoContainer>
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