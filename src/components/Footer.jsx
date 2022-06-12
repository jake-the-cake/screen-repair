import { Copyright, EmailOutlined, FacebookRounded, Instagram, Phone, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	background: linear-gradient(to bottom, #004512, #004512, black);
	color: white;
`

const Upper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	margin-top: 10px;
`

const LeftContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`

const CenterContent = styled.div``
const RightContent = styled.div``

const Lower = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	color: #92ad12;
	font-size: 10px;
	text-shadow: 1px 1px 1px #000;
	font-weight: 700;
`

const SocialLink = styled.div`
	display: flex;
	column-gap: 5px;
	align-items: center;
	font-size: 14px;
`

const C = styled.div`
	display: flex;
	align-items: center;
`

const Signature = styled.div``

const Footer = () => {
	const iconDimension = '18px'

	return (
		<Container>
			<Upper>
			<LeftContent>
				<SocialLink>
					<Phone style={{width:iconDimension,height:iconDimension, color:'gray'}}/>
					(609)316-7767
				</SocialLink>
				<SocialLink>
					<FacebookRounded style={{color: 'royalblue', width:iconDimension,height:iconDimension}} />
					View Our Facebook
				</SocialLink>
				<SocialLink>
					<Instagram style={{color:'white',background: 'linear-gradient(to right, purple, orange)',width:iconDimension,height:iconDimension}} />
					@ThompsonScreen
				</SocialLink>
				<SocialLink>
					<YouTube style={{color:'#d22', width:iconDimension,height:iconDimension}} />
					u/ThompsonScreen
				</SocialLink>
				<SocialLink style={{fontSize:'10px'}}>
					<EmailOutlined style={{width:iconDimension,height:iconDimension, color:'gray'}}/>
					ThompsonScreenRepair@gmail.com
				</SocialLink>
			</LeftContent>
			<CenterContent>
				Center
			</CenterContent>
			<RightContent>Right</RightContent>
			</Upper>
			<Lower>
				<C><Copyright style={{width:'11px'}} />2022 - Thompson Screen Repair LLC.</C>
				<Signature>built by: Quiet Goat Labs</Signature>
			</Lower>
		</Container>
	)
}

export default Footer