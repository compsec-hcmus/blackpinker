import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'

import style from './postnav.module.scss'

type postNavProps = {
    id: number,
}

const PostNav = ({ id }: postNavProps) => {

    const challenges = useAppSelector(state => state.challenges.challenges);

    // if id out of range, return empty component
    if (id < 0 || id >= challenges.length) return (<div></div>);

    const leftTitle = id > 0 ? challenges[id - 1].name : null;
    const rightTitle = id < challenges.length - 1 ? challenges[id + 1].name : null;

    return (
        <div className={style.postnav}>
            {leftTitle && <Link className={style.left} to={`/challenge/${id - 1}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 12">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                {leftTitle}
            </Link>}

            {rightTitle && <Link className={style.right} to={`/challenge/${id + 1}`}>
                {rightTitle}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 12">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </Link>}
        </div>

    )
}

export default PostNav;