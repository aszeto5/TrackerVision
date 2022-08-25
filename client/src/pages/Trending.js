import React, { useEffect, useState } from 'react';
import ResultList from '../components/ResultList';

import axios from 'axios';

const Trending = () => {

    const [content, setContent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        )
        console.log(data)
        setContent(data.results)
    }

    useEffect(() => {
        fetchTrending();
    }, [])

    return (
        <section>
            <h1>trending</h1>
            <div>
                {content.length > 0 && (
                    <ul className="cards">
                        {content.map(content => (
                            <li key={content.id}>
                                <ResultList content={content} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default Trending