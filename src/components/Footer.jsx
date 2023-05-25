import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <footer className="mt-3 bg-gray-100 dark:bg-black" aria-labelledby="footer-heading">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-4">

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-white">Noi dung</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><Link to="#" className="text-base hover:underline hover:decoration dark:text-white">Noi dung 1</Link></li>
                                    <li><Link to="#" className="text-base hover:underline hover:decoration dark:text-white">Noi dung 2</Link></li>
                                </ul>
                            </div>

                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-white">Noi dung 1</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><Link to="#" className="text-base hover:underline hover:decoration dark:text-white">Noi dung 1-1</Link></li>
                                    <li><Link to="#" className="text-base hover:underline hover:decoration dark:text-white">Noi dung 1-2</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-white">Category</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><Link to="#" className="text-base hover:underline hover:decoration dark:text-white">Category 1</Link></li>
                                    <li><Link to="#" className="text-base hover:underline hover:decoration dark:text-white">Category 2</Link></li>
                                </ul>
                            </div>

                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold uppercase tracking-wider dark:text-white">Connect</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    <li><Link to="#" target="_blank" className="text-base hover:underline hover:decoration dark:text-white">Link 1</Link></li>
                                    <li><Link to="#" target="_blank" className="text-base hover:underline hover:decoration dark:text-white">Link 2</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 xl:mt-0">
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-dark dark:text-white">© 2023</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer