import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	padding: 10px;
`

const Header = styled.div``
const Phrase = styled.div``
const Message = styled.div``
const Quote = styled.button``

const June = () => {
	return (
		<Container>
			<Header>It's June!</Header>
			<Phrase>June bugs make awful roomates!</Phrase>
			<Message>Patch up your screens to keep these party animals outside, where they belong.</Message>
			<Link to="/quote"><Quote>Request A Quote</Quote></Link>
		</Container>
	)
}

export default June