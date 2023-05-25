import Avatar from '../images/272300934_3107554646184467_7867798624931820168_n.jpg';
import {Breadcrumb, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {linkSocial} from "../components/data";

const Profile = () => {
    return (
        <>
            <Container>

                <Breadcrumb style={{paddingTop: "15px"}}>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>

                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card"
                             style={{
                                 boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
                                 position: "relative",
                                 display: "flex",
                                 flexDirection: "column",
                                 minWidth: "0",
                                 wordWrap: "break-word",
                                 backgroundColor: "#fff",
                                 backgroundClip: "border-box",
                                 border: "0 solid rgba(0,0,0,.125)",
                                 borderRadius: ".25rem",
                             }}
                        >
                            <div className="card-body" style={{flex: "1 1 auto", minHeight: "1px", padding: "1rem"}}>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={Avatar} alt="avatar" className="rounded-circle" width="150"/>
                                    <div className="mt-3">
                                        <h4>Bùi Hoàng Phương</h4>
                                        <p className="text-secondary mb-1">0355137xxx</p>
                                        <p className="text-muted font-size-sm">Phong Phu, Binh Chanh, TPHCM</p>
                                        <button className="btn btn-primary me-3">Follow</button>
                                        <button className="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                {linkSocial.map(item => (
                                    <li key={item.id}
                                        className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">{item.icon}{" "}{item.title}</h6>
                                        <span className="text-secondary"><Link to={item.description} target="_blank">{item.description}</Link></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Full Name</h6></div>
                                    <div className="col-sm-9 text-secondary"></div>
                                </div>
                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                                    <div className="col-sm-9 text-secondary"></div>
                                </div>
                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Phone</h6></div>
                                    <div className="col-sm-9 text-secondary"></div>
                                </div>
                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Mobile</h6></div>
                                    <div className="col-sm-9 text-secondary"></div>
                                </div>
                                <hr/>

                                <div className="row">
                                    <div className="col-sm-3"><h6 className="mb-0">Address</h6></div>
                                    <div className="col-sm-9 text-secondary"></div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Profile