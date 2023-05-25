import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <>
            <footer style={{padding: "75px", backgroundColor: "#374250"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h3>Col 1</h3>
                            <p className="text-white">Phone: </p>
                            <ul className="list-unstyled text-sm text-white">
                                <li><span className="opacity-50">Monday-Friday: </span>9.00 am - 8.00 pm</li>
                                <li><span className="opacity-50">Saturday: </span>10.00 am - 6.00 pm</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h3>Col 2</h3>
                            <ul>
                                <li><Link to="#">Item 1</Link></li>
                                <li><Link to="#">Item 2</Link></li>
                                <li><Link to="#">Item 3</Link></li>
                                <li><Link to="#">Item 4</Link></li>
                                <li><Link to="#">Item 5</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h3>Col 3</h3>
                            <ul>
                                <li><Link to="#">Item 1</Link></li>
                                <li><Link to="#">Item 2</Link></li>
                                <li><Link to="#">Item 3</Link></li>
                                <li><Link to="#">Item 4</Link></li>
                                <li><Link to="#">Item 5</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h3>Col 4</h3>
                            <ul>
                                <li><Link to="#">Item 1</Link></li>
                                <li><Link to="#">Item 2</Link></li>
                                <li><Link to="#">Item 3</Link></li>
                                <li><Link to="#">Item 4</Link></li>
                                <li><Link to="#">Item 5</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer