import './Home.css'
import { useState } from 'react';

export default function Home() {


    const [screen, setScreen] = useState("search");


    return (
        <>
            <div>

                <main className='home-cont'>
                    {screen == "search" ? <SearchScreen/> : null}
                                        

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
                <p className='search-title'>Find your forecast</p>
                <input type="text" className='search-field' placeholder='Search'/>
            </div>
            <div className=''>

            </div>
        </section>
    )
}