import Header from "../components/Header";
import PostHeading from "../components/PostHeading";
import { useAppSelector } from "../redux/hooks";

const Home = () => {

    const challenges = useAppSelector(state => state.challenges.challenges);

    return (
        <div>
            <Header />

            <div className="container mt-80">

                {challenges.map((item, index) => (
                    <PostHeading title={item.name} tag={item.tag} index={index} key={index} />
                ))}


            </div>
        </div>
    )
}

export default Home;