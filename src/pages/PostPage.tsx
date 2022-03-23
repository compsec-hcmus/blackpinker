import Header from "../components/Header";
import PostContent from "../components/PostContent";
import PostHeading from "../components/PostHeading"
import PostNav from "../components/PostNav";

import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";


const PostPage = () => {

    const id = parseInt(useParams().id as string);

    const [title, setTitle] = useState<string>("");
    const [readme, setReadme] = useState<string | undefined>(undefined);
    const [tag, setTag] = useState<string[] | undefined>([]);
    const challenges = useAppSelector(state => state.challenges.challenges);

    const _chalange = (id < 0 || id >= challenges.length) ? null : challenges[id];
    // TODO: render 404 page if id out of range

    useEffect(() => {
        if (_chalange) {
            setTitle(_chalange.name);
            setReadme(_chalange.readme);


            setTag(_chalange.tag);
        }
    }, [_chalange])

    return (
        <div>
            <Header />

            <div className="container">
                <PostNav id={id} />
                <PostHeading tag={tag} title={title} />

                <PostContent readme={readme} />
                <PostNav id={id} />
            </div>

        </div>
    )
}

export default PostPage;