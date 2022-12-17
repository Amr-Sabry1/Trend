import React from 'react'

export default function contact() {
  return (<>
          <div className="container py-5">
            <div className="row m-0 py-5 g-5">
                <div className="col-lg-8 col-md-12 position-relative">
                    <div className="position-relative  pt-4">
                        <h2 className="text-white fw-bold pb-2">Send Message!</h2>
                    </div>
                    <form className="mb-4 mt-4">
                      <label htmlFor="" className='my-1'>Your Name :</label>
                        <input className="mb-3 form-control" type="text"  required />
                      <label htmlFor="" className='my-1'>Your Email :</label>
                       
                        <input className="mb-3 form-control" type="email" required />
                      <label htmlFor="" className='my-1'>Your Message :</label>

                        <textarea className="mb-3 form-control" rows="3" name="comment" form="usrform" placeholder=""></textarea>
                        <button type="submit" className="btn bg-primary bg-opacity-50 text-white">Send Message</button>
                    </form>

                </div>
                <div className="col-lg-4 col-md-12  position-relative ">
                    <div className="position-relative  pt-4">
                        <h2 className="text-white fw-bold pb-md-5">Contact Me!</h2>
                    </div>
                    <ul className="p-0 py-3 list-unstyled">
                        <li className="pt-2 fs-5"> <i className="fa fa-location-dot text-primary"> </i> Damanhour , Egypt</li>
                        <li className="pt-2 fs-5"><i className="fa fa-mobile text-primary"></i> +201091421650</li>
                        <li className="pt-2 fs-5"><i className="fa fa-envelope text-primary"></i> amrsabry1511@gmail.com</li>
                    </ul>
        <div className="social d-flex fs-4 align-items-center">
          <a className="nav-link mx-2" href='https://www.facebook.com/profile.php?id=100009055652891' target="_blank"><i className='fa-brands fa-facebook'></i></a>
        
          <a className="nav-link mx-2" href='https://eg.linkedin.com/in/amrsabry5122/ar?trk=people-guest_people_search-card' target="_blank"><i className='fa-brands fa-linkedin-in'></i></a>
       
          <a className="nav-link mx-2"  href='https://instagram.com/amrsabry.1' target="_blank"><i className='fa-brands fa-instagram'></i></a>
     
          <a className="nav-link mx-2"  href='abohttps://github.com/Amr-Sabry1ut' target="_blank"><i className='fa-brands fa-github'></i></a>
       </div>
                </div>
            </div>

        </div>
        </>
  )
}
