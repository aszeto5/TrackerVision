import React from 'react'
import { Link } from 'react-router-dom'

const ResultList = ({ content }) => {
    return (
        <div className='card' key={content.id}>
            <Link to={`/single/${content.id}`}>
                <div className='poster'>
                    {content.poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
                            alt={`${content.title} Poster`}
                        />
                    ) : (
                        <div className='filler-poster'></div>
                    )}
                </div>
                <div className='title'>
                    {content.title ? content.title : content.name}
                </div>
                <div className='meta'>
                    {content.release_date}
                    {content.vote_average}
                </div>
            </Link>
            <button></button>
        </div>
    )
}

export default ResultList