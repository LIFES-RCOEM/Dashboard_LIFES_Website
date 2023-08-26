import { Ambulance } from "../../types";

interface PROPS { 
    ambulances: Ambulance[],
    pageNo : number,
    handleNextPage : () => void,
    handlePrevPage : () => void
}
const Pagination = (props: PROPS) => {
    const { pageNo} = props;

    return (
            <nav className="flex justify-center items-center" aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li className={`${pageNo > 1 ? 'bg-black rounded-3xl font-bold' : 'text-gray-500'}`}
                        onClick={props.handlePrevPage}
                    >
                        <button
                            
                            className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-white bg-neutral-700 dark:hover:text-white hover:cursor-pointer`}
                            >Previous
                        </button>
                    </li>
                        <li>
                            <div
                            className="relative block rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:cursor-pointer"
                            >
                                {pageNo}
                            </div>
                        </li>
                    <li 
                    className="bg-black rounded-3xl font-bold"
                    onClick={props.handleNextPage}
                    >
                        <button
                            className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-slate-800 transition-all duration-300  dark:text-white bg-neutral-700 hover:text-white hover:cursor-pointer"
                            >Next
                        </button>
                    </li>
                </ul>
            </nav>
    );
}


export default Pagination;
