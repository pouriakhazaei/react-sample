import {memo} from "react";

import {Filter} from "../";

export const ListTop = memo(() => {    
    return (
        <div className="flex flex-row justify-between items-center mt-3 bg-white w-full sticky top-12 py-2">
            <div className="flex flex-col pr-4">
                <b className="text-sm">
                    چیارو ببینه؟
                </b>
                <small className="text-gray-500 mt-1">
                    مناسب برای 3 تا 7 سال
                </small>
            </div>
            <Filter />
        </div>
    );
});