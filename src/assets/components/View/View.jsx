import React from 'react'
import viewStyle from './View.module.css'
import car2 from '../../image/Audi 1.png'
import user1 from '../../image/user.png'
import snow1 from '../../image/d8wxke_2_.png'
import auto from '../../image/Frame.png'
import doors from '../../image/doors.png'


export default function View() {
    return (
        <>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb py-5 ms-5">
                    <li className="breadcrumb-item"><a href="home">Home</a></li>
                    <li className="breadcrumb-item"><a href="show">Cars</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Car details</li>
                    <li className="breadcrumb-item active" aria-current="page">Chevrolet Equinox</li>
                </ol>
            </nav>


            <div className="container-fluid">
                <div className="row">
                    <div id={viewStyle.car2} className="col-md-6 ">
                        <img className='animated zoomIn' src={car2} alt="" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className='items'>
                            <button type='button' className='btn bold bg-secondary bg-opacity-25 text-primary'>WHY CHOSE US</button>
                            <h4>We offer the best experience with our rental deals</h4>
                            <div className='text-item mt-3'>
                                <img src={user1} alt="" /> <span className='text-muted'>2 Passanger</span>
                            </div>
                            <div className='text-item mt-3'>
                                <img className='m-1' src={snow1} alt="" /> <span className='text-muted' >Air conditioning</span>
                            </div>
                            <div className='text-item mt-3'>
                                <img className='m-1' src={auto} /> <span className='text-muted' >Automatic</span>
                            </div>
                            <div className='text-item mt-3'>
                                <img className='m-1' src={doors} /> <span className='text-muted' >Doors</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}








