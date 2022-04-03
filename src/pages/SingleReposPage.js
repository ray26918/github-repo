import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getSingleRepository } from "../redux/action"
import { Card, Skeleton, Avatar, Row, Col, Button } from "antd"
import { MessageOutlined, StarOutlined } from "@ant-design/icons"

export default function SingleReposPage(){

  const [ loading, setLoading ] = useState('')
  const [ data, setData ] = useState([])
  const { Meta } = Card
  const dispatch = useDispatch()
  let { username, repo } = useParams()

  useEffect(() =>{
    setLoading(true)
    dispatch(getSingleRepository(username, repo))
    .then((resp) => {
      setData(resp)
      setLoading(false)
    })
  }, [])


  return(
    <>
      <div >
        <Row style={{ paddingTop: '10px' }} justify='center'>
          <Col span={12}>
            <Card
             style={{ padding: '10px 75px ', height: 'auto' }}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={data.full_name}
                  description={
                    <>
                      <Row>
                        <Col span={21}>
                         {data.description}
                        </Col>
                        <Col span={3}/>
                      </Row>
                      <Row>
                        <Col span={21}>
                        <Button
                            icon={<StarOutlined />}
                            href={`https://github.com/${username}/${data.name}/stargazers`}
                            type='text'
                          >
                          {data.stargazers_count}
                        </Button>
                        </Col>
                        <Col span={3}/>
                      </Row>
                      <Row justify='end'>
                        <Button 
                          shape='round'
                          style={{ background: '#3397cf', color: '#fff' }}
                          icon={<MessageOutlined/>}
                          onClick={() => {
                            window.open(
                              `https://github.com/${username}/${repo}`,
                              '_blank'
                            )
                          }}
                        >
                          至github
                        </Button>
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