import React from 'react';

const Pagination = ({perPage, totalUsers, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / perPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div className='main_pagination'>
                <bu>prev</bu>
                <p>next</p>
                {
                    pageNumbers.map((number)=>
                        <p onClick={()=>paginate(number)}>{number}</p>
                    )
                }  
        </div>
    );
};

export default Pagination;