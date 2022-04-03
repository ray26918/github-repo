import React, { useEffect, useState } from "react";
import { List, Skeleton, Divider, Button, Row, notification } from 'antd';
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserRepos } from "../redux/action";
import { StarOutlined } from '@ant-design/icons'
import InfiniteScroll from "react-infinite-scroll-component";

export default function UserReposList() {

    const dispatch = useDispatch()
    const [ data, setData ] = useState([])
		const [ hasMoreData, setHasmoreData ] = useState(true)
		const [ curPage, setCurPage ] = useState(1)
    const [ loading, setLoading ] = useState(false)
    let { username } = useParams()

    const loadMoreData = () => {
			if (loading) {
          return;
        }
        setLoading(true);
        dispatch(getUserRepos(username, curPage))
        .then((resp) =>{
          console.log(resp)
					if( resp.length !== 0 ){
            setData([...data, ...resp.data])
						setCurPage(curPage + 1)
						setLoading(false)
            if ( resp.data.length < 10 ){
              setHasmoreData(false)
            }
					}
					else{
						setLoading(false)
						setHasmoreData(false)
					}
				})
				.catch((resp) => {
					console.log(resp)
					setLoading(false)
          setHasmoreData(false)
          notification.error({
            message: 'Error',
            description: `${resp}`
          })
				})
      };

    useEffect(() => {
	    loadMoreData();
    }, []);

    // useEffect(() =>{
    //   console.log(data)
    // }, [data])


    return(
      <div
        id="scrollableDiv"
        style={{
          height: 800,
          overflow: 'auto',
          padding: '10px 400px',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMoreData}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain> 載入完畢 </Divider>}
          scrollableTarget="scrollableDiv"
          style={{ 
            padding: '10px 50px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
            borderRadius: '30px'
           }}
        >
          <List
            header={username}
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={                  
                  <Link 
                    className="a-Link"
                    to={`/home/users/${username}/repos/${item.name}`}
                    style={{ color: '#0969da' }}
                  >
                      {item.name}
                  </Link>
                  }
                  description={
                    <>
                      <Row>
                          {item.description}
                      </Row>
                      <Row>
                        <Button
                            icon={<StarOutlined />}
                            href={`https://github.com/${username}/${item.name}/stargazers`}
                            type='text'
                          >
                          {item.stargazers_count}
                        </Button>
                      </Row>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>   
    )
}