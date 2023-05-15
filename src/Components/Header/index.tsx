import {memo} from "react";

import {ArrowRightIcon} from "Assets/SvgIcons";

export const Header = memo(() => {
    return (
        <button className="flex flex-row items-center h-12 sticky top-0 bg-white w-full px-4">
            <ArrowRightIcon />
            <span className="mr-2 text-sm text-gray-500">
                بازگشت
            </span>
        </button>
    );
});