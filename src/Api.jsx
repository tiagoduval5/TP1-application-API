import { useEffect, useState } from "react";
import AppRoutes from "./router";

function Api() {
	const [users, setUsers] = useState([]);
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
			.catch((error) => {
				console.error("Erreur:", error);
				setError("Impossible de charger les utilisateurs. Veuillez réessayer plus tard.");
				setLoading(false);
			});
	}, []);

	return <AppRoutes users={users} loading={loading} error={error} />;
}

export default Api;
