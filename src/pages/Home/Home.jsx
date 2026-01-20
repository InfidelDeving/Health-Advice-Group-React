import './Home.css'
import { useState } from 'react';

export default function Home() {


    const [screen, setScreen] = useState("search");

    return (
        <>
            <div>

                <main>
                    {screen == "search" ?? <SearchScreen/> }
                    

                </main>

            </div>
        </>
    );
}

function SearchScreen() {
    const [search, setSearch] = useState("");

    return (
        <section>
            <div className='location-search'>
                SEARCH SCREEN
            </div>
            <div className=''>

            </div>
        </section>
    )
}