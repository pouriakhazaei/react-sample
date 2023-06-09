import {memo} from "react";

const styles = {
    fill: "#f1db51",
    stroke: "#f1db51",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
};

export const StarIcon = memo((props) => {
    return (
        <svg data-name="vuesax/linear/star" xmlns="http://www.w3.org/2000/svg" width="14.145" height="14.145" viewBox="0 0 14.145 14.145" {...props}>
            <path 
                d="M6.916.845 7.954 2.92a1.281 1.281 0 0 0 .837.619l1.881.313c1.2.2 1.486 1.073.619 1.934L9.829 7.248a1.28 1.28 0 0 0-.307 1.067l.419 1.81c.33 1.433-.43 1.987-1.7 1.238L6.48 10.321a1.275 1.275 0 0 0-1.168 0l-1.763 1.043c-1.262.749-2.028.189-1.7-1.238l.419-1.81a1.28 1.28 0 0 0-.307-1.067L.5 5.786c-.861-.861-.584-1.734.619-1.934L3 3.539a1.284 1.284 0 0 0 .831-.619L4.87.845c.566-1.127 1.486-1.127 2.046 0z" 
                transform="translate(1.176 1.221)"
                {...styles} 
            />
        </svg>
    );
});