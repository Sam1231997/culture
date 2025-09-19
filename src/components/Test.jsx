import  { useState } from 'react';
import axios from 'axios';

const DetailsList = () => {
    const [details, setDetails] = useState([]);

    // Function to fetch details from the backend
    const fetchDetails = () => {
        axios.get('http://localhost:3000/api/details')
            .then(response => {
                setDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching details:', error);
            });
    };

    return (
        <div>
            <h1>Details List</h1>
            {/* Button to fetch details */}
            <button 
                onClick={fetchDetails} 
                style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}
            >
                Fetch Details
            </button>

            {/* Display the details */}
            <ul>
                {details.map(detail => (
                    <li key={detail.id}>
                        {detail.name} - {detail.profession} (Age: {detail.age})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetailsList;
