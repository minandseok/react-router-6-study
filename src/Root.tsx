import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <div>
      <Header/> 
      {/* Outlet은 react-router-dom 라이브러리에서 제공하는 컴포넌트로, 현재 URL에 맞는 하위 라우트를 여기서 렌더링 */}
      <Outlet context={{darkMode: true}}/>
    </div>
  );
}

export default Root;