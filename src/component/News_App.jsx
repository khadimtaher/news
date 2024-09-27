import { useEffect, useState } from "react";
import { Carts } from "./Carts"

export const News_App = () => {
    const [search, setsearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "b2977afe222642a0a211c904f4a9f5ee";
    const getdata = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json()
        setNewsData(jsonData.articles);
    }
    useEffect(() => {
        getdata()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleData = (e) => {
        setsearch(e.target.value);
        console.log(e.target.value);

    }
    const UserInput = (e) => {
        setsearch(e.target.value);
    }


    return (
        <>
            <div className="topContainer">
                <nav>
                    <img className="logo" src={'./newsLogo.png'}></img>
                    <div className="search_content">
                        <input className="search" type="text" placeholder="Search News" value={search} onChange={handleData} />
                        <button onClick={getdata} className="search_btn">Search </button>
                    </div>
                </nav>
                <div className="cart_container">
                    <div className="top_heading">
                        <h1> <marquee >All news is trending</marquee></h1>
                    </div>
                </div>
                <div className="buttonsContainer">
                    <div className="top_news">
                        <h1>Top <span>5</span> News</h1>
                    </div>

                    <div className="btn">
                        <button onClick={UserInput} value="Sports">Sports</button>
                        <button onClick={UserInput} value="Entertainment">Entertainment</button>
                        <button onClick={UserInput} value="Politics">Politics</button>
                        <button onClick={UserInput} value="Health">Health</button>
                        <button onClick={UserInput} value="Fitness">Fitness</button>
                    </div>
                </div>
                <hr />
            </div>

            {newsData ? <Carts data={newsData} /> : null}


        </>
    )
}