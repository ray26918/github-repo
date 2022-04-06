import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import  validator  from 'validator'


export default function Home(){

	const [ inputUserName, setInputUserName ] = useState('')

	return(
		<>
			<Row style={{ justifyContent:'center', paddingTop: '10px' }} >
					<Col span={2}>
					輸入Github Username
					</Col>
					<Col span={4}>
					<Input
						style={ validator.isEmpty(inputUserName) ? { border: '1px solid red', borderRadius: '15px' } : { borderRadius: '15px' }}
						onChange={(e) => setInputUserName(e.target.value)}
					/>
					{ validator.isEmpty(inputUserName) ? <span style={{ color: 'red' }}>輸入欄位請勿為空!</span> :''}
					</Col>
					<Col style={{ paddingLeft: '10px' }} span={4}>	
					<Link to={`/home/users/${inputUserName}/repos`}>
							<Button 
								type='primary' 
								shape='round'
								disabled={validator.isEmpty(inputUserName)}
							>
							送出
							</Button>
					</Link>
				</Col>
			</Row>
		</>
	)
}