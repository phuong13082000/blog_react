import {Helmet} from "react-helmet";

export function Title({title}) {
    return <Helmet><title>{title}</title></Helmet>
}
