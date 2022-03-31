import React, { useEffect, useState } from "react";
import { List, message, Avatar, Skeleton, Divider, Button, Tabs, Row, Col } from 'antd';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "../redux/action";
import { MessageOutlined, StarOutlined } from '@ant-design/icons'
import InfiniteScroll from "react-infinite-scroll-component";

export default function UserReposList() {

    const { TabPane } = Tabs
    const dispatch = useDispatch()
    const userReopsList = useSelector((state) => state.userRepos.userReposList)
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
        .then(() =>{
					if( userReopsList.length !== 0 ){
						setCurPage(curPage + 1)
						setLoading(false)
            if ( userReopsList.length < 10 ){
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
				})
      };

    useEffect(() => {
	    loadMoreData();
    }, []);

    // useEffect(() =>{
    //   console.log(data)
    // }, [data])

    useEffect(() => {
      console.log(userReopsList)
    }, [userReopsList])

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
          dataLength={userReopsList.length}
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
            dataSource={userReopsList}
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