import React, { useEffect, useState } from 'react'
import ResultList from '../components/ResultList';

import axios from 'axios'

const Shows = () => {
    const [content, setContent] = useState([])

    const fetchShows = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page-1`
        )
        console.log(data)
        setContent(data.results)
    }

    useEffect(() => {
        fetchShows();
    }, [])

    return (
        <section>
            <h1>Shows</h1>
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

export default Shows;