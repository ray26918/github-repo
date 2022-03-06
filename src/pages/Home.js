import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Home(){

	const [ inputUserName, setInputUserName ] = useState('')

	return(
		<>
			<Row style={{ justifyContent:'center', paddingTop: '10px' }} >
					<Col span={4}>
					輸入Github Username
					</Col>
					<Col span={4}>
					<Input
							onChange={(e) => setInputUserName(e.target.value)}
					/>
					</Col>
					<Col style={{ paddingLeft: '10px' }} span={4}>
					<Link to={`/home/users/${inputUserName}/repos`}>
							<Button 
							type='primary' 
							shape='round'
							>
							送出
							</Button>
					</Link>
				</Col>
			</Row>
		</>
	)
}