import { useState, useEffect } from "react";

export default function UserSearch() {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }
        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query, users]);

    return (
        <div>
            <input
                type="text"
                placeholder="Recherche par utilisateur..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            {loading && <p>Chargement des utilisateurs...</p>}
            <ul>
                {results.map(user => (
                    <li key={user.id}>
                        @{user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}