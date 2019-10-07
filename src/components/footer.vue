<template>
  <div>
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
          rel="stylesheet">
    <!-- Footer -->
    <footer class="pt-5 pb-4"
            id="contact">
      <div class="c">
        <div class="row footer-wrapper">
          <div class="col-lg-20 col-md-20 col-sm-20 mt-2 mb-4">
            <h5 class="mb-4 font-weight-bold about-us">ABOUT US</h5>
            <p class="mb-4 about-us">Movie statistics official website</p>
            <ul class="f-address">
              <li style="width:33%">
                <div class="row">
                  <div class="col-1"><i class="fas fa-map-marker"></i></div>
                  <div class="col-10">
                    <h6 class="font-weight-bold mb-0">Address:</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </li>
              <li style="width:33%">
                <div class="row">
                  <div class="col-1"><i class="far fa-envelope"></i></div>
                  <div class="col-10">
                    <h6 class="font-weight-bold mb-0">Have any questions?</h6>
                    <p><a href="#">Support@user.com</a></p>
                  </div>
                </div>
              </li>
              <li style="width:33%">
                <div class="row">
                  <div class="col-1"><i class="fas fa-phone-volume"></i></div>
                  <div class="col-10">
                    <h6 class="font-weight-bold mb-0">Number:</h6>
                    <p><a href="#">+XX (0) XX XX-XXXX-XXXX</a></p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="social-wrapper col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
            <h5 class="mb-4 font-weight-bold about-us">CONNECT WITH US</h5>
            <div class="input-group">
              <input type="text"
                     class="form-control"
                     placeholder="Your Email Address">
              <span class="input-group-addon"
                    id="basic-addon2"><i class="fas fa-check"></i></span>
            </div>
            <ul class="social-pet mt-4">
              <li><a href="#"
                   title="facebook"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"
                   title="twitter"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"
                   title="google-plus"><i class="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"
                   title="instagram"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <!-- Copyright -->
    <section class="copyright">
      <div class="c">
        <div class="row">
          <div class="col-md-12 ">
            <div class="text-center text-white">
              &copy; 2019 Movie-Stats. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss">
	/*=-footer-=*/
			footer {
				color: #fff;
				background-attachment: fixed;
				background-color:#111;
        background-image: url(https://s7.postimg.org/uyf0oioaz/footer-bg.png);
				background-size: cover;
				background-position: bottom;
			}
			footer p {
				color: #ccc;				
			}
	   footer a {
				color: #ccc;				
			}
			.social-pet li {
				display: inline-block;
				margin-right: 10px;
			}
			.social-pet li a {
				height: 35px;
				width: 35px;
				border-radius: 50%;
				text-align: center;
				display: block;
				line-height: 35px;
				background-color: #3a5a95;
				color: #fff;
			}
			.social-pet li:nth-child(2) a {
				background-color: #57aced;
			}
			.social-pet li:nth-child(3) a {
				background-color: #dd4f43;
			}
			.social-pet li:nth-child(4) a {
				background-color: #6b27b2;
			}
			.social-pet li a:hover {
				background-color: #0141a2;
			}
			.social-pet li a:hover i {
				transform: rotate(360deg);
				-moz-transform: rotate(360deg);
				-webkit-transform: rotate(360deg);
			}
			.recent-post li {
				display: block;
				color: #ccc;
				margin-bottom: 25px;
			}
			.recent-post li label {
				float: left;
				border: 2px solid #ccc;
				padding: 1px 7px;
				text-align: center;
			}
			.recent-post li label span {
				color: #fff;
			}
			footer .input-group-addon {
				background-color: #0141a2;
				padding: 10px;
			}
      .input-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
      }
      .f-address {
        display: flex;
        flex-direction: row;
      }
			.f-address li {
				display: inline-block;
			}
			.f-address li i {
				color: #2995de;
				font-size: 18px;
			}
			.f-address li a {
				color: #ccc;
			}
      .footer-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
      }
      .about-us {
        text-align: center;
      }
      .v-application ul, .v-application ol {
        padding: 0px !important;
      }
      .social-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center
      }
			/*=-Copyright-=*/
			.copyright {
				background-color: #000;
				padding: 12px 0;
        font-size:14px;
			}
</style>
