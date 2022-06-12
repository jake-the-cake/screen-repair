import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10px;
	min-width: 150px;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
`

const Header = styled.div`
	letter-spacing: 4px;
	font-family: Bodoni;
	margin-left: 2px;
	font-size: 15px;
	font-weight: 900;
`

const Phrase = styled.div`
	background: rgba(75,192,12,.4);
	padding: 5px;
	font-style: italic;
	font-size: 12px;
	border-radius: 5px 5px 0px 0px;
`

const Message = styled.div`
	border: 1px solid rgba(75,192,12,.4);
	padding: 5px;
	font-size: 14px;
	font-family: sans-serif;
	margin-top: -16px;
	border-radius: 0px 0px 5px 5px;
`

const Quote = styled.button`
	border: 3px solid #004512;
	outline: none;
	background: rgba(75,192,12,.4);
	padding: 5px;
	width: 100%;
	color: #004512;
	font-weight: 900;
	cursor: pointer;
	transition: background .3s ease;

	&:hover {
		background: rgba(75,192,12,.7);
	}
`

const June = () => {
	return (
		<Container>
			<Header>It's June!</Header>
			<Phrase>June bugs make awful pets and roomates!</Phrase>
			<Message>Patch up your screens to keep these party animals outside, where they belong.</Message>
			<Link to="/screen-repair/quote"><Quote>Request A Quote</Quote></Link>
		</Container>
	)
}

export default June