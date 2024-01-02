import React from 'react'

function contact() {
  return (
    <div>
      

      

    </div>
  )
}

export default contact;

























{/* <section class="subscribe-block">
      <div class="row">
        <div class="col-md-8 form">
          <h4 style="font-size:35px;"><a href="contact.php" title="Contact Us">Let's Have A Coffee</a></h4>
          <form method="post" id="footer-form" novalidate="novalidate">
            <div class="row">
              <div id="message">
                <!-- Message will be shown here ! -->
              </div>
              <div class="form-group">
                <div class="col-md-6 pad">
                  <input type="text" name="user_name" id="user_name" class="" placeholder="Name *">
                </div>
                <div class="col-md-6 pad">
                  <input type="tel" name="user_contact" id="user_contact" class="cphone" placeholder="Phone Number *">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <div class="col-md-6 pad">
                  <input type="email" name="user_email" id="user_email" class="" placeholder="Email Id *">
                  <span id="check-e"></span>
                </div>
                
                <div class="col-md-6 pad">
                  <input type="text" name="user_company" id="user_company" class="" placeholder="Company Name *">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-1 pad" style="padding:0 0;">
                <label>Services*</label>
              </div>
              <div class="col-md-11 pad">
                <label class="checkbox-inline">
                  <input type="checkbox" name="services[]" class="ser-check" value="Website Designing &amp; Development">
                Website Designing &amp; Development </label>
                
                <label class="checkbox-inline check-1">
                  <input type="checkbox" name="services[]" class="ser-check" value="Digital Brand Development">
                Digital Brand Development</label>
                <br>
                <label class="checkbox-inline">
                  <input type="checkbox" name="services[]" class="ser-check" value="Mobile Apps Designing and Development">
                Mobile Apps Designing &amp; Development</label>
                <label class="checkbox-inline check-2">
                  <input type="checkbox" name="services[]" class="ser-check" value="Startup Consulting &amp; Nurturing">
                Startup Consulting &amp; Nurturing</label>
                <br>
                <label class="checkbox-inline">
                  <input type="checkbox" name="services[]" class="ser-check" value="E-Commerce Designing &amp; Development">
                E-Commerce Designing &amp; Development </label>
                
                <label class="checkbox-inline check-3">
                  <input type="checkbox" name="services[]" class="ser-check" value="Software Development">
                Software Development</label>
                
                <br>
                <label class="checkbox-inline">
                  <input type="checkbox" name="services[]" class="ser-check" value="Online Reputation Management">
                Online Reputation Management</label>
                
                <label class="checkbox-inline check-4">
                  <input type="checkbox" name="services[]" class="ser-check" value="Identity Designing">
                Identity Designing</label>
                
              </div>
              <label id="ser-msg">
                  <!-- Message will be shown here ! -->
                </label>
            </div>
            <div class="form-group">
              <div class="col-md-12" style="padding-left:0px;">
                <textarea maxlength="500" rows="1" class="form-control" name="message" id="message" placeholder="Please enter your message"></textarea>
              </div>
            </div>
            <div class="form-group">
                <div class="col-md-2 col-xs-4" style="padding-left:0px;">
                  <div id="re" class="recap">Refresh</div>
                </div>
                <div class="col-md-1  col-xs-2">
                    <div id="rand1" class="random1">33</div>
                </div>
                <div class="col-md-1  col-xs-2">
                    <div class="plus">+</div>
                </div>
                <div class="col-md-1  col-xs-2">
                    <div id="rand2" class="random2">45</div>
                </div>
                <div class="col-md-4  col-xs-6" style="padding-left:0px;">
                    <input type="text" id="total" autocomplete="off">
                </div>
                <div class="col-md-2  col-xs-6">
                   <button type="submit" id="contactFormSubmit" class="btn btn-primary button submit2" name="footer-contact">Send Message</button>
                </div>
            </div>
            <div class="clearfix hidden-md hidden-lg"></div>
            <div class="form-group">
            <div class="col-md-12">
            <label id="cap-msg">
                  <!-- Message will be shown here ! -->
            </label>
            </div>
            </div>
          </form>
        </div>
        <div class="col-md-4 clearfix">
          <h3 style="color:#fff;">Head Office &nbsp;&nbsp;<img src="images/placeholder.svg" alt="Our Location"></h3>
          <p>C-9/15, Sector-7, Rohini, New Delhi -110085</p>
          <p><i class="fa fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:info@cyberworx.in" title="Mail us">info@cyberworx.in</a></p>
          <p><i class="fa fa-phone"></i>&nbsp;&nbsp;<a href="tel:+91-8377009043" title="Telephone">+91-8377009043</a></p>
          <h3 style="color:#fff;">Follow Us</h3>
          <ul class="social-networks-listing">
            <li> <a href="https://www.facebook.com/CyberworxTechnologies/" title="Facebook Profile" target="_blank" onclick="ga('send', 'event', 'Follow', " https:="" www.facebook.com="" cyberworx",="" "home",="" 1);"=""> <span class="fa fa-facebook"></span> </a> </li>
            <li> <a href="https://twitter.com/cyberworxtech" title="Twitter Profile" target="_blank" onclick="ga('send', 'event', 'Follow', " https:="" twitter.com="" cyberworxtech",="" "home",="" 1);"=""> <span class="fa fa-twitter"></span> </a> </li>
            <li> <a href="https://www.linkedin.com/company/cyberworxtechnologies" title="Linkedin Profile" target="_blank" onclick="ga('send', 'event', 'Follow', " https:="" www.linkedin.com="" company="" cyberworx-technologies-private-limited",="" "home",="" 1);"=""> <span class="fa fa-linkedin"></span> </a> </li>
            <li> <a href="https://plus.google.com/u/1/+CyberworxTechnologies" title="Google Plus Profile" target="_blank" onclick="ga('send', 'event', 'Follow', " https:="" plus.google.com="" 101856614928412894049="" posts",="" "home",="" 1);"=""> <span class="fa fa-google-plus"></span> </a> </li>
            <li> <a href="http://www.youtube.com/user/Cyberworxtech" title="Youtube Channel" target="_blank" onclick="ga('send', 'event', 'Follow', " http:="" www.youtube.com="" user="" cyberworxtech",="" "home",="" 1);"=""> <span class="fa fa-youtube-play"></span> </a> </li>
            <li> <a href="https://www.instagram.com/cyberworxindia/" title="Instagram Profile"> <i class="fa fa-instagram"></i> </a> </li>
          </ul>
          <div class="right-footer">
            <img src="uploads/PartnerBadge.jpg" alt="Google Partner">
            <a href="https://www.cyberworx.in/" target="_blank"><img src="uploads/logo-2.png" alt="Cyberworx International" class="bach"></a>
          </div>
          <br>
          <a href="https://www.cyberworx.in/sitemap.html" title="HTML Sitemap" class="sitemap-menu">Sitemap</a>
          <br>
          <a href="https://www.cyberworx.in/privacy-policy.php" title="Company Policy" class="sitemap-menu">Privacy Policy</a><br>
          <a href="https://www.cyberworx.in/website-designing-company-in-gurgaon.php" title="Company Policy" class="sitemap-menu">Website Designing Gurgaon</a>
        </div>
      </div>
</section> */}