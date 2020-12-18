import React from 'react';

import {Navbar, Nav, Col, Container} from 'react-bootstrap';


const jumb = {
  backgroundColor: '#202020',
  marginTop: '5vw',
  position: 'unset'
};


class Footer extends React.Component{
	render(){
		return(
			<Navbar fixed="bottom" variant="dark" style={jumb}>
				<Container>
					<Col lg={12} className="text-center text-muted">
						<div>All rights reservet by brendobar</div>
					</Col>
				</Container>

			</Navbar>
			);
	}
}



export default Footer