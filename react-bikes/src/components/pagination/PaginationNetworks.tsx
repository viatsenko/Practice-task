import React, {MouseEventHandler} from 'react';
import styles from './PaginationNetworks.module.css'

type PaginationNetworksProps = {
    currentPage: number;
    networksPerPage: number;
    totalNetworks: number;
    paginate: (pageNumber: number) => void;
    pervPage: MouseEventHandler<HTMLElement>;
    nextPage: MouseEventHandler<HTMLElement>;
    firstPage: MouseEventHandler<HTMLElement>;
    lastPage: MouseEventHandler<HTMLElement>;
}
const PaginationNetworks: React.FC<PaginationNetworksProps> = ({
        currentPage,
        networksPerPage,
        totalNetworks,
        paginate,
        pervPage,
        nextPage,
        firstPage,
        lastPage,
    }) => {

    let disabledPrev = false;
    let disabledNext = false;
    let maxPage =  Math.ceil(totalNetworks / networksPerPage);
    if (currentPage <= 1) {
        disabledPrev = true;
    }
    if (currentPage >= maxPage){
        disabledNext = true;
    }

    return (
        <div className={styles.pagination}>
            <ul>
                <button onClick={firstPage} className={styles.button} disabled={disabledPrev}>{'<<'}</button>
                <button onClick={pervPage} className={styles.button} disabled={disabledPrev}>{'<'}</button>
                {currentPage > 2 &&
                    <li key={currentPage - 2}>
                            <span onClick={()=>paginate(currentPage - 2)}>
                                {currentPage - 2}
                            </span>
                    </li>
                }
                {currentPage > 1 &&
                <li key={currentPage - 1}>
                            <span onClick={()=>paginate(currentPage - 1)}>
                                {currentPage - 1}
                            </span>
                </li>
                }
                <li key={currentPage}>
                            <span className={styles.active} onClick={()=>paginate(currentPage)}>
                                {currentPage}
                            </span>
                </li>
                {currentPage < maxPage && <li key={currentPage + 1}>
                            <span onClick={()=>paginate(currentPage + 1)}>
                                {currentPage+1}
                            </span>
                </li>}
                {currentPage < maxPage - 1 && <li key={currentPage + 2}>
                            <span onClick={()=>paginate(currentPage + 2)}>
                                {currentPage + 2}
                            </span>
                </li>}
                <button onClick={nextPage} className={styles.button} disabled={disabledNext}>{'>'}</button>
                <button onClick={lastPage} className={styles.button} disabled={disabledNext}>{'>>'}</button>
            </ul>
        </div>
    );
};

export default PaginationNetworks;
