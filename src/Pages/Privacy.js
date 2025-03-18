import React, { useEffect } from "react";
import hero from "../assets/images/faq.png"; // Using the same hero image as FAQ page

const Privacy = () => {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<div>
			<div className='relative'>
				<img className='min-h-[400px] object-cover w-full' src={hero} alt='' />
				<div className='absolute top-0 left-0 text-black flex flex-col items-center justify-center h-full w-full p-4'>
					<h1 className='font-bold text-xl md:text-6xl text-center'>
						Privacy Policy
					</h1>
					<p className='text-medium text-lg text-center text-green-500 my-6 capitalize'>
						How we handle and protect your data
					</p>
				</div>
			</div>

			<div className='max-w-4xl mx-auto text-sm my-10 p-4'>
				<div className='mb-8'>
					<p className='my-4'>
						By accessing or using the Services, or by accepting our Terms and
						Conditions (the "Terms") or any other terms that incorporate this
						Privacy Policy by reference, you agree on behalf of yourself and any
						organization that you represent (together, "you") that you have read
						and Understood this Privacy Policy and that you consent to the
						collection, use, and sharing of information as discussed below. If
						you do not agree with this Privacy Policy, do not access or use the
						Services or the Platforms. This Policy is incorporated into and made
						a part of our Terms and Conditions.
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>USERS' PRIVACY RIGHTS</h2>
					<p className='my-4'>
						This Policy describes the User's privacy rights regarding Lifegate
						MFB's collection, use, storage, sharing and protection of a User's
						personal information on the Platforms and in respect of the
						Services.
					</p>
					<p className='my-4'>
						If a User creates a username, identification code, password or any
						other piece of information as part of the Platform's access security
						measures, such information will be treated as confidential and will
						not be disclosed to any third party. Lifegate MFB reserves the right
						to disable any User identification code or password, whether chosen
						by a User or allocated by the Platform at any time, if in Lifegate
						MFB's opinion a User has failed to comply with any of the Terms
						(including this Privacy Policy). If a User is Aware or suspects that
						anyone other than his/herself is aware of a user's security details,
						kindly notify Lifegate MFB as soon as possible via the address
						below.
					</p>
					<div className='bg-gray-100 p-4 rounded-md my-6'>
						<p className='font-medium'>Lifegate MFB Limited</p>
						<p>Data Protection Officer</p>
						<p>540, Ikorodu Road,</p>
						<p>Ketu, Lagos.</p>
						<p>dpo@lifegatebank.com</p>
					</div>
					<p className='my-4'>
						By continuing to use our internet banking / mobile application (the
						"Internet Banking / Mobile App"), you acknowledge and agree that you
						have carefully read and understood the terms of use and privacy
						policy.
					</p>
					<p className='my-4 font-medium'>
						Your rights in relation to Your Personal Data are as follows:
					</p>
					<ul className='list-disc pl-8 space-y-2'>
						<li>the right to have access to Your Personal Data;</li>
						<li>
							the right to be informed about the processing of Your Personal
							Data;
						</li>
						<li>
							the right to rectify any inaccurate Personal Data or any
							information about You;
						</li>
						<li>
							the right to review, modify or erase Your Personal Data and any
							other information we have about You;
						</li>
						<li>the right to restrict the processing of Your Personal Data;</li>
						<li>
							the right to block Personal Data processing in violation of any
							law;
						</li>
						<li>
							the right to be informed about any rectification or erasure of
							Personal Data or restriction of any processing carried out;
						</li>
						<li>the right to the portability of Your Personal Data; and</li>
						<li>
							the right to lodge a complaint to a supervisory authority within
							Nigeria.
						</li>
					</ul>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>
						USERS' PERSONAL INFORMATION
					</h2>
					<p className='my-4'>
						Lifegate MFB collects and use any information you supply when you
						interact with the mobile app, you share personal details like your
						name, Bank Verification Number, Valid Identification, address and
						picture. By using the mobile app to transact, you also share details
						of your transactions with us. Additionally, we may request explicit
						permission to see other Information like your address book,
						location, photos and data from your camera.
					</p>
					<p className='my-4'>
						Details you give when you sign up on the Mobile App, like your BVN,
						name, date of birth, gender, phone number, residential address, and
						email address.
					</p>
					<p className='my-4'>
						Images would also be collected for the purpose of KYC and other
						features like adding your profile picture.
					</p>
					<p className='my-4'>
						Information you give us through the in-app chat so we can help you.
					</p>
					<p className='my-4'>
						We shall also access your contact list information to enable you to
						perform certain functions like sending airtime and data to a person
						on your contact list.
					</p>
					<p className='my-4'>
						We may collect internet protocol (IP) address, browser type, device
						ID, internet service provider (ISP), information about your computer
						and software, links materials You request, your approximate
						location, referring/exit pages, date/time stamp, and other metadata.
						Platforms may embed JavaScript code into page loads, which instructs
						Users' web browsers to make web requests back to our servers to
						collect information about the User page views and other activities.
					</p>
					<p className='my-4'>
						We collect certain information from the User's browser using small
						data files called "cookies". The Platform may use session cookies to
						help recognize a User who visits multiple pages during the same
						session so that the User does not have to enter a password to access
						each page. Session cookies terminate once the User closes the
						browser.
					</p>
					<p className='my-4'>
						We also use persistent cookies to collect, store and track
						information. The Platform uses persistent cookies to store the
						User's login ID (but not the User's password) to make it easier for
						the User to login when the User returns to the website. We encode
						our cookies so that only us can interpret the information stored in
						them. You can remove or block persistent cookies using the settings
						in your browser, but this may limit your ability to use our
						Platform.
					</p>
					<p className='my-4'>
						We may employ a software technology called clear gifs or web beacons
						that help us better manage content on the Platform as well as on the
						Platform emails, by informing us what content is effective. Clear
						gifs are tiny graphics with a unique identifier, similar function to
						cookies and are used to track the online movements of the Web users.
						In contrast to cookies, which are stored on a user's computer hard
						drive, clear gifs are embedded invisibly on Web pages and are about
						the size of the period at the end of this sentence.
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>GOVERNING PRINCIPLES</h2>
					<p className='my-4'>
						Lifegate MFB will always comply with the principles outlined below
						for the purpose of collecting, storing and using a User's personal
						information.
					</p>
					<ul className='list-disc pl-8 space-y-2'>
						<li>
							Data shall be collected and processed with a specific, legitimate
							and lawful purpose which shall be consented to by the User before
							collection and processing;
						</li>
						<li>
							Data may be further processed for archiving, scientific research,
							historical research and statistical purposes for public interest
							without obtaining the consent of the User;
						</li>
						<li>
							Data collection and processing shall be adequate, accurate and
							with consideration for the dignity of the human person;
						</li>
						<li>
							Data shall only be stored for the period which is reasonably
							needed and as required by the relevant and applicable laws; and
						</li>
						<li>
							Data shall be secured against all foreseeable hazards and breaches
							such as theft, cyberattack, viral attack, dissemination, and
							manipulations of any kind.
						</li>
					</ul>
					<p className='my-4 font-medium'>
						The lawful basis we rely on for processing your Personal Information
						are:
					</p>
					<ul className='list-disc pl-8 space-y-2'>
						<li>
							Your consent; Where you agree to us collecting your Personal
							Information by using our Services.
						</li>
						<li>
							We have a contractual obligation: Without your Personal
							Information, we cannot provide our Services to you.
						</li>
						<li>
							Lifegate MFB also has a legal obligation to ensure full compliance
							with all Anti-Money Laundering and Counter-Terrorist Financing
							Laws. Lifegate MFB protects against fraud by checking your
							identity with your Personal Information.
						</li>
					</ul>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>
						SHARING AND PROTECTION OF USERS' PERSONAL INFORMATION TO THIRD
						PARTIES
					</h2>
					<p className='my-4'>
						Lifegate MFB provides such information to our subsidiaries,
						affiliated companies or other trusted third-party service providers
						or persons for the purpose of processing personal information on our
						behalf, including validating user credentials, securing data
						storage, marketing, customer service, fraud detection and other
						applicable services. Lifegate MFB requires that these parties agree
						to process such information based on our instructions and in
						compliance with this Privacy Policy and any other appropriate
						confidentiality and security measures we consider essential and
						relevant subject to applicable law. Lifegate MFB requires that these
						third-parties providers use PII and PID only in connection with the
						services they perform for Lifegate MFB.
					</p>
					<p className='my-4'>
						Lifegate MFB may share User information with law enforcement
						agencies, government officials, or other third parties in the event
						of a court order or similar legal procedure, regulatory disclosure
						or when Lifegate MFB believes in good faith that the disclosure of
						User information is necessary or advisable to report suspected
						illegal activity or to protect Lifegate MFB's property or legal
						rights.
					</p>
					<p className='my-4'>
						Except as expressly disclosed in this Privacy policy, Lifegate MFB
						will not sell or disclose User information to third parties.
						Lifegate MFB may disclose aggregated or other types of
						non-personally identifiable information to third parties for various
						purposes.
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>
						SECURITY OF USERS' PERSONAL INFORMATION
					</h2>
					<p className='my-4'>
						Lifegate MFB has implemented physical, technical, and procedural
						safeguards to protect User information from unauthorized access,
						disclosure, alteration, or destruction. Lifegate MFB uses computer
						safeguards such as firewalls and data encryption and authorizes
						access to personally identifiable information only for those
						employees, contractors, and agents who require it to fulfil their
						job responsibilities.
					</p>
					<p className='my-4'>
						Lifegate MFB utilizes a higher duty of care to protect User
						information, such as credit card or bank account numbers, if
						disclosure of a particular type of User information could cause
						direct financial loss, Lifegate MFB further encrypts such
						information and transmits it under Secure Socket Layer (SSL).
					</p>
					<p className='my-4'>
						Lifegate MFB shall only retain personal information reasonably
						required to keep providing Services to you. Where we no longer
						provide services to you, your information will be stored on our
						servers to the extent necessary to comply with regulatory
						obligations and for the purpose of fraud monitoring, detection and
						prevention. Where we retain your Personal Information, we do so in
						compliance with limitation periods under the applicable law.
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>LOCATION</h2>
					<p className='my-4'>
						All Personal Information you provide to us is stored on our secure
						servers as well as secure physical locations and cloud
						infrastructure (where applicable) for the purposes of providing
						seamless services to you, including but not limited to ensuring
						business continuity, the data that we collect from you may be
						transferred to or stored in cloud locations at globally accepted
						vendors' data centre. Whenever your information is transferred to
						other locations, we will take all necessary steps to ensure that
						your data is handled securely and in accordance with this privacy
						policy.
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>
						DATA CONFIDENTIALITY RIGHTS
					</h2>
					<h3 className='font-bold text-lg mb-2'>
						REPORTING A PERSONAL DATA BREACH
					</h3>
					<p className='my-4'>
						Lifegate MFB is required to comply with the Nigeria Data Protection
						Regulation 2019 ("NDPR") and other relevant laws and regulations
						regarding reporting requirements in relation to data breaches and
						report any personal data breach where there is a risk to the rights
						and freedoms of a User. Where a personal data breach results in a
						high risk to a User, such a User also has to be notified unless
						subsequent steps have been taken to ensure that the risk is unlikely
						to materialize, security measures were applied to render the
						personal data unintelligible (e.g. encryption) or it would amount to
						disproportionate effort to inform the User directly. In the latter
						circumstances, a public communication must be made, or an equally
						effective alternative measure must be adopted to inform such a User,
						so that he/she can take any necessary remedial action.
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>CHANGES TO THIS POLICY</h2>
					<p className='my-4'>
						We may amend this Privacy Policy at any time by posting a revised
						version on this page. The revised version will be effective at the
						time we post it unless we provide additional notice or an
						opportunity to "opt-in" because changes are material or retroactive.
						If you keep using our Services, you consent to all amendments to
						this Privacy Policy.
					</p>
					<p className='my-4'>
						You can always see the most updated changes to this Privacy Policy
						www.lifegatebank.com/privacy-policy or by contacting our Data
						Protection Officer at dpo@lifegatebank.com
					</p>
				</div>

				<div className='mb-8'>
					<h2 className='font-bold text-xl mb-4'>GOVERNING LAW</h2>
					<p className='my-4'>
						This Policy is made according to the provisions of NDPR and any
						other relevant Nigerian laws, regulations or international
						conventions applicable to Nigeria.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Privacy;
