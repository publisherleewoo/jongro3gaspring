# redux

상대적으로 쉬운 [redux duck](https://medium.com/wasd/ducks-in-redux-606eaa61fd74) 구조로 진행 예정

[redux](https://redux.js.org/)

[react-redux](https://react-redux.js.org/)

[redux-saga](https://redux-saga.js.org/)

1. 일단 redux와 react-redux만 설치하고 차후 redux-saga를 보기로한다.

```bash
npm i redux react-redux
```

## [flux 패턴](https://haruair.github.io/flux/docs/overview.html)을 기초로한 redux 패턴.

```bash
commit c79e5e5dc130733cbba515191919661e7437565a
```

## action.type값이 같아야 하므로 상수처리

```bash
commit ed80e79519f06fc7ce164cb782a253dbf5f10db6
```

리덕스는 위의 패턴을 base로 한다.

보기에 쉬워 보일수 있지만, 확장 되었을때 신경쓸것이 많아지며

추가로 비동기 요청시에 redux-saga가 붙고([es6 generator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator) 개념을 숙지하여야한다),

리액트에서 가장 중요한 [불변성](https://poiemaweb.com/js-immutability)(immutable)의 개념은 필수 개념인데 이또한 redux에 적용된다.

immutable의 개념이 싫다면 [immer.js](https://github.com/immerjs/immer)를 사용해도 되지만 리액트의 특징으로써 무조건 이해하길 권장한다.
