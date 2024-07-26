import axios from 'axios';
import carImg from '../../image/car3.png';
import user1 from '../../image/user.png';
import snow1 from '../../image/d8wxke_2_.png';
import auto from '../../image/Frame.png';
import React, { useEffect, useState } from 'react';

export default function Show() {
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 12;

    useEffect(() => {
        const getCars = async () => {
            try {
                const response = await axios.get(
                    'https://freetestapi.com/api/v1/cars?limit=30'
                );
                setCars(response.data);
            } catch (error) {
                console.log('Error fetching cars:', error);
            }
        };
        getCars();
    }, []);

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = cars.slice(firstIndex, lastIndex);
    const nPage = Math.ceil(cars.length / recordsPerPage);
    const numbers = [...Array(nPage).keys()].map(n => n + 1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < nPage) {
            setCurrentPage(currentPage + 1);
        }
    };
    const [search, setSearch] = useState('')
    console.log(search);

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-5 ms-5">
                    <li className="breadcrumb-item"><a href="home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Cars</li>
                </ol>
            </nav>

            {/* start search */}
            <div className="container mt-5">
                <div className="input-group mb-4 mb-3 mt-5 shadow">
                    <span className="input-group-text"><i className="bi bi-geo-alt-fill"></i></span>
                    <input type="text" className="form-control"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by name' />
                    <button type='button' className='btn bold btn-primary'>Search</button>
                </div>
            </div>
            {/* end search*/}

            {/* start api */}
            <div className="container d-flex justify-content-center text-center">
                <div>
                    <button type='button' className='btn bold bg-secondary bg-opacity-25 text-primary'>POPULAR RENTAL DEALS</button>
                    <h1 className='text-center'>Most popular cars rental deals</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {records.filter((car)=>{
                        return search.toLowerCase() === '' ? car : car.make.toLowerCase().includes(search)
                    }).map((car) => (
                        <div className="col-md-3 py-5" key={car.id}>
                            <div className='bg-white p-3 shadow'>
                                <img src={carImg} className='w-100' alt="Car" />
                                <div className='car-title'>
                                    <h5>{car.make} {car.model}</h5>
                                </div>
                                <div className='d-flex align-items-baseline mt-4'>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <h6 className='mx-1'>4.6 <span className='text-muted'>(1345 reviews)</span></h6>
                                </div>
                                <div className='mt-3'>
                                    <img src={user1} alt="Passengers" /> <span className='text-muted'>2 Passengers</span>
                                    <img className='m-1' src={snow1} alt="Air conditioning" /> <span className='text-muted'>Air conditioning</span>
                                </div>
                                <div className="row">
                                    <div className='d-flex align-items-baseline mt-4'>
                                        <i className="fa-solid fa-calendar-days m-1"></i>
                                        <span className='text-muted'>{car.year}</span>
                                        <div className='ms-auto'>
                                            <img src={auto} alt="Transmission" />
                                            <span className='text-muted'>{car.transmission}</span>
                                        </div>
                                    </div>
                                    <hr className='mt-4' />
                                    <div className='d-flex align-items-baseline'>
                                        <span className='text-muted'>Price</span>
                                        <div className='ms-auto'>
                                            <span className='bold'>${car.price}</span>
                                            <span className='text-muted'>/day</span>
                                        </div>
                                    </div>
                                    <div className='py-2 text-center'>
                                        <a href="view" className="btn btn-primary">View details <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#!" className="page-link" onClick={handlePrevPage}>Prev</a>
                        </li>
                        {numbers.map((n) => (
                            <li key={n} className={`page-item ${currentPage === n ? 'active' : ''}`}>
                                <a href="#!" className="page-link" onClick={() => handlePageChange(n)}>{n}</a>
                            </li>
                        ))}
                        <li className="page-item">
                            <a href="#!" className="page-link" onClick={handleNextPage}>Next</a>
                        </li>
                    </ul>
                </nav>

            </div>
            {/* end api */}
        </>
    );
}
