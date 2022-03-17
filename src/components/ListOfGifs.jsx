import React, { useEffect, useState } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'
import './Gif.css'

function ListOfGifs({ params }) {
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

function BuscadorGif( { params } ){
    return <div>
            <input type="text" />
            <button className="buscardor">🔍</button>
        </div>
}

export {ListOfGifs , BuscadorGif}