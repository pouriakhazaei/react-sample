import InfiniteScroll from "react-infinite-scroll-component";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";

import {Header, ListTop, Loading, List, LoadingLoadMore} from "Components";
import {toggleLoading, getData, getAnimations} from "Redux/AppSlice";
import type {RootState} from "Redux/Store";

const Page = () => {
    const {page, animations, isLoading} = useSelector((state: RootState) => state.appSlice);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(toggleLoading());
        getData(page).then(res => {
            dispatch(getAnimations({animations: res?.data}));
        })
        .finally(() => dispatch(toggleLoading()));
    }, []);

    const loadMore = () => {
        getData(page).then(res => {
            dispatch(getAnimations({animations: res?.data}));
        });
    };
  
    return (
        <div className="bg-slate-900 w-full">
            <div className="m-auto bg-white w-full md:max-w-sm relative">
                <Header />
                <ListTop />
                {
                    isLoading ? <Loading /> :
                    <InfiniteScroll
                        dataLength={animations?.length}
                        next={loadMore}
                        hasMore={true}
                        loader={<LoadingLoadMore />}
                        // endMessage={<b>! شما همه را دیده اید</b>}
                    >
                        <List />
                    </InfiniteScroll>
                }
            </div>
        </div>
    );
};
export default Page;