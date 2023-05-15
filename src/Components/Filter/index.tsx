import {useSelector, useDispatch} from "react-redux";
import {useSpring, a, config} from "react-spring";
import {useDrag} from "react-use-gesture";
import {memo, Fragment} from "react";

import {toggleLoading, getData, getAnimations} from "Redux/AppSlice";
import type {RootState} from "Redux/Store";
import {SortIcon} from "Assets/SvgIcons";
const height = 250;

export const Filter = memo(({}) => {
    const {page} = useSelector((state: RootState) => state.appSlice);
    const [{y}, set] = useSpring(() => ({y: height}));
    const dispatch = useDispatch();

    const open = ({ canceled }: any) => {
        set({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff });
    };

    const close = (velocity: number = 0) => {
        set({ y: height, immediate: false, config: { ...config.stiff, velocity } });
    };

    const display = y.to((py) => (py < height ? "block" : "none"));

    const bind = useDrag(({last, vxvy: [, vy], movement: [, my], cancel, canceled}) => {
        if (my < -70) cancel();
        if (last) {
            my > height * 0.5 || vy > 0.5 ? close(vy) : open({ canceled });
        } 
        else set({ y: my, immediate: true })},
        {
            initial: () => [0, y.get()], filterTaps: true, bounds: {top: 0}, rubberband: true
        }
    );

    const onFilterData = (filterKey: string) => {
        dispatch(toggleLoading());
        getData(page, filterKey).then(res => {
            dispatch(getAnimations({animations: res?.data, isFilter: true}));
        })
        .finally(() => dispatch(toggleLoading()));
        close();
    };
    
    return (
        <Fragment>
            <button className="flex flex-row items-center pl-4" onClick={open}>
                <SortIcon /> <span className="text-gray-500 text-xs mr-2">مرتب سازی</span>
            </button>
            <a.div 
                className="sheet w-full md:max-w-sm bg-white shadow-2xl fixed rounded-t-2xl z-50 h-52 px-5 border-t-2" 
                style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y, height: "calc(100vh + 100px)"}}
                {...bind()} 
            >
                <div className="w-14 h-1 bg-gray-100 rounded-md m-auto mt-3" />
                <h2 className="text-xl mt-5 font-semibold">
                    مرتب سازی بر اساس
                </h2>
                <ul>
                    {
                        filterItems.map(item => (
                            <li key={item.id} className="flex items-center my-6" onClick={() => onFilterData(item.filterKey)}>
                                <input 
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 cursor-pointer"
                                    id={`${item.filterKey}`} 
                                    name="list-radio"
                                    type="radio" 
                                    // value={item.filterKey} 
                                />
                                <label 
                                    htmlFor={`${item.filterKey}`} 
                                    className="text-md mr-2 font-semibold cursor-pointer"
                                >
                                    {item.text}
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </a.div>
        </Fragment>
    );
});

const filterItems = [
    {id: 10, text: "بیشترین امتیاز", filterKey: "rate"},
    {id: 20, text: "بیشترین بازدید", filterKey: "view"},
    {id: 30, text: "جدیدترین", filterKey: "newest"}
];