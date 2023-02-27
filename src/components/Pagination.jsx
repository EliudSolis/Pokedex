import React from 'react'

const Pagination = ({  totalPages, setCurrentPage}) => {
    const pageNumbers = []

    for (let i = 1; i <=totalPages; i++) {
       pageNumbers.push(i)        
    }
    
    // const paginate = pageNumber =>{ setCurrentPage(pageNumber)  }

    const setPage = (number) =>{
      setCurrentPage(number *20)
      return number *20
      
    }




  return (
    <nav>
        <ul className="pagination">
            {
                pageNumbers.map(number=>(
                    <li key={number}>
                    <button onClick={() => setPage(number)}>{number}</button>      
                   </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination