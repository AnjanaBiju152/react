// import React from 'react'

function Home() {
    const course = 'mearn'
    return (
        <>
            {
                course === 'mearn' &&
                <div>
                    <h3>Subjects</h3>
                    <ul>
                        <li>Mongo</li>
                        <li>React</li>
                        <li>Express</li>
                        <li>Node</li>
                        <li>Angular</li>
                    </ul>
                </div>
            }


        </>
    )
}

export default Home