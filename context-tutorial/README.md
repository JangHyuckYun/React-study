# Change Color & subColor
***
색상 선택 창에서 마우스 왼쪽 클릭 시 큰 박스의 색상을, 오른쪽 클릭 시 작은 박스의 색상을 변경하는 기능이 있다.
***

## Available Scripts

In the project directory, you can run:

### `npm init`

project에 필요한 module들 다운로드.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

***
## 알게 된 점
- 전체 색상 및 색상 변경 함수를 전역에서 변수를 관리하는 방법에 대해 알게 되었다.
- Render Props Pattern
  - ex) 
``` javascript
     // test component
     export default function test({ children }) {
       return (<div>{children(2)}</div>);
     }
     
     return (
        <test>
            {value => value * 2} // result = 4
        </test>
     );
```
- Context.Consumer
  - 책을 보면서 Consumer은 createContext로 생성된 context의 value 값을 받아와 원하는곳에 뿌리는것을 Consumer 이라고 이해하였다.
  - ex) 
```javascript
// contexts/color.js
const ColorContext = createContext({ test: 'Hi' });
const { Consumer: ColorConsumer } = ColorContext;
const ColorProvider = () => { ... };

export { ColorProvider, ColorConsumer };
export default ColorContext;
// =====================================


// components/ColorBox.js
import { ColorConsumer } from '../contexts/color';

// ※ ColorConsumer의 children은 무조건 함수로 받아야 한다.
export default function ColorBox() {
    ...
    return (
       <ColorConsumer>
            {(value) => (
                <p>{value.test}</p> // value.test = Hi
            )}
       </ColorConsumer>        
    );
}
```
- useContext
  - useContext는 Consumer보다 좀 더 쉽게 값을 받고 뿌릴 수 있게 해준다.
  - useContext함수의 첫번째 인자값에 자신이 만든 customContext를 넣어주면 그 context의 value 값이 return된다.
  - ex)
```javascript
// contexts/color.js
const ColorContext = createContext({ test: 'Hi' });
const ColorProvider = () => { ... };

export { ColorProvider };
export default ColorContext;
// =====================================


// components/ColorBox.js
import { ColorConsumer } from '../contexts/color';

// ※ ColorConsumer의 children은 무조건 함수로 받아야 한다.
export default function ColorBox() {
    const { test } = useContext(ColorContext);
    return (
        <p>{test}</p> // value.test = Hi
    );
}
```
