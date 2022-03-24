import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from 'antd'

export default function Header() {
    return(
		<div className="headers">
			<Row style={{ justifyContent: 'start', height: "100%" }}>
				<Col span={2}/>
				<Col style={{ alignSelf: 'center' }}>
					<Link style={{ color: '#fff' }} to='/'>
						Github Repository
					</Link>
				</Col>
			</Row>
		</div>
    )
}