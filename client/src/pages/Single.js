import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ResultList from '../components/ResultList';

import axios from 'axios'

const Single = () => {
    const { id: contentId } = useParams()
    const [content, setContent] = useState([])

    const fetchContent = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/find/${contentId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&external_source=imdb_id`
        )
        console.log(data)
        setContent(data.results)
    }

    useEffect(() => {
        fetchContent();
    }, [])

    return (
        <section>
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

export default Single;