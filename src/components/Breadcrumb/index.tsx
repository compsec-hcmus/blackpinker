import { Link } from 'react-router-dom'
import style from './postnav.module.scss'


type Props = {
    name_nav: string[],
    index_nav: string[],
}

const Breadcrumb = ({ name_nav, index_nav }: Props) => {
    return (
        <div className={style.breadCrumb}>
            {name_nav.map((item, index) => (
                <Link key={index} className={style.item} to={index_nav.slice(undefined, index + 1).join('/')}>
                    <span>{item}</span>
                </Link>
            ))}
        </div>
    )
}

export default Breadcrumb;