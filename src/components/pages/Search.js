import React, { useState } from 'react';
import '../../components/pages/Search.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Make API call with the 
        try {
            const response = await fetch(`http://localhost:5000/colleges/search?searchTerm=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(JSON.stringify(searchResults));
    return (
        <div>
            <br/>
            {searchResults.length === 0 && (
                <h9>Please Enter Valid College Code or College Name.</h9>)
            }
             <br/> 
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                &nbsp; &nbsp;
                <button type="submit">Search</button>
            </form>
            <br/> <br/> <br/>
            {searchResults !== undefined && searchResults !== [] && searchResults.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>College Code</th>
                            <th>College Name</th>
                            <th>University</th>
                            <th>District</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((item) => (
                            <tr key={item.sno}>
                                <td>{item.collegeCode}</td>
                                <td>{item.name}</td>
                                <td>{item.university}</td>
                                <td>{item.district}</td>
                                <td><a href={item.website} target="_blank">{item.website}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default SearchBar;
