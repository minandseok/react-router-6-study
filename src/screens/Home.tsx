import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
    const [readSearchParms, setSearchParms] = useSearchParams();
    console.log(readSearchParms.get("geo"));
    setTimeout(() => {
        setSearchParms({
            day: "today",
            tomorrow: "123",
        })
    })
    
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => ( // users 배열을 순회하여 각 user 객체에 대해 li 요소를 생성
                    <li key={user.id}>
                        {/* Link는 react-router-dom에서 제공하며, 해당 사용자 페이지로 이동할 수 있도록 해줍니다 */}
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;