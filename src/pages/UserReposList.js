import React, { useEffect, useState } from "react";
import { List, message, Avatar, Skeleton, Divider } from 'antd';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepos } from "../redux/action";
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
      
    // useEffect(() => {
		// 	console.log(data)
    // }, [data])

    return(
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMoreData}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain> 載入完畢 </Divider>}
          scrollableTarget="scrollableDiv"
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
                <div>Content</div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    )
}