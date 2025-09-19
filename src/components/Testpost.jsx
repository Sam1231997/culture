import  { useState } from 'react';
import axios from 'axios';

const Testpost = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        profession: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/details', formData)
            .then(response => {
                setResponseMessage(`Success: ${response.data.name} added!`);
                setFormData({ name: '', age: '', profession: '' }); // Reset the form
            })
            .catch(error => {
                setResponseMessage('Error: Could not submit details');
                console.error('Error posting details:', error);
            });
    };

    return (
        <div>
            <h1>Post New Details</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            style={{ marginLeft: '10px' }} 
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Age:
                        <input 
                            type="number" 
                            name="age" 
                            value={formData.age} 
                            onChange={handleChange} 
                            required 
                            style={{ marginLeft: '10px' }} 
                        />
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        Profession:
                        <input 
                            type="text" 
                            name="profession" 
                            value={formData.profession} 
                            onChange={handleChange} 
                            required 
                            style={{ marginLeft: '10px' }} 
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default Testpost;
