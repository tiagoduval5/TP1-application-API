import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserDetails from "./UserDetails";

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

    return (
        <Routes>
            <Route path="/" element={<Home users={users} loading={loading} />} />
            <Route path="/users/:id" element={<UserDetails users={users} />} />
        </Routes>
    );
}

export default Api;
