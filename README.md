# React setting

Node.js 설치 후

# CRA 설치

```bash
$ npx create-react-app <project-name>
```

설치 후 프로젝트 폴더 진입

```bash
$ cd <project-name>
```

```bash
$ npm run start
```

브라우저에서 [localhost:3000](http://localhost:3000) 접속했을때 화면 뜨면 cra(create-react-app) 설치 성공

## **React-router-dom 설치**

```bash
$ npm i react-router-dom
```

원론적으로 리액트는 재활용을위한 분자,원자단위의 [atomic design](https://brunch.co.kr/@ultra0034/63) 패턴을 따라야하나,  일단 제작에 신경쓰고, 차후 리팩토링

라우터를 위해 일단 pages 폴더 생성

```bash
mkdir pages
```

HomePage.js, AboutPage.js파일 생성을 하고 아래 이미지와 같이페이지 컴포넌트 기본셋팅을한다.(저장)

아래와 같이 함수형 컴포넌트를 사용하는 이유는,  최근 페이스북이 권장하면서도 리액트가 [Hooks](https://ko.reactjs.org/docs/hooks-intro.html)로 가는 추세이다.(코드도 더 짧아진다) .

주의할점은 컴포넌트 파일명 앞글자는 무조건 대문자여야 한다.

![React%20setting%2088fb14fe2637448e83777d90785fbe7c/Untitled.png](React%20setting%2088fb14fe2637448e83777d90785fbe7c/Untitled.png)

![React%20setting%2088fb14fe2637448e83777d90785fbe7c/Untitled%201.png](React%20setting%2088fb14fe2637448e83777d90785fbe7c/Untitled%201.png)

vscode에서 ctrl+shift+x를 누르면 마켓이 뜬다. 

이곳에서 Prettier - Code formatter를 설치한다.

코드 정렬 프로그램인데,  전체 선택후(ctrl+a)   alt+shift+f를 누르면 코드를 정렬해준다.

App.js에 가서  아래 코드를 붙여넣기 한다.

아래 코드는 router 설정이다.

 react-router-dom 라이브러리를 사용하였다. 

래퍼런스 사이트를 참고하여 아래와같은 설정을 하였다. 자세한 설명은 [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)  참고.

```jsx
import React from "react";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <BrowserRouter>
            <Link to="/">홈</Link>
            <Link to="/About">어바웃</Link>

            <Switch>
                <Route path={"/"} exact>
                    <HomePage></HomePage>
                </Route>
                <Route path={"/about"} exact>
                    <AboutPage></AboutPage>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
```

아래 코드로 다시 localhost:3000을 띄워서 확인해보자.

```bash
npm run start
```