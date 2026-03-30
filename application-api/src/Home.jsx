import "./Users.css";

function Home({ users, loading }) {
    if (loading) {
        return <div className="loading">Chargement des utilisateurs...</div>;
    }

    return (
        <div className="users-container">
            <h1>Liste des Utilisateurs</h1>
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
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>@{user.username}</td>
                            <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                            <td><a href={`tel:${user.phone}`}>{user.phone}</a></td>
                            <td><a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
