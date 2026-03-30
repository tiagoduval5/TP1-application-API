import { useParams, useNavigate } from "react-router-dom";
import "./UserDetails.css";

function UserDetails({ users }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return (
            <div className="details-container">
                <button onClick={() => navigate("/")} className="back-btn">← Retour</button>
                <p>Utilisateur non trouvé</p>
            </div>
        );
    }

    return (
        <div className="details-container">
            <button onClick={() => navigate("/")} className="back-btn">← Retour</button>
            <div className="details-card">
                <h1>{user.name}</h1>
                <p className="username">@{user.username}</p>
                
                <div className="details-section">
                    <h2>Informations Personnelles</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="label">Email:</span>
                            <a href={`mailto:${user.email}`}>{user.email}</a>
                        </div>
                        <div className="detail-item">
                            <span className="label">Téléphone:</span>
                            <a href={`tel:${user.phone}`}>{user.phone}</a>
                        </div>
                        <div className="detail-item">
                            <span className="label">Site Web:</span>
                            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                        </div>
                    </div>
                </div>

                <div className="details-section">
                    <h2>Adresse</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="label">Rue:</span>
                            <span>{user.address.street}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Suite:</span>
                            <span>{user.address.suite}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Ville:</span>
                            <span>{user.address.city}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Code Postal:</span>
                            <span>{user.address.zipcode}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Latitude:</span>
                            <span>{user.address.geo.lat}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Longitude:</span>
                            <span>{user.address.geo.lng}</span>
                        </div>
                    </div>
                </div>

                <div className="details-section">
                    <h2>Entreprise</h2>
                    <div className="details-grid">
                        <div className="detail-item">
                            <span className="label">Nom:</span>
                            <span>{user.company.name}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Slogan:</span>
                            <span>{user.company.catchPhrase}</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Domaine:</span>
                            <span>{user.company.bs}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;
