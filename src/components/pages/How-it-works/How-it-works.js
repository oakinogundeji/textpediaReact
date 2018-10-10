/**
 * created by Samson Iyanda on 09-10-2018
 */
//

import React, { Fragment } from "react";

const HowItWorks = () => (
  <Fragment>
    <span>a TEXT WIKIPEDIA</span>
    <h1 className="is-size-1-desktop is-size-3-tablet is-size-3-mobile">
      HOW IT <b>WORKS ?</b>
    </h1>
    <p>
      Signup using your phone number and email address, a token will be emailed
      to you. You'll use this token in the next step to confirm your identity.{" "}
      <br />
      <br />
      Confirm your identity by entering the token at the "confirmation" page,
      upon successful completion of the signup process, a welcome email will be
      sent to you with the endpoint phone number you can send your keywords to.
      <br />
      <br />
      Whenever you need to conduct preliminary research on any keywords, simply
      SMS that keyword(s) to the endpoint phone number. When the report has been
      generated, it will be sent to your email and an SMS notification will be
      delivered to you.
      <br />
      <br />
      Finally, ensure that the keywords are spelled correctly, while Tetxpedia
      queries are case insensitive, at this time spell checking is not
      available. Enjoy the Textpedia service.
    </p>
  </Fragment>
);

export default HowItWorks;