import {Link} from "react-router-dom";

const Homepage = () => {

    return (
        <>
            <section className="mt-3">
                <div className="grid items-start gap-6"
                     style={{gridTemplateColumns: "repeat(auto-fit, minmax(33rem, 1fr))"}}
                >
                    <div className="box">
                        <p className="text-[#999] overflow-hidden pb-4 text-3xl whitespace-no-wrap overflow-ellipsis">
                            Welcome <span></span>
                        </p>

                        <p className="text-[#999] overflow-hidden pb-4 text-3xl whitespace-no-wrap overflow-ellipsis">
                            Total comments : <span></span>
                        </p>

                        <p className="text-[#999] overflow-hidden pb-4 text-3xl whitespace-no-wrap overflow-ellipsis">
                            Posts liked : <span></span>
                        </p>

                        <Link to="#" className="btn">Update profile</Link>

                        <div className="flex gap-4">
                            <Link to="#" className="option-btn">likes</Link>
                            <Link to="#" className="option-btn">comments</Link>
                        </div>

                        <p className="text-2xl mt-5">Login or Register!</p>
                        <div className="flex gap-4">
                            <Link to="/login" className="option-btn">Login</Link>
                            <Link to="/register" className="option-btn">Register</Link>
                        </div>
                    </div>

                    <div className="box">
                        <p className="pb-[1rem] text-[#999] overflow-hidden overflow-ellipsis whitespace-nowrap"
                           style={{fontSize: "2rem"}}
                        >
                            Categories
                        </p>
                        <div className="flex flex-wrap gap-[1rem] pt-[1rem]">
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>nature</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>education</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>business</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>travel</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>news</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>gaming</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>sports</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>design</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>fashion</Link>
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}>personal</Link>
                            <Link to="#" className="btn">View all</Link>
                        </div>
                    </div>

                    <div className="box">
                        <p className="pb-[1rem] text-[#999] overflow-hidden overflow-ellipsis whitespace-nowrap"
                           style={{fontSize: "2rem"}}
                        >
                            Authors
                        </p>
                        <div className="flex flex-wrap gap-[1rem] pt-[1rem]">
                            <Link to="#" className="links bg-[#f5f5f5] text-black hover:bg-black hover:text-white" style={{border: "0 .5rem 1rem rgba(0,0,0,.1)", padding:"1rem 3rem", borderRadius:".5rem", fontSize:"2rem"}}></Link>
                            <Link to="#" className="btn">View all</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="posts-container">
                <h1 className="heading">Latest posts</h1>

                <div className="grid items-start gap-6 justify-center"
                     style={{gridTemplateColumns: "repeat(auto-fit, minmax(33rem, 1fr))"}}
                >
                    <form action="#" className="box" method="POST">
                        <input type="hidden" name="post_id" value=""/>
                        <input type="hidden" name="admin_id" value=""/>
                        <div className="flex items-center gap-[1.5rem] mb-2">
                            <i className="fas fa-user text-center h-[4.5rem] w-[5rem] bg-[#f5f5f5] text-black"
                            style={{
                                lineHeight: "4.2rem",
                                fontSize: "2rem",
                                border:".2rem solid var(--black)",
                                borderRadius: ".5rem"
                            }}
                            ></i>
                            <div className="mt-[.2rem] text-[#999]" style={{fontSize: "1.5rem"}}>
                                <Link to="#" className="text-[#4834d4] hover:text-black" style={{fontSize: "2rem"}}></Link>
                                <div></div>
                            </div>
                        </div>

                        <img src="#" className="post-image" alt=""/>

                        <div className="post-title"></div>
                        <div className="post-content content-150"></div>
                        <Link to="#" className="inline-btn">read more</Link>
                        <Link to="#" className="post-cat"> <i className="fas fa-tag"></i>
                            <span></span>
                        </Link>

                        <div className="icons">
                            <Link to="#">
                                <i className="fas fa-comment"></i><span></span>
                            </Link>
                            <button type="submit" name="like_post">
                                <i className="fas fa-heart"></i>
                                <span></span>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-[1rem]">
                    <Link to="#" className="btn inline-block mr-[1rem]">View all posts</Link>
                </div>
            </section>
        </>
    );
}

export default Homepage