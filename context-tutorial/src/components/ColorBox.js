import ColorContext, {ColorConsumer} from "../contexts/color";
import {useContext} from "react";

//Render Props 패턴 사용하였음
// ColorContext.Consumer 태그 사이(children 자리)에 함수를 넣으면 그 함수 값이 리턴되어 출력된다
// ex)
/*
* // result
* ...
* return (
* <test>
*   {value => value * 2} // result = 4
* </test>
* );
*
* // test
* export default function test({ children }) {
*   return (<div>{children(2)}</div>);
*
* }
*/

const ColorBox = () => {
    const { state } = useContext(ColorContext);

    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subColor
                }}
            />
        </>
    );
};

export default ColorBox;
