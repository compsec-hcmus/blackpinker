import Header from "../components/Header";
import Post from "../components/Post";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Home = () => {

    let post = useAppSelector(state => state.post)
    const location = useLocation().pathname.split("/").filter(x => x !== "")
    let name_nav: string[] = []

    for (let i of location) {
        post = post?.list[Number(i)];
        if (post) {
            name_nav.push(post.name)
        }
    }

    if (!post) {
        return <div>
            <NotFound />
        </div>
    }

    return (
        <div>
            <Header />

            <div className="container">
                <Post name_nav={name_nav}
                    detail={post.detail}
                    list={post.list}
                    index={1}
                    index_nav={location} />
            </div>

            <Footer />
        </div>
    )
}

export default Home;