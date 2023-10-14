function Home()
{
    
     
  return (
    <>
      <div id="loader-holder">
        <div className="cssload-loader">Loading...</div>
      </div>
      <header>
        <div className="top-head">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <ul className="head-cont">
                  <li>
                    <a href="javascript:;">info@unistaypg.co.in</a>
                  </li>
                  {/*<li><i class="fa fa-map-marker" aria-hidden="true"></i> 1069, 2nd Floor,KK Nager,Chennai-78 </li>*/}
                </ul>
              </div>
              <div className="col-md-6 col-12">
                <ul className="pull-right">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.keshav.book_my_pg"
                  >
                    <img
                      src="https://bookmypg.co.in/assets/front/images/playstore.png"
                      alt="play Store"
                      style={{ display: "inline-block", width: 140 }}
                    />
                  </a>
                  <li>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#login_signup_popup"
                    >
                      Login / Sign up{" "}
                      
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-head">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="top-logo-holder">
                  <a href="https://bookmypg.co.in" title="UNISTAY PG">
                    <img src="image/Logo1.png" alt="UNISTAY PG" />
                  </a>
                </div>
                <div className="top-menu-holder">
                  <ul id="navigation" className="pull-right">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">For PG Owners</a>
                    </li>
                    ;
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Partner Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    
                  </ul>
                </div>
                {/* //button will go here */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="login_signup_popup"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="pb-0 mb-0">SIGN UP OR LOGIN AS PG FINDER</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#login"
                    role="tab"
                    data-toggle="tab"
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#register"
                    role="tab"
                    data-toggle="tab"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane in active" id="login">
                  <div className="login-form booking-form mt-3 mb-3">
                    <h3>Login as PG Finder</h3>
                    <form
                      action="https://bookmypg.co.in/login_check"
                      method="post"
                      className="contact-form"
                      name="form"
                      autoComplete="off"
                      id="login_form"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="GkBCyYxb92Yt0QXrbegieUcesNKXl2ZxC540qRUZ"
                      />
                      <div className="row">
                        <div className="form-field col-12">
                          <label>
                            Email <font color="red">*</font>
                          </label>{" "}
                          <input
                            type="email"
                            name="email"
                            required=""
                            title="Please enter email"
                          />
                          <div className="form-control-border" />
                        </div>
                        <div className="form-field col-12">
                          <label>
                            Password <font color="red">*</font>
                          </label>{" "}
                          <input
                            type="password"
                            name="password"
                            required=""
                            title="Please enter password"
                          />
                          <div className="form-control-border" />
                        </div>
                        <div className="form-field col-6">
                          <div className="form-footer">
                            <button
                              type="button"
                              id="login"
                              className="btn-style-04 pull-left"
                            >
                              LOGIN
                            </button>
                            
                          </div>
                        </div>
                        <div className="form-field col-6">
                          <p>
                            <a
                              href="javascript:;"
                              id="forgot_password_button"
                              data-toggle="modal"
                              data-target="#forgot_password"
                              className="pull-right"
                            >
                              Forgot Password?
                            </a>
                          </p>
                        </div>
                        {/*<div class="clearfix"></div>
                                    <div class="col-6">
                                        <a href="#" class="btn-social-login btn-gplus mb-1"><i class="fa fa-google-plus"></i> Google</a>
                                    </div>
                                    <div class="col-sm-6 col-6">
                                        <a href="#" class="btn-social-login btn-facebook mb-1"><i class="fa fa-facebook"></i> Facebook</a>
                                    </div>*/}
                      </div>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="register">
                  <div className="register-form booking-form mt-3 mb-3">
                    <h3>Register as PG Finder</h3>
                    <form
                      className="contact-form row"
                      action="https://bookmypg.co.in/register_action"
                      method="post"
                      name="form"
                      autoComplete="off"
                      id="register_form"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="GkBCyYxb92Yt0QXrbegieUcesNKXl2ZxC540qRUZ"
                      />
                      <div className="form-field col-12">
                        <label>
                          Name <font color="red">*</font>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          maxLength={50}
                          required=""
                          title="Please enter name"
                        />
                        <div className="form-control-border" />
                      </div>
                      <div className="form-field col-6">
                        <label>
                          Email <font color="red">*</font>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          maxLength={75}
                          required=""
                          title="Please enter email"
                        />
                        <div className="form-control-border" />
                      </div>
                      <div className="form-field col-6">
                        <label>
                          Mobile No <font color="red">*</font>
                        </label>{" "}
                        <input
                          type="text"
                          name="mobile"
                          id="mobile"
                          required=""
                          onkeypress="return ValidatenumberOnly(event)"
                          maxLength={10}
                          title="Please enter mobile"
                        />
                        <div className="form-control-border" />
                      </div>
                      <div className="form-field col-6">
                        <label>
                          Password <font color="red">*</font>
                        </label>{" "}
                        <input
                          type="password"
                          name="password"
                          id="password"
                          required=""
                          title="Please enter password"
                        />
                        <div className="form-control-border" />
                      </div>
                      <div className="form-field col-6">
                        <label>
                          Repeat Password <font color="red">*</font>
                        </label>{" "}
                        <input
                          type="password"
                          name="repeatpassword"
                          id="repeatpassword"
                          required=""
                          title="Please enter repeat password"
                        />
                        <div className="form-control-border" />
                      </div>
                      <div className="form-group col-12">
                        <div className="custom-control custom-checkbox form-footer-right">
                          <input
                            type="checkbox"
                            name="terms"
                            className="custom-control-input"
                            required=""
                            id="accept-terms"
                            title="Please accept our terms"
                          />{" "}
                          <label
                            className="custom-control-label form-footer-right"
                            htmlFor="accept-terms"
                          >
                            Please accept our{" "}
                            <a
                              target="_blank"
                              href="https://bookmypg.co.in/termsandconditions"
                            >
                              Terms &amp; conditions
                            </a>
                            .
                          </label>
                        </div>
                      </div>
                      <div className="form-group col-12">
                        <button type="submit" className="btn-style-04">
                          Register Now
                        </button>
                      </div>
                    </form>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============================ FORGOT PASSWORD : START ==============================================*/}
      <div
        className="modal fade"
        id="forgot_password"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="pb-0 mb-0">Forgot Password</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="login-form booking-form mt-3 mb-3">
                <form
                  action="https://bookmypg.co.in/front_forgotpasswordemailsend"
                  method="post"
                  className="contact-form"
                  name="form"
                  autoComplete="off"
                  id="forgot_password_form"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="GkBCyYxb92Yt0QXrbegieUcesNKXl2ZxC540qRUZ"
                  />
                  <div className="row">
                    <div className="form-field col-12">
                      <label>
                        Email <font color="red">*</font>
                      </label>
                      <input
                        type="text"
                        name="email"
                        required=""
                        title="Please enter email"
                      />
                      <div className="form-control-border" />
                    </div>
                    <div className="form-field col-12">
                      <div className="form-footer">
                        <button
                          type="submit"
                          id="disabledadd"
                          className="btn-style-03 pull-left"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============================ FORGOT PASSWORD : END ==============================================*/}
      {/* START CONTAINER */}
      <input
        type="hidden"
        name="base_url"
        id="base_url"
        defaultValue="https://bookmypg.co.in"
      />
      <section id="search-banner" className="wow fadeIn" data-wow-delay=".2s">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="book-my-pg">
                <h1>UNISTAY PG</h1>
                <p>India's Largest PG Network to Book your PG Online</p>
              </div>
              <div className="search-holder">
                <form
                  method="get"
                  encType="multipart/form-data"
                  id="search-form"
                  name="search-form"
                >
                  <div className="search-box">
                    <input
                      type="search"
                      name="key"
                      className="textbox"
                      id="address"
                      placeholder="Enter city name, area etc..."
                    />{" "}
                    <button type="button" id="search" className="search-submit" />
                  </div>
                  <div className="nearme-box">
                    <a href="javascript:;" id="nearme">
                      <img
                        src="https://bookmypg.co.in/assets/front/images/nearby.svg"
                        alt=""
                      />{" "}
                      <span>Near me</span>
                    </a>
                  </div>
                </form>
                <div id="imp-cities-box">
                  {/*<a href="#" class="imp-cities nearby"> <span><img src="https://bookmypg.co.in/assets/front/images/nearby.svg" alt="" class="img-responsive"></span>
          <p>Nearby</p>
          </a> */}
                  <a
                    href="https://bookmypg.co.in/search/city/eyJpdiI6Im1IUUNPUlpkUk5KNGRKSERiOWhpQWc9PSIsInZhbHVlIjoiK3lcL2E3QUhsK2M3OFhSY1BGUnNLZHc9PSIsIm1hYyI6ImNlOTc2NzhmNTVjMDNmMmQ1MDRmMjNiMWYxNzM5MmQzNzVlOTY4OTA4ZTMyNGQ3ZTMxZWFiNThjZGQ3ZTc2OTQifQ=="
                    className="imp-cities"
                  >
                    <img
                      src="https://bookmypg.co.in/assets/front/images/bangaluru.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <p>Bengaluru</p>
                  </a>{" "}
                  <a
                    href="https://bookmypg.co.in/search/city/eyJpdiI6IjF2SnBmWHRjbzZIUUt2eXZQU3NBN0E9PSIsInZhbHVlIjoiNXpXM1NZV241Z1BwbnpKaUV0QnNGUT09IiwibWFjIjoiY2FiODMwODkzOWIyMDg2ZjdmZTczMDI3NjNkNjlhZjMzZWZiZjRkZGQ5Yjg1MTE5NjVlMGRlZTI0YjQ5ZjA2YSJ9"
                    className="imp-cities"
                  >
                    <img
                      src="https://bookmypg.co.in/assets/front/images/hyderabad.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <p>Hyderabad</p>
                  </a>{" "}
                  <a
                    href="https://bookmypg.co.in/search/city/eyJpdiI6InVBTXMzd0UrVjVxbUJxamRhYlwvREZ3PT0iLCJ2YWx1ZSI6IlwvdjVVbnJpZFQ3SDhvcjlYNUM0bEpBPT0iLCJtYWMiOiI1NzEyMmRkMGQ1NDk4MzZiMmY5YzQ4MWRkNTRlNjgxOTYzMGM4ODM5ZmVlZWQxMDRkZmNmMDkxZjBiMzI0YTI5In0="
                    className="imp-cities"
                  >
                    <img
                      src="https://bookmypg.co.in/assets/front/images/mumbai.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <p>Mumbai</p>
                  </a>{" "}
                  <a
                    href="https://bookmypg.co.in/search/city/eyJpdiI6IkpcLzZMUzJvVTQ2RWVBbHBYMThNOU93PT0iLCJ2YWx1ZSI6IkZkN1BwUlZ5UXc1ckkwak56MEYyb3c9PSIsIm1hYyI6Ijg3NzgwNjg0OTYwNjVmYjY1ZTczOTYwNTRlZjM1NGRjMzI3NzQ2MDgzY2QyY2E4ZGRlY2MwY2YzYWYyZGE3YzQifQ=="
                    className="imp-cities"
                  >
                    <img
                      src="https://bookmypg.co.in/assets/front/images/pune.jpg"
                      alt=""
                      className="img-responsive"
                    />
                    <p>Pune</p>
                  </a>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="city-img">
          <img
            src="https://bookmypg.co.in/assets/front/images/city-slider.png"
            alt=""
          />
        </div>
      </section>
      <section className="about-section ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wow fadeIn" data-wow-delay=".2s">
              <h2 className="h2 anim-left-title">About UNISTAY PG</h2>
              <p>
                We, at UNISTAY PG, are India's fastest-growing network of managed
                Paying Guest (PG) rentals. We hope to provide you with the best
                renting solutions with the help of our designs and technology.Our
                services across the country will help you find and book Paying Guest
                (PG) rental homes.
              </p>
              <a href="https://bookmypg.co.in/aboutus" className="btn-style-01">
                Read More
              </a>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay=".2s">
              <img
                src="https://bookmypg.co.in/assets/front/images/about.png"
                alt=""
                className="img-responsive w100"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section class="text-center ptb-70">
        <div class="container">
    <div class="row">
      <div class="col-md-10 offset-md-1 wow fadeIn"
      data-wow-delay=".2s">
        <h2 class="anim-center-title">Product Video</h2>
      </div>
    </div>
    <div class="clearfix"></div><iframe width="600" height="350"
    src="https://www.youtube.com/embed/vRL6k2DEdKs" frameborder=
    "0" allow=
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
        </div>
      </section><img src=
      "https://bookmypg.co.in/assets/front/images/nearby.svg" alt="">
      <section class="how-its-work-section bg-02 text-center ptb-70">
        <div class="container">
    <div class="row">
      <div class="col-md-10 offset-md-1 wow fadeIn"
      data-wow-delay=".2s">
        <h2 class="anim-center-title">What We Offer</h2><a href=
        "https://bookmypg.mojo.page/first-month-offer-for-your-pg-property-"
        target="_blank"><img src=
        "https://bookmypg.co.in/assets/front/images/first-month-offer.jpg"
        alt="" class="w100"></a>
      </div>
      <div class="clearfix"></div>
    </div>
        </div>
      </section> */}
      <section className="how-its-work-section bg-02 text-center ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 wow fadeIn" data-wow-delay=".2s">
              <h2 className="anim-center-title">How it's Work</h2>
              <p>
                Our process is simple and very different from those of others in
                this industry. The search process is streamlined by the locality or
                landmark of your choice. This allows you to find the right hostel or
                room.
              </p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="row mt-5">
            <div className="col-md-4 wow fadeInUp mb-4" data-wow-delay=".2s">
              <div className="hiw-icon">
                <img
                  src="https://bookmypg.co.in/assets/front/images/hiw-icon-01.png"
                  alt=""
                  className="w100"
                />
              </div>
              <h3>Search</h3>
              <p>
                Fill the search fields like your locality,or city,boys pg or girls
                pg
              </p>
            </div>
            <div className="col-md-4 wow fadeInUp mb-4" data-wow-delay=".4s">
              <div className="hiw-icon">
                <img
                  src="https://bookmypg.co.in/assets/front/images/hiw-icon-02.png"
                  alt=""
                  className="w100"
                />
              </div>
              <h3>Contact Owner</h3>
              <p>
                Select your PG Rental Home,Sharing Type and Contact respective
                Owner.
              </p>
            </div>
            <div className="col-md-4 wow fadeInUp mb-4" data-wow-delay=".6s">
              <div className="hiw-icon">
                <img
                  src="https://bookmypg.co.in/assets/front/images/hiw-icon-03.png"
                  alt=""
                  className="w100"
                />
              </div>
              <h3>Booking Confirmation</h3>
              <p>Your subscription and booking date confirmed.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 wow fadeIn" data-wow-delay=".2s">
              <h2 className="anim-center-title">What We Offer</h2>
              <p>
                The listed services are offered to all our customers. We assure you
                the best deals in all our properties and the chance to live a more
                luxurious life with lesser cost.
              </p>
            </div>
            <div className="clearfix" />
          </div>
          <div className="row mt-5">
            <div className="col-md-4 wow fadeInUp mb-4" data-wow-delay=".2s">
              <div className="subscribe-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/find-pgs-icon.png"
                  alt=""
                />
                <h3>Find PGs Near You</h3>
                <p>
                  Find Paying guests near you by selecting your location. We cover
                  more than 50+ localities in every city.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp mb-4" data-wow-delay=".4s">
              <div className="subscribe-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/book-online-icon.png"
                  alt=""
                />
                <h3>Book Online</h3>
                <p>
                  Book your PG online through our web portal or mobile application.
                  Avail discounts that are available for booking online.
                </p>
              </div>
            </div>
            <div className="col-md-4 wow fadeInUp mb-4" data-wow-delay=".6s">
              <div className="subscribe-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/best-deals-icon.png"
                  alt=""
                />
                <h3>Best Deals On PGs</h3>
                <p>
                  We have tie ups with PGs in every city. We make sure that our
                  customers get the best deals for PGs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ptb-70 amenities-sec bg-blue">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 offset-md-1 text-center wow fadeIn"
              data-wow-delay=".2s"
            >
              <h2 className="anim-center-title">Amenities List</h2>
              <p>
                We provide all the amenities, some amenities are surely available
                for all our service places. Some of the items only you may get by
                request, Because that type of amenities are not mandatory.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".2s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/air-conditioner.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Air Conditioner</h4>
                <p>Surely Available</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/Balcony.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Balcony</h4>
                <p>You need to request</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".4s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/extra-bed.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Extra Bed</h4>
                <p>You need to request</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/tv.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Flat TV</h4>
                <p>Surely Available</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".6s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/hot-cold-water.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Hot &amp; Cold Water</h4>
                <p>Surely Available</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".7s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/Intercom.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>InterCom</h4>
                <p>Surely Available</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".8s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/locker.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Locker</h4>
                <p>Surely Available</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay=".9s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/night-lamp.png"
                  alt=""
                  className="amenities-icon"
                />
                <h4>Read Table</h4>
                <p>Surely Available</p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 col-12 wow fadeIn"
              data-wow-delay="1s"
            >
              <div className="amenities-box">
                <img
                  src="https://bookmypg.co.in/assets/front/images/wi-fi.png"
                  alt="WiFi"
                  className="amenities-icon"
                />
                <h4>WiFi</h4>
                <p>Surely Available</p>
              </div>
            </div>
            {/*<div class="col-12 text-center mt-4  wow fadeIn" data-wow-delay=".2s"> <a href="#" class="btn-style-01 white-btn">View More</a> </div>*/}
          </div>
        </div>
      </section>
      <section className="ptb-70">
        <div className="container">
          <div className="row">
            <div
              className="col-md-10 offset-md-1 text-center wow fadeIn"
              data-wow-delay=".2s"
            >
              <h2 className="anim-center-title">
                Popular Paying Guest (PG) in <span id="city_name" />
              </h2>
              <p>
                Below properties are the listed Premium Properties in different
                locations of the City which are frequently booked by most Customers
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <div id="popular-pg" className="owl-carousel" />
            </div>
          </div>
        </div>
      </section>
      
      <section
        className="about-section ptb-70 comparison-section"
        style={{
          backgroundImage:
            "url(https://bookmypg.co.in/assets/front/images/about-01.jpg)"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay=".2s">
              <h2 className="h2 anim-left-title">Comparison</h2>
              <p>
                How UNISTAY better than normal PG's and low maintained PG services.
              </p>
              <h3 className="mt-100 mb-0 anim-left-title">
                App Available In Stores
              </h3>
              <p>
                Live life hassle free with the UNISTAY App. Book your stay,make
                payments, manage your accomodation and stay up to date with all
                events and updates.
              </p>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.keshav.book_my_pg"
                className="store-btn"
              >
                <img
                  src="https://bookmypg.co.in/assets/front/images/play-store-btn.jpg"
                  className="w100"
                  alt="play Store"
                />
              </a>{" "}
              <a href="javascript:;" className="store-btn">
                <img
                  src="https://bookmypg.co.in/assets/front/images/iphone-store-btn.jpg"
                  className="w100"
                  alt="play Store"
                />
              </a>
              {/*<img class="store-btn" src="https://bookmypg.co.in/assets/front/images/play-store-btn.jpg" class="w100" alt="play Store" />
                                      <img class="store-btn" src="https://bookmypg.co.in/assets/front/images/iphone-store-btn.jpg" class="w100" alt="play Store" />*/}
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay=".2s">
              <div className="comparison-container">
                <table id="comparison">
                  <colgroup>
                    <col span={1} className="comparison-first-column" />
                    <col width="144px" className="comparison-oyo-column" />
                    <col width="144px" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th />
                      <th>UNISTAY PG</th>
                      <th>Others</th>
                    </tr>
                    <tr>
                      <td>Online Enabled Booking</td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Online Coupon Discounts</td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Low Security Deposit</td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Brokerage</td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-red.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Fully Furnished</td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Free Wi-Fi</td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>UNISTAY App enabled Stay</td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>24*7 Security</td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Live Customer Support</td>
                      <td>
                        <img
                          className="comparison-image-tick"
                          src="https://bookmypg.co.in/assets/front/images/tick-green.svg"
                        />
                      </td>
                      <td>
                        <img
                          className="comparison-image-cross"
                          src="https://bookmypg.co.in/assets/front/images/cross-gray.svg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
                <div className="comparison-oyo-column-container" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CONTAINER */}
      {/* BEGIN FOOTER */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    hr {\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n        border: 0;\n        border-top-color: currentcolor;\n        border-top-style: none;\n        border-top-width: 0px;\n        border-top: 1px solid rgb(255, 255, 255);\n    }\n\n    .keywords {\n        margin-bottom: 4px;\n    }\n\n  "
        }}
      />
      <footer>
        <div className="foot-top">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 share-block">
                <div className="foot-logo mb-3">
                  <a href="#">
                    <img src="image/Logo1.png" alt="" />
                  </a>
                </div>
                <p>
                  UNISTAY PG is India's Largest growing "PG Rental Network"
                  attempting to provide better Paying Guest Accommodation Via our
                  technology platform. We help find the best PG rental across Major
                  Indian Cities.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-3 contactinfo">
                <h3>CONTACT INFO</h3>
                <p>
                  &nbsp;&nbsp;9-20, Industrial Estate, Hinjewadi Phase II, Pune
                  411057, India
                </p>
                <p>&nbsp;&nbsp;+91-8939654691</p>
                <p>&nbsp;&nbsp;info@unistay.co.in</p>
              </div>
              <div className="col-12 col-sm-6 col-md-3 contactinfo">
                <h3>PAGES</h3>
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>
                        <a href="https://bookmypg.co.in">Home</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/contactus">Contact Us</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/aboutus">About Us</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/termsandconditions">
                          Terms &amp; Condition
                        </a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/privacypolicy">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/career">Career</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/fundinfo">
                          Funding Information
                        </a>
                      </li>
                      {/*<li><a href="">For Investors</a></li>*/}
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>
                        <a href="https://bookmypg.co.in/guestpolicy">
                          Guest Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/partnerpolicy">
                          Partner Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/faq">FAQ</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/blog">Blog</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/partnerus">Partner Us</a>
                      </li>
                      <li>
                        <a href="https://bookmypg.mojo.page/listing-your-property-in-book-my-pg-plat">
                          List Your Property
                        </a>
                      </li>
                      <li>
                        <a href="https://bookmypg.co.in/serviceapartments">
                          Serviced Apartment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 followlinks">
                <h3>FOLLOW US</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/bookmypgonline"
                      target="_blank"
                      className="facebook-icon"
                    />
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/bookmypg"
                      target="_blank"
                      className="twitter-icon"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bookmypg_india/"
                      target="_blank"
                      className="instagram-icon"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/book-my-pg"
                      target="_blank"
                      className="linkedin-icon"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCSi-YKPLqacindD9cX_SfRQ"
                      target="_blank"
                      className="youtube-icon"
                    />
                  </li>
                  <div className="clearfix" />
                </ul>
                {/*<h3>MAILING LIST</h3>
        <p></p>*/}
              </div>
            </div>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3 contactinfo links">
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">PG in Chennai</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">PG in Coimbatore</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">PG in Bangalore</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">PG in Delhi</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">PG in Mumbai</a>
                  </p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 contactinfo links">
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">PG Near Me</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">Best PG in OMR</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">Working Mens Hostel</a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">
                      PG accommodation for Women in Chennai
                    </a>
                  </p>
                </div>
                <div className="col-12 col-sm-6 col-md-5 contactinfo links">
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">
                      Paying Guest accommodation in Chennai
                    </a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">
                      PG near thoraipakkam | Perungudi | Sholinganallur |
                      Karappakkam | Velachery
                    </a>
                  </p>
                  <p className="keywords">
                    <a href="https://bookmypg.co.in">
                      Furnished PG apartments for rent
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Copyright 2023 | UNISTAY Pg Pvt Ltd | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a className="scroll-to-top" />
      <section className="CityBlocker">
        <div id="allcityArea" className="cityArea" data-wow-delay=".2s">
          <div className="fullscreenWrapper">
            <div className="mobScrollArea">
              <div className="citynameContainer animated">
                <p className="heading anim-left-title">
                  I'm looking to rent a PG in
                </p>
                <div className="box-selector">
                  <div className="cityButton active" filter-city-value="Chennai">
                    Chennai
                  </div>
                  <div className="cityButton" filter-city-value="">
                    Bangalore
                  </div>
                  <div className="cityButton" filter-city-value="">
                    Hyderabad
                  </div>
                  <div className="cityButton" filter-city-value="">
                    Mumbai
                  </div>
                  <div className="cityButton" filter-city-value="">
                    New Delhi
                  </div>
                  <div className="cityButton" filter-city-value="">
                    Pune
                  </div>
                </div>
              </div>
              <div className="genderContainer animated">
                <p className="heading anim-left-title">For</p>
                <div className="box-selector">
                  <div className="genderButton" filter-gender-value="boys">
                    boys
                  </div>
                  <div className="genderButton" filter-gender-value="girls">
                    girls
                  </div>
                </div>
              </div>
            </div>
            <div className="footerAction">
              <div className="Button FlatButton btn-style-01">CANCEL</div>
              <div className="Button PrimeButton btn-style-02">UPDATE</div>
            </div>
          </div>
        </div>
      </section>
      
    </>
    
    
      );
    
    
}

export default Home;