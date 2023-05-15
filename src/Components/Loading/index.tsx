import {memo} from "react";

import {LoadingIcon} from "Assets/SvgIcons";

export const Loading = memo(() => {
    return (
        <div className="h-screen flex justify-center pt-60">
            <LoadingIcon />
        </div>
    );
});

export const LoadingLoadMore = memo(() => <span className="text-xs">درحال دریافت آیتم های بیشتر ...</span>);