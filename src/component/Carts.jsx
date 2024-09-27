/* eslint-disable react/prop-types */
export const Carts = ({data}) => {
    console.log(data);

    return (
        <>
            <div className="cartsContainer">
                {data.map((item, index) => (
                    item.urlToImage ? (
                        <div className="carts" key={index}>
                            <img className="cartImage" src={item.urlToImage} alt="News" />
                            <a href={item.url}>{item.title}</a>
                            <p>{item.description}</p>
                            <button type="button" onClick={() => window.open(item.url)}>Learn More →</button>
                        </div>
                    ) : null
                ))}

            </div>
            <footer>Copyright Notice: &copy; 2024 Taher. All Rights Reserved.</footer>
        </>
    );
}
