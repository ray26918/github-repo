import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getRepository } from "../redux/action"
import { Card, Skeleton, Avatar, Row, Col, Button } from "antd"
import { MessageOutlined } from "@ant-design/icons"

export default function SingleReposPage(){

  const [ loading, setLoading ] = useState('')
  const [ data, setData ] = useState([])
  const { Meta } = Card
  const dispatch = useDispatch()
  let { username, repo } = useParams()

  useEffect(() =>{
    setLoading(true)
    dispatch(getRepository(username, repo))
    .then((resp) => {
      setData(resp)
      setLoading(false)
    })
  }, [])

  useEffect(() =>{
    console.log(data)
  }, [data])

  return(
    <>
      <div >
        <Row style={{ paddingTop: '10px' }} justify='center'>
          <Col span={12}>
            <Card
             style={{ padding: '10px 100px ', height: 'auto' }}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={data.full_name}
                  description={
                    <>
                      <Row>
                        <Col>
                          description: {data.description}
                        </Col>
                      </Row>
                      <Row>
                        <Col span={20}>
                          stargazers_count: {data.stargazers_count}
                        </Col>
                        <Col span={4}>
                          <Button 
                            shape='round'
                            style={{ background: '#3397cf', color: '#fff' }}
                            icon={<MessageOutlined/>}
                            onClick={() => {
                              window.location.href=`https://github.com/${username}/${repo}`
                            }}
                          >
                            至github
                          </Button>
                        </Col>
                      </Row>
                    </>
                  }
                />
              </Skeleton>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}