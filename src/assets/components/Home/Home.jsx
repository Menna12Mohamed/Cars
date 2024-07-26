import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import imageLogo from '../../image/logo.png'
import landing from '../../image/car 2 1.png'
import carImg from '../../image/car3.png'
import user1 from '../../image/user.png'
import snow1 from '../../image/d8wxke_2_.png'
import auto from '../../image/Frame.png'
import location from '../../image/location.png'
import carIcion from '../../image/car-icon.png'
import jaguar from '../../image/jaguar.png'
import audi from '../../image/audi.png'
import volvo from '../../image/volvo.png'
import nissan from '../../image/nissan.png'
import car2 from '../../image/Audi 1.png'
import user2 from '../../image/user (1).png'
import chat from '../../image/chat.png'
import message from '../../image/message.png'
import girl from '../../image/girl.png'
import man from '../../image/Rectangle 8 (1).png'
import iPhone from '../../image/iPhone-14.png'
import ios from '../../image/ios.png'
import andriod from '../../image/andriod.png'
import footer from '../../image/Footer.png'
import axios from 'axios';
export default function Home() {
  const [cars, setCars] = useState([]);
  let getCars = async () => {
    try {
      let response = await axios.get(
        'https://freetestapi.com/api/v1/cars?limit=4'
      );
      setCars(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCars();
  }, [])
  const [search, setSearch] = useState('')
  console.log(search);
  return (
    <>
      {/* start navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src={imageLogo} alt="" className="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center p-3">
              <li className="nav-item">
                <button type='button' className='btn bold'>Become a renter</button>
              </li>
              <li className="nav-item">
                <button type='button' className='btn bold'>Rental deals</button>
              </li>
              <li className="nav-item">
                <button type='button' className='btn bold'>How it works</button>
              </li>
              <li className="nav-item">
                <button type='button' className='btn bold'>Why choose us</button>
              </li>
            </ul>
            <div className="ms-auto">
              <button type='button' className='btn bold'>Sign in</button>
              <button type='button' className='btn bold btn-primary'>Sign up</button>
            </div>
          </div>
        </div>
      </nav>
      {/* end navbar */}

      {/* start headline */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className='text-item px-5'>
              <h1 className='w-50'>Find, book and rent a car  <span className='text-primary'>Easily</span></h1>
              <p className='w-75'>Get a car wherever and whenever you need it with your IOS and Android device.
              </p>
            </div>
          </div>
          <div id={styles.carImg} className="col-md-6 ">
            <img className='img-fluid   animated zoomIn' src={landing} alt="" />
          </div>
        </div>
      </div>
      {/* end headline */}

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
      <div className="container d-flex justify-content-center  text-center">
        <div>
          <button type='button' className='btn bold bg-secondary bg-opacity-25 text-primary'>POPULAR RENTAL DEALS</button>
          <h1 className='text-center '>Most popular cars rental deals</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {cars.filter((car)=>{
            return search.toLowerCase() === '' ? car : car.make.toLowerCase().includes(search)
          }).map((car) => (
            <div className="col-md-3 py-5" key={car.id}>
              <div className='bg-white  p-3  shadow'>
                <img src={carImg} className='w-100' alt="" />
                <div className='car-title'>
                  <h5>{car.make} {car.model}</h5>
                </div>
                <div className='d-flex align-items-baseline mt-4'>
                  <i className="bi bi-star-fill text-warning"></i>
                  <h6 className='mx-1'>4.6 <span className='text-muted'>(1345 reviews)</span></h6>
                </div>
                <div className='mt-3'>
                  <img src={user1} alt="" /> <span className='text-muted'>2 Passanger</span>
                  <img className='m-1' src={snow1} alt="" /> <span className='text-muted' >Air conditioning</span>
                </div>
                <div className="row">
                  <div className='d-flex align-items-baseline mt-4'>
                    <i className="fa-solid fa-calendar-days m-1 "></i>
                    <span className='text-muted'>{car.year}</span>
                    <div className='ms-auto'>
                      <img src={auto} alt="" />
                      <span className='text-muted p'>{car.transmission}</span>
                    </div>
                  </div>
                  <hr className='mt-4' />
                  <div className='d-flex align-items-baseline'>
                    <span className='text-muted'>price</span>
                    <div className='ms-auto'>
                      <span className='bold'>${car.price}</span>
                      <span className='text-muted'>/day</span>
                    </div>
                  </div>
                  <div className='py-2 text-center'>
                    <a href="view" class="btn btn-primary ">View details <i class="bi bi-arrow-right"></i></a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='text-center'>
        <a href="show" class="btn btn-outline-secondary px-5">Show all vehicles <i className="fa-solid fa-right-long m-2"></i></a>
      </div>
      {/* end api */}

      <div className='container d-flex justify-content-center  text-center py-5'>
        <div>
          <button type='button' className='btn bold bg-secondary bg-opacity-25 text-primary'>HOW IT WORK</button>
          <h1 className='text-center '>Most popular cars rental deals</h1>
        </div>
      </div>




      <div className="container d-flex justify-content-center text-center py-5">
        <div className="row">
          <div className="col-md-4 ">
            <img className='pt-1' src={location} alt="" />
            <h5 className='my-2'>Choose location</h5>
            <span className='text-muted text-center' >Choose your and find <br /> your best car</span>
          </div>
          <div className="col-md-4">
            <img className='pt-1' src={carIcion} alt="" />
            <h5 className='my-2'>Pick-up date</h5>
            <span className='text-muted text-center' >Select your pick up date and time to book your car</span>
          </div>
          <div className="col-md-4">
            <img className='pt-1' src={location} alt="" />
            <h5 className='my-2'>Book your car</h5>
            <span className='text-muted text-center ' >Book your car and we will deliver it directly to you</span>
          </div>
        </div>
      </div>





      <div className="container d-flex justify-content-around flex-wrap px-4  text-center my-5">
        <img className='mx-2' src={jaguar} alt="" />
        <img className='mx-2' src={nissan} alt="" />
        <img className='mx-2' src={volvo} alt="" />
        <img className='mx-2' src={audi} alt="" />
      </div>


      <div className="container-fluid">
        <div className="row">
          <div id={styles.car2} className="col-md-6 ">
            <img src={car2} />
          </div>
          <div className="col-md-6 d-flex align-items-center ">
            <div className='items'>
              <button type='button' className='btn bold bg-secondary bg-opacity-25 text-primary'>WHY CHOSE US</button>
              <h4>We offer the best experience with our rental deals</h4>
              <div className='text-item '>
                <div className='details d-flex align-items-center'>
                  <img className='p-3 ps-0' src={user2} alt="" />
                  <article>
                    <h6 className='mb-0'>Best price guaranteed</h6>
                    <span className='text-muted text-center ' >Find a lower price? We’ll refund you 100% of the difference.</span>
                  </article>
                </div>
              </div>
              <div className='text-item '>
                <div className='details d-flex align-items-center'>
                  <img className='p-3 ps-0' src={user2} alt="" />
                  <article>
                    <h6 className='mb-0'>24 hour car delivery</h6>
                    <span className='text-muted text-center ' >Book your car anytime and we will deliver it directly to you.</span>
                  </article>
                </div>
              </div>
              <div className='text-item '>
                <div className='details d-flex align-items-center'>
                  <img className='p-3 ps-0' src={message} alt="" />
                  <article>
                    <h6 className='mb-0'>Best price guaranteed</h6>
                    <span className='text-muted text-center ' >Find a lower price? We’ll refund you 100% of the difference.</span>
                  </article>
                </div>
              </div>
              <div className='text-item '>
                <div className='details d-flex align-items-center'>
                  <img className='p-3 ps-0' src={chat} alt="" />
                  <article>
                    <h6 className='mb-0'>24/7 technical support</h6>
                    <span className='text-muted text-center ' >Have a question? Contact Rentcars support any time when you have problem.</span>
                  </article>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className='container d-flex justify-content-center  text-center py-5'>
        <div >
          <button type='button' className='btn bold bg-secondary bg-opacity-25 text-primary'>TEST IMONIALS</button>
          <h1 className='text-center '>Most popular cars rental deals</h1>
        </div>
      </div>


      <div className='d-flex flex-wrap justify-content-around'>
        <div className='card mb-3 mx-2 shadow' style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img className='img-fluid rounded-start w-100' src={man} alt="" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className='card-title mb-0'>5.5 <small className='h5'>stars</small></h1>
                <div>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className='card-text my-4'>
                  “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”
                </p>
                <div className='card-text'>
                  <p className='bold mb-0'>Charlie Johnson</p>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card mb-3 mx-2 shadow' style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-6">
              <img className='img-fluid rounded-start w-100' src={girl} alt="" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h1 className='card-title mb-0'>5.5 <small className='h5'>stars</small></h1>
                <div>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className='card-text my-4'>
                  “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”
                </p>
                <div className='card-text'>
                  <p className='bold mb-0'>Charlie Johnson</p>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <section className="sec-7 d-flex mt-5 justify-content-around">
        <div >
          <article className="mx-5">
            <h1 >Download Rentcars App for <span
              className="text-primary">FREE </span></h1><small >For faster, easier booking and
                exclusive deals.</small>
            <div className="my-3 my-3 col-md-7 d-flex justify-content-center">
              <img src={andriod} className="me-2" />
              <img src={ios} />
            </div>
            <form className="d-flex flex-column col-md-7 ">
              <div>
                <label htmlFor="name" className="form-label"></label>
                <input type="text" placeholder='Name' className="form-control form-control-sm  bg-primary bg-opacity-25 rounded-pill" id="name" />
              </div>
              <div>
                <label htmlFor="phone" className="form-label"></label>
                <input type="text" placeholder='Phone' className="form-control form-control-sm  bg-primary bg-opacity-25 rounded-pill" id="phone" />
              </div>
              <div>
                <label htmlFor="email" className="form-label"></label>
                <input type="email" placeholder='Email' className="form-control form-control-sm  bg-primary bg-opacity-25 rounded-pill" id="email" />
              </div>

              <div className="d-flex justify-content-center my-2">
                <button type="submit" id="button-addon2" className="btn bold btn-primary px-5"> Send
                </button>
              </div>
            </form>
          </article>
        </div>
        <div className="d-flex justify-content-center align-items-end"><img src={iPhone} alt="" className="w-75" />
        </div>
      </section>
      <img className='w-100' src={footer} alt="" />



    </>

  )
}









