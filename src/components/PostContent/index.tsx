import mdToJsx from "../../utils/mdToJsx";

import Loading from "../Loading";

type PostContentProps = {
    readme?: string
}

const PostContent = ({ readme }: PostContentProps) => {

    if (readme) {
        return (
            <div className="markdown-body">
                {mdToJsx(readme)}
            </div>
        )
    } else {
        return (
            <Loading />
        )
    }
    
}

export default PostContent;