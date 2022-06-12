import React from 'react'
import styled from 'styled-components'
import {Phone} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Container = styled.div`
	background-color: #004512;
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media only screen and (max-width: 500px) {
		flex-direction: column;
	}
`

const TitleContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 2px;

	@media only screen and (max-width:500px) {
		padding-bottom: 0px;
	}
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
	background: url('/screen-repair/images/screen-bg.png') center center;
	background-size: 100px;
	text-align: center;
	width: fit-content;
`

const SubtitleText = styled.div`
	font-size: 11px;
	transform: scaleX(2.2);
	color: white;
	display: flex;
	justify-content: center;
`

const LinksAndInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	align-items: end;

	@media only screen and (max-width: 500px) {
		align-items: center;
		row-gap: 10px;
		flex-direction: column-reverse;
	}
`

const InfoContainer = styled.div`
	font-size: 12px;
	font-style: italic;
	display: flex;
	align-items: start;
	column-gap: 20px;
	color: #92ad12;

	@media only screen and (max-width: 500px) {
		background-color: rgba(255,255,255,.2);
		padding: 5px;
	}
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
	font-size: 13px;
	transform: scaleY(.8);
	letter-spacing: 1px;
	text-transform: uppercase;
	align-items: center;
	margin-top: auto;
	color: #92ad12;

	@media only screen and (max-width: 500px) {
		font-size: 10px;
		transform none;
		column-gap: 5px;
		border-top: 1px solid rgba(255,255,255,.2);
		padding-top: 10px
	}
`

const LinkText = styled.span`
	color: white;
	cursor: pointer;

	&:hover {
		color: gray;
	}
`

const Navbar = () => {
	const links = [
		['/screen-repair/', 'Home'],
		['/screen-repair/services', 'Services'],
		['/screen-repair/gallery', 'Gallery'],
		['/screen-repair/about', 'About Us'],
		['/screen-repair/contact', 'Contact'],
	]

	const displayLinks = (links) => {
		const linkArray = []
		links.forEach((link, i) => {
			linkArray.push(<Link key={link[1].replace(' ','-')} to={link[0]} style={{textDecoration:'none'}}><LinkText>{link[1]}</LinkText></Link>)
			if (i !== links.length - 1) {
				linkArray.push('|')
			}
		})
		return linkArray
	}	

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
					{ displayLinks(links) }
				</LinkContainer>
			</LinksAndInfo>
		</Container>
		)
}

export default Navbar