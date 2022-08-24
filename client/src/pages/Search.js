import React, { useState } from "react";
import ResultList from "../components/ResultList";

const Search = () => {
    const [query, setQuery] = useState('')
    const [content, setContent] = useState([])

    const onChange = (e) => {
        e.preventDefault()

        setQuery(e.target.value)

    }

    const onSubmit = async (e) => {
        e.preventDefault()

        console.log(query)

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.error) {
                    setContent(data.results)
                } else {
                    setContent([])
                }
            })

    }

    return (
        <section>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        placeholder='Search for a movie or show'
                        value={query}
                        onChange={onChange}
                    />
                </form>
            </div>
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

export default Search;