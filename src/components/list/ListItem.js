import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ListItem({ item = {}, to, title, date }) {
    const imageToBackground = {
        backgroundImage: `url(${item.photo_url})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <li className="
            inline-block mb-[.5em] w-[100%] hover:opacity-50
            sm:w-[calc(50%_-_.5em)] sm:[&:nth-child(2n)]:mr-0 sm:mr-[1em]
            md:w-[calc((100%_-_2em)_/_3)] md:[&:nth-child(3n)]:mr-0 md:[&:nth-child(2n)]:mr-[1em]
            " title={item.name}>
            <Link to={to}>
                {
                    item.photo_url ?
                        <p className="bg-slate-200 h-[200px]" style={imageToBackground}>
                        </p> :
                        <p className="p-[.5em] bg-slate-400 text-center text-slate-50 h-[200px] flex items-center justify-center">
                            <span className="text-[100px] inline-block">
                                <FaImage />
                            </span>
                        </p>
                }
                <p className="whitespace-nowrap text-ellipsis w-[100%] overflow-hidden">{title}</p>
                {date && <p>{date.split("T")[0]}</p>}
            </Link>
        </li>
    );
}