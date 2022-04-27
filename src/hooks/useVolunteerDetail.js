import { useEffect, useState } from "react";


const useVolunteerDetail = volunteerId => {
    const [volunteer, setVolunteers] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/volunteers/${volunteerId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setVolunteers(data))
    }, [volunteerId]);
    return [volunteer];
};

export default useVolunteerDetail;