import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


// Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// Jumbotron
const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid bg-light text-dark py-5">
            <div className="container">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        </div>
    );
};

// Card
const Card = ({ title, text, imgSrc }) => {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3"> 
            <div className="card mb-4">
                <img src={imgSrc} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    );
};

// App
function App() {
    const cardsData = [
        {
            title: "Card title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgSrc: rigoImage
        },
        {
            title: "Card title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgSrc: rigoImage
        },
        {
            title: "Card title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgSrc: rigoImage
        },
        {
            title: "Card title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imgSrc: rigoImage
        }
    ];

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="container my-5">
                <div className="row">
                    {cardsData.map((card, index) => (
                        <Card key={index} title={card.title} text={card.text} imgSrc={card.imgSrc} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;