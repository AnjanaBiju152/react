// import React from 'react'

import { useState } from "react"

function Colors() {
    const [colors, setColors] = useState({
        first: 'red',
        second: 'orange',
        third: 'blue'
    })
    return (
        <>
            <h2 style={{ color: 'blue' }}>Colors</h2>
            <ul>
                <li>{colors.first}</li>
                <li>{colors.second}</li>
                <li>{colors.third}</li>

            </ul>
            <button onClick={() => setColors({ ...colors, first: 'yellow' })}>Change First</button>
            <button onClick={() => setColors({ ...colors, second: 'red'  })}>Change Second </button>
        </>
    )
}

export default Colors