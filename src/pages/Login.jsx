import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <section
                className="flex items-center justify-center pt-3"
                style={{minHeight: "calc(100vh-16rem)"}}
            >
                <form action=""
                      className="bg-white text-center w-[50rem] p-[2rem]"
                      style={{
                          borderRadius: ".5rem",
                          boxShadow: "0 .5rem 1rem rgba(0,0,0,.1)",
                      }}
                >
                    <h3 className="uppercase text-black mb-[1rem]" style={{fontSize: "2.5rem"}}>
                        Login
                    </h3>

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="enter your email"
                        className="w-full bg-[#f5f5f5] p-[1.4rem] text-black"
                        style={{
                            fontSize:"1.4rem",
                            margin:"1rem 0",
                            border:".2rem solid black",
                            borderRadius:".5rem"
                        }}
                        maxLength="50"
                    />

                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="enter your password"
                        className="w-full bg-[#f5f5f5] p-[1.4rem] text-black"
                        style={{
                            fontSize:"1.4rem",
                            margin:"1rem 0",
                            border:".2rem solid black",
                            borderRadius:".5rem"
                        }}
                        maxLength="50"
                    />

                    <input
                        type="submit"
                        value="Login now"
                        name="submit"
                        className="w-full bg-[#f5f5f5] p-[1.4rem] text-black"
                        style={{
                            fontSize:"1.4rem",
                            margin:"1rem 0",
                            border:".2rem solid black",
                            borderRadius:".5rem"
                        }}
                    />

                    <p className="pt-[1rem] text-[#999]" style={{fontSize: "2rem"}}>
                        Don't have an account?{" "}
                        <Link className="text-orange-500 hover:text-black hover:underline"
                              to="/register"
                        >
                            Register now
                        </Link>
                    </p>
                </form>

            </section>
        </>
    );
}

export default Login