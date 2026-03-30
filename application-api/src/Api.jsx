import { useEffect, useState } from "react";
import Home from "./Home";

function Api() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erreur:", error);
                setLoading(false);
            });
    }, []);

    return <Home users={users} loading={loading} />;
}

export default Api;
