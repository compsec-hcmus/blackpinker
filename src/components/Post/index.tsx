import style from "./post.module.scss";
import { post } from "../../interface/post";
import renderHTML from "html-react-parser";

import PostSubHeading from "../PostSubHeading";
import Breadcrumb from "../Breadcrumb";


type PostProps = {
    name_nav: string[]
    detail: string,
    list: post[],
    index_nav: string[],
    index: number,
}

const Post = ({ name_nav, detail, list, index, index_nav }: PostProps) => {

    return (
        <div className={style.post}>

            <Breadcrumb index_nav={index_nav} name_nav={name_nav} />

            <div className="markdown-body">
                {renderHTML(detail)}
            </div>

            <div>
                {list.map((item, index) => (
                    <PostSubHeading name={item.name}
                        tags={item.tags}
                        index={index}
                        key={index}
                        location={index_nav.join('/')} />
                ))}
            </div>


        </div>
    )
}

export default Post;