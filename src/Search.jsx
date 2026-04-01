import { useState, useEffect } from "react";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur lors du chargement des utilisateurs");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(query.toLowerCase()),
    );
    setResults(filtered);
  }, [query, users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Recherche par utilisateur..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Chargement des utilisateurs...</p>}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}
      <ul>
        {results.map((user) => (
          <li key={user.id}>@{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
