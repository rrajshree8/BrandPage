const Content=()=>{
    return(
        <main className="cont">
        <div className="h-cont">
            <h1>YOUR FEET DESERVE BEST</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="h-btn">
            <button className="sh">Shop Now</button>
            <button className="cg">Category</button>
        </div>
        <div className="shopping">
        <p>Also Available On</p>
        </div>
        <div className="brd-ic">
            <img src="/images/flip.png" alt="Amazon-logo" />
            <img src="/images/amz.png" alt="Flipkart-logo" />
        </div>
        </div>
        <div className="h-img">
        <img src="/images/shoe.png" alt="Shoe-logo" width={800} height={800} />
        </div>
        </main>
    );
};
export default Content