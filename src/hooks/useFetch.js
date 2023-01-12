import axios from 'axios';
import { useEffect, useState } from 'react';


export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        };
        fetchData()
    }, [url]);

    return {data, loading, error};
    
}