import { createStore } from "redux";

const one = element => document.querySelector(element);

const
    divToggle = one(".toggle"),
    counter = one("h1"),
    btnIncrease = one("#increase"),
    btnDecrease = one("#decrease");

const
    TOGGLE_SWITCH = 'TOGGLE_SWITCH',
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE';

const
    toggleSwitch = () => ({type: TOGGLE_SWITCH}),
    increase = difference => ({type: INCREASE, difference}),
    decrease = () => ({type: DECREASE});

const initialState = {
    toggle: false,
    counter: 1
};

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state, // 불변성 유지
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

const render = () => {
    const state = store.getState();

    // toggle 처리
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    // counter 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

console.log(btnIncrease, btnDecrease);

// onclick 작성 시 onClick 라고 대문자 포함하면 실행이 안된다.
divToggle.onclick = () => {console.log("toggle"); store.dispatch(toggleSwitch())};
btnIncrease.onclick = () => {console.log('click'); store.dispatch(increase(1))};
btnDecrease.onclick = () => {console.log('click decrease'); store.dispatch(decrease())};
