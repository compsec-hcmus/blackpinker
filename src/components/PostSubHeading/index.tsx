import style from "./post.module.scss";
import { Link } from "react-router-dom";

type Props = {
    name: string,
    tags: string[],
    index: number,
    location: string,
}

const PostSubHeading = ({ name, tags, index, location }: Props) => {
    return (
        <div className={style.subHeading}>

            <Link to={`${location}/${index}`}><h3>{name}</h3> </Link>

            <div>
                {tags.map((item, index) => (
                    <img src={item} alt="" key={index} className={style.tag} />
                ))}
            </div>

        </div>
    )
}

export default PostSubHeading;