import React, { useEffect, useState } from "react";
import { List, message, Avatar, Skeleton, Divider, Button } from 'antd';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "../redux/action";
import { MessageOutlined } from '@ant-design/icons'
import InfiniteScroll from "react-infinite-scroll-component";

export default function UserReposList() {

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
        .then(resp =>{
					if( resp.length !== 0 ){
						setCurPage(curPage + 1)
						setData([ ...data, ...resp ])
						setLoading(false)
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
            header={ username }
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={item.name}
                  description={item.stargazers_count}
                />
                <div>
                  <Link to={`/home/users/${username}/repos/${item.name}`}>
                    <Button
                      shape='round'
                      icon={<MessageOutlined />}
                      style={{ background: '#3397cf', color: '#fff' }}
                    >
                      內容
                    </Button>
                  </Link>
                </div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>   
    )
}