import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "../Components/Form/input";
import Swal from "sweetalert2";
import Spinner from "../Components/spinner";
import ApplyTerms from "../Components/applyTerms";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isTermAgreed, setIsTermAgreed] = useState(false);

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const imagesHandler = (e) => {
    setImages({ ...images, [e.target.name]: e.target.files[0] });
  };

  const clickHandler = () => {
    setIsModalShown(false);
  };
  console.log(isTermAgreed);
  const agreeHander = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setIsTermAgreed(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isTermAgreed) {
      setLoading(true);
      const data = { ...formData, ...images };
      try {
        const res = await axios.post(
          "https://api.lifegatebank.com/api/v1/register",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "SuccessFul!",
          text: "Data Submitted successfully",
          button: "Ok!",
        });
        navigate("/");
        window.location.reload();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.message,
          button: "Ok!",
        });
        console.log(error);
        setLoading(false);
      }
    } else
      alert(
        "You Cannot Submit this form because you have not agree to the terms and conditions of this loan"
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='p-4 my-10 max-w-5xl mx-auto'>
        <h4 className='font-bold text-xl'>Personal Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='name'
              title='First Name'
              id='firstname'
            />
            <Input
              setItem={inputHandler}
              input
              type='name'
              title='Last Name'
              id='lastname'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='date'
              title='Date of Birth'
              id='dob'
            />
            <Input
              dropdown
              setItem={inputHandler}
              data={["Select", "Single", "Married", "Divorced"]}
              type='text'
              title='Marital Status'
              id='marital_status'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='email'
              title='Email Address'
              id='email'
            />
            <Input
              setItem={inputHandler}
              input
              type='tel'
              title='Phone Number'
              id='phone_number'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              dropdown
              setItem={inputHandler}
              data={["Select", "Male", "Female"]}
              type='text'
              title='Gender'
              id='gender'
            />
            <Input
              setItem={inputHandler}
              input
              type='number'
              title='BVN'
              id='bvn'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='text'
              title='Full Residential Address'
              id='residential_address'
            />
            <Input
              dropdown
              setItem={inputHandler}
              data={[
                "Select",
                "Temporary Owned",
                "Rented",
                "Family Owned",
                "Personally Owned",
                "Employer Provided",
              ]}
              type='text'
              title='Residential Type'
              id='residential_type'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              dropdown
              data={["Select", "Business", "Employed", "Artisan"]}
              type='text'
              title='Occupation'
              id='occupation'
            />
            <Input
              // setItem={inputHandler}
              input
              type='name'
              title={`Mother's Maiden Name`}
              id=''
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='name'
              title='Next of Kin'
              id='next_of_kin'
            />
            <Input
              setItem={inputHandler}
              input
              type='tel'
              title='Next of Kin Mobile Number'
              id='next_of_kin_number'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='text'
              title='Relationship'
              id='relationship'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='Passport'
              id='passport'
            />
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='ID Card'
              id='id_card'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='Utility Bill'
              id='utility_bill'
            />
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='Signature'
              id='signature'
            />
          </div>
        </div>
        <h4 className='font-bold text-xl'>Guarantor's Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='name'
              title='First Name'
              id='guarantor_firstname'
            />
            <Input
              setItem={inputHandler}
              input
              type='name'
              title='Last Name'
              id='guarantor_lastname'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='email'
              title='Email Address'
              id='guarantor_email'
            />
            <Input
              setItem={inputHandler}
              input
              type='tel'
              title='Phone Number'
              id='guarantor_phone'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='Passport'
              id='guarantor_passport'
            />
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='ID Card'
              id='guarantor_idcard'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={imagesHandler}
              input
              type='file'
              title='Signature'
              id='guarantor_signature'
            />
            <Input
              // setItem={inputHandler}
              input
              type='file'
              title='Utility Bill'
              id=''
            />
          </div>
        </div>
        <h4 className='font-bold text-xl'>Employment Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='name'
              title={`Employer's Full Name`}
              id='employer_name'
            />
            <Input
              setItem={inputHandler}
              input
              type='name'
              title={`Employer's Address`}
              id='employer_address'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              // setItem={inputHandler}
              input
              type='tel'
              title={`Employer's Phone Number`}
              id=''
            />
            <Input
              // setItem={inputHandler}
              input
              type='text'
              title={`Employer's Position`}
              id=''
            />
          </div>
        </div>
        <h4 className='font-bold text-xl'>Loan Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              setItem={inputHandler}
              input
              type='number'
              title={`Requested Amount`}
              id='loan_requested_amount'
            />
            <Input
              setItem={inputHandler}
              dropdown
              data={[
                "Select",
                "1 Month",
                "3 Months",
                "6 Months",
                "9 Months",
                "12 Months",
              ]}
              type='text'
              title={`Loan Tenure`}
              id='loan_tenure'
            />
          </div>
        </div>

        <h2
          className='my-3 cursor-pointer text-green-600 text-sm'
          onClick={() => setIsModalShown(true)}
        >
          Read Terms and Condition
        </h2>

        <div className='flex gap-3 items-center'>
          <input type='checkbox' onChange={agreeHander} />
          <h2>I have read and agreed to all terms </h2>
        </div>

        <div className='flex items-center justify-center my-10'>
          <button className='bg-[#028006] rounded-md hover:bg-green-500 transition text-white p-4 px-12'>
            {loading ? (
              <Spinner loaderText={"Submitting..."} />
            ) : (
              " Submit Application"
            )}
          </button>
        </div>
      </form>
      <ApplyTerms isModalShown={isModalShown} clickHandler={clickHandler} />
    </div>
  );
};

export default Apply;
