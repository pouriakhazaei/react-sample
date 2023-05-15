import {useSelector} from "react-redux";
import {memo} from "react";

import type {RootState} from "Redux/Store";
import {StarIcon} from "Assets/SvgIcons";

export const List = memo(() => {
    const {animations} = useSelector((state: RootState) => state.appSlice);
    return (
        <div className="grid grid-cols-2 gap-2 px-4">
            {
                animations.map(item => (
                    <div key={item?.id + item.reviewsTitle} className="my-3">
                        <img 
                            src={item?.reviewsThumbnailUrl}
                            className="rounded-2xl h-64 w-full"
                        />
                        <p className="mt-2 text-xs truncate">
                            {item?.reviewsTitle}
                        </p>
                        <div className="flex items-center">
                            <StarIcon />
                            <span className="mr-2 mt-2 text-xs font-semibold">
                                {item?.reviewsRate}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
});