import style from "./post.module.scss";
import { Link } from "react-router-dom";


type PostProps = {
    title: string,
    tag?: string[],
    index?: number,
}

const Post = ({ title, index, tag }: PostProps) => {
    return (
        <div className={style.post}>

            {index === undefined
                ? <h2>{title}</h2>
                : <Link to={`/challenge/${index}`}><h2>{title}</h2> </Link>
            }

            {tag && tag.map((item, index) => (
                <span key={index} className={style.tag}>
                    <img src={item} alt="" />
                </span>
            ))}
        </div>
    )
}

export default Post;