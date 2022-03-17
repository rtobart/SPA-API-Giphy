import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'
import './Gif.css'

export default function ListOfGifs({ params }) {
    const { keyword } = params
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs))
    }, [keyword])

    return <div className="divGif">
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    id={id}
                    url={url}
                />
            )
        }
    </div>


}