import React, { useEffect } from "react";
import hero from "../assets/images/faq.png";
const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <div className='relative'>
        <img className='min-h-[400px] object-cover w-full' src={hero} alt='' />
        <div className='absolute top-0 left-0 text-black flex flex-col items-center justify-center h-full w-full p-4'>
          <h1 className='font-bold text-xl md:text-6xl text-center'>
            Terms and Condition
          </h1>
          <p className='text-medium text-lg text-center text-green-500 my-6 capitalize'>
            Below are terms guiding our operations
          </p>
        </div>
      </div>
      <div className='max-w-4xl mx-auto text-sm my-10 p-4'>
        <p className='my-4'>
          Welcome to our Terms and Conditions of Use. These terms affect your
          legal rights, endeavour to read them and treat with utmost importance.
        </p>
        <p className='my-4'>
          Gate bank maintains this website (the “Website”) to provide you with
          information about products and services available through us, and
          information about Gate bank. Please read these Terms and Conditions
          carefully before accessing or using this Website.
        </p>
        <p className='my-4'>
          By accessing or using the Website, you agree to these Terms and
          Conditions. Gate bank reserves the right to change, modify, add or
          remove portions of the terms at any time. Please check these terms
          periodically for changes.
        </p>
        <p className='my-4'>
          If you do not wish to be bound by this agreement, do not access the
          Website. If you have any questions about this Agreement, please
          contact us via email at hello@lifegatebank.com
        </p>
        <h1 className='font-bold uppercase'>NO WARRANTY</h1>
        <p className='mt-0 my-4'>
          We created this Website for the convenience of our Internet visitors.
          The information (including text, graphics and functionality) is
          presented “as is” and “as available” without express or implied
          warranties including, but not limited to, implied warranties of
          non-infringement, merchantability and fitness for a particular
          purpose. We expressly disclaim any liability for errors and omissions
          regarding the information and materials contained in the Website. Due
          to the nature of the Internet, we cannot guarantee the accuracy or
          completeness of the information contained in this Website or its
          suitability for any purpose.
        </p>
        <h1 className='font-bold uppercase'>VIRUSES</h1>
        <p className='mt-0 my-4'>
          Due to the marked increase in the fabrication and proliferation of
          computer viruses affecting the Internet, we want to warn you about
          infections or viral contamination on your system. It is your
          responsibility to scan any and all downloaded materials received from
          the Internet. We are not responsible or liable for any damage caused
          by such hazards.
        </p>
        <h1 className='font-bold uppercase'>ACCOUNTS</h1>
        <p className='mt-0 my-4'>
          You must operate an account with the Company to be able to use the
          Mobile Application. The Mobile Application can be used on a mobile
          device running an operating system supported by us. To log onto the
          Mobile Application, you will need to enter your User ID and other
          security information that we request, or when available, by using
          biometric authentication which is a security process that relies on
          your unique biological characteristics so as to verify your identity.
          The current supported biometric authentication methods are touch ID
          and face ID methods.
        </p>

        <p className='mt-0 my-4'>
          You understand that when using the biometric authentication to log
          onto the Mobile Application, any fingerprint, facial map, or any other
          biometric data stored on your mobile device can be used to access your
          Mobile Application and your accounts and to give instructions for
          certain transactions. You therefore should ensure that your mobile
          device only stores your own fingerprint(s), facial map, or other
          biometric data, and will not store anyone else’s biometric credentials
          (e.g. fingerprint, facial map or any other biometric data).
        </p>
        <p className='mt-0 my-4'>
          The biometric authentication on the Mobile Application is performed by
          the biometric authentication module of your device, and we do not
          control the functionality of any mode of biometric authentication
          including fingerprint, touch ID or face ID. We make no representation
          or warranty as to the security of the biometric authentication
          function on your mobile device and we do not have access to your
          fingerprint(s) or facial recognition information. For more information
          on how the biometric functionality works for your mobile device,
          please refer to your device manufacturer’s support resources.
        </p>
        <p className='mt-0 my-4'>
          You understand and agree that any fingerprint stored on your mobile
          device can be used to access your account in GATE BANK, therefore you
          shall take all reasonable measures to keep your mobile device and the
          password used to register your fingerprint(s), facial map or other
          biometric data on your mobile device in your safe custody, and to
          prevent unauthorized use or disclosure of your mobile device and the
          password. You shall be fully responsible for and bear the risk of any
          accidental or unauthorized disclosure of your mobile device and
          password to any other person or any unauthorized use of your mobile
          device and password by any other person.
        </p>
        <p className='mt-0 my-4'>
          We may notify you from time to time about changes in the security
          information. We will automatically log you out of the Mobile
          Application if you are inactive for 5 minutes. If you create an
          account in the Mobile Application, you are responsible for maintaining
          the security of your account and you are fully responsible for all
          activities that occur under the account and any other actions taken in
          connection with it. Providing false contact information of any kind
          may result in the termination of your account. You must immediately
          notify us via hello@lifegatebank.com of any unauthorized uses of your
          account or any other breaches of security. We will not be liable for
          any acts or omissions by you, including any damages of any kind
          incurred as a result of such acts or omissions.
        </p>
        <h1 className='font-bold'>LIMITATION OF LIABILITY</h1>
        <p className='mt-0 my-4'>
          Your use of the Website is at your own risk. To the maximum extent
          permitted by law, neither Gate bank nor any other party involved in
          creating, producing or delivering the Website, will be liable for any
          direct, indirect, incidental, consequential or punitive damages
          (including, without limitation, loss of profits, cost of substitute
          service or lost opportunity), howsoever caused, arising out of your
          access to, use of, or reliance on the Website, even if Gate bank has
          been advised of the possibility of such damages. Without limiting the
          foregoing, Gate bank assumes no responsibility for, and will not be
          liable for any damages relating to or caused by any viruses which may
          affect your computer equipment or other property on account of your
          access to, use of, or downloading from, the Website. Gate bank cannot
          and does not guarantee continuous, uninterrupted or secure access to
          the Website. You specifically acknowledge and agree that Gate bank is
          not liable for any defamatory, offensive, fraudulent, or otherwise
          illegal conduct of any user.
        </p>
        <h1 className='font-bold'>CONSENT</h1>
        <p className='my-2'>Using the Mobile Application and website, </p>
        <div className='ml-4'>
          <li className='list-decimal my-3'>
            you consent to receiving electronic communication from the Company
            relating to your account. We may communicate with you by electronic
            mail (e-mail), short message service (sms) or by posting notices on
            the Mobile Application or through other methods.
          </li>
          <li className='list-decimal my-3'>
            For contractual purposes, you consent to receive communications from
            us electronically and you agree that all agreements, notices,
            disclosures and other communications that we provide you
            electronically satisfy any legal requirement that such communication
            be in writing.
          </li>
          <li className='list-decimal my-3'>
            You also consent to receiving certain other communication from us,
            such as newsletters, special offers, questionnaires, customer
            surveys or other announcements via email, sms or other methods. You
            may opt out of receiving non-transactional communications, including
            marketing communications from us by following the directions in our
            e-mail to “unsubscribe” from our mailing list, or by sending an
            e-mail request to ***************. Please be aware that if you
            choose not to receive such communication, certain offers attached to
            services you have chosen may be affected. We will still communicate
            with you in connection with transactional communications, including
            but not limited to servicing your account and customer services.
          </li>
          <li className='list-decimal my-3'>
            You consent to us restricting your account and reporting to law
            enforcement agencies, including but not limited to the Economic and
            Financial Crimes Commission, the Nigerian Financial Intelligence
            Unit, the Nigerian Police Force, e.t.c., if a fraudulent activity is
            associated with the operation of your account.
          </li>
          <li className='list-decimal my-3'>
            You consent to us to provide information to Credit Bureau Agencies
            as mandated by Law and maybe required from time to time.
          </li>
          <li className='list-decimal my-3'>
            You consent to us reporting to Nigeria Inter-Bank Settlement Systems
            Plc (NIBBS) for update on the Watchlist Database of the Nigerian
            Banking Industry and the CBN if a fraudulent activity is associated
            with the operation of your account.
          </li>
          <li className='list-decimal my-3'>
            You consent that we can share your information for any purpose
            permissible under the law. Under the Nigeria Data Protection
            Regulation 2019 (NDPR), there are certain occasions when GATE BANK
            Ltd must obtain your explicit consent to use your information, known
            as ‘Personal Data’. Personal Data includes, but is not limited to
            your name, address, telephone number, email address, card details
            and Bank Verification Number (BVN). We would like to hold and use
            your information for the purposes set in the Data Processing Notice
            which require consent in accordance with the Privacy Policy
          </li>
        </div>
        <h1 className='font-bold'>INDEMNITY</h1>
        <p className='my-3'>
          You agree to indemnify and hold Gate bank, its subsidiaries or
          affiliates, and their respective directors, officers, employees, and
          agents, harmless against any and all liabilities, claims and expenses,
          including reasonable attorneys’ fees, arising from breach of these
          Terms and Conditions, any other related policy, your use or access of
          the Website or any Internet site linked to or from the Website, or in
          connection with the transmission of any content on the Website.
        </p>
        <h1 className='font-bold'>AUTHORISED USE</h1>
        <p className='my-3'>
          The information provided on this Website is solely for the personal
          use of Website users. You are authorised to view and copy the
          information available on this Website for personal purposes only,
          provided that any copies include any trade mark notices as they may
          appear on those pages copied. Except for the personal use of Website
          users, you may not copy, reproduce, modify, display, distribute,
          perform, disseminate, transmit, transfer, sell, license, publish, use
          to create a derivative work, or use for any public or commercial
          purposes any of the contents of this Website without the express prior
          written consent of Gate bank. You agree to access and use the Website
          only for lawful purposes.
        </p>
        <h1 className='font-bold'>LINKS TO THIS WEBSITE</h1>
        <p className='my-3'>
          Gate bank has not reviewed all of the sites which are linked to the
          Website, and the fact of such links does not indicate any endorsement,
          authorisation, sponsorship or affiliation with respect to the material
          contained on any linked site. Gate bank is not responsible for the
          contents of any site linked to the Website. Your connection to and use
          of any such linked site is at your own risk.
        </p>
        <h1 className='font-bold'>COPYRIGHTS AND TRADE MARKS</h1>
        <p className='my-3'>
          Copyrights of the pages and the screens displaying the pages, and the
          information and material therein, is owned by Gate bank unless
          otherwise indicated and may not be distributed, modified, reproduced
          in whole or in part without the prior written permission of Gate bank.
          The display of trade marks herein does not imply that a license of any
          kind has been granted. Any downloading, re-transmission, or other
          copying or modification of the trademarks and/or the contents herein
          may be a violation of applicable laws and regulations and could
          subject the copier to legal action. The trademarks and logos
          (collectively the “Trade Marks”) displayed on this site, unless
          otherwise indicated, are registered and unregistered trademarks of
          Gate bank and its subsidiaries and affiliates. Gate bank and its
          trademarks may only be used publicly with the permission of Gate bank
          and with proper acknowledgement. Use of any Gate bank trademarks
          without the prior written consent of Gate bank may constitute
          copyright infringement or passing off in violation of applicable laws.
        </p>
        <h1 className='font-bold'>GOVERNING LAW</h1>
        <p className='my-3'>
          You agree that the use of this site shall be governed by and construed
          in accordance with the laws of the Federal Republic of Nigeria.
        </p>
        <h1 className='font-bold'>CHANGES AND AMENDMENTS</h1>
        <p className='my-3'>
          We reserve the right to modify this Agreement or its policies relating
          to the Mobile Application or Services at any time, effective upon
          posting of an updated version of this Agreement in the Mobile
          Application. When we do, we will send you an email to notify you.
          Continued use of the Mobile Application after any such changes shall
          constitute your consent to such changes.
        </p>
        <h1 className='font-bold'>ACCEPTANCE OF THESE TERMS</h1>
        <p className='my-3'>
          You acknowledge that you have read this Agreement and agree to all its
          terms and conditions. By using the Mobile Application or its Services
          you agree to be bound by this Agreement. If you do not agree to abide
          by the terms of this Agreement, you are not authorized to use or
          access the Mobile Application and its Services.
        </p>
      </div>
    </div>
  );
};

export default Terms;
