import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
    );
}

export default App;
