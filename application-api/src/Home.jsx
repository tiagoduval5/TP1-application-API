import { useState } from "react";
import "./Users.css";
import UserSearch from "./Search";

function Home({ users, loading }) {
    const [query, setQuery] = useState("");

    if (loading) {
        return <div className="loading">Chargement des utilisateurs...</div>;
    }

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="users-container">
            <h1>Liste des Utilisateurs</h1>

            {/* On passe query et setQuery à UserSearch */}
            <UserSearch query={query} setQuery={setQuery} />

            <table className="users-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Utilisateur</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Site web</th>
                        <th>Ville</th>
                        <th>Entreprise</th>
                        <th>Détails</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>@{user.username}</td>
                            <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                            <td><a href={`tel:${user.phone}`}>{user.phone}</a></td>
                            <td><a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                            <td><a href={`/users/${user.id}`} className="details-link">Voir Détails</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;