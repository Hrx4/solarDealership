import { Button } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import backend from '../backendLink';
import { toast } from 'react-toastify';


const Admin = () => {

    const [contactList, setContactList] = useState([]);
    const [applyList, setApplyList] = useState([]);
    const [selected, setSelected] = useState("");
    const [img, setImg] = useState("");


      const [formData, setFormData] = useState({
        name: '',
        registrationNo: '',
        password:'',
        email: '',
        mobileNo: '',
        fatherName: '',
        aadharNo: '',
        panNo: '',
        accountNo: '',
        ifscCode: '',
        photo: '',
        districtName: '',
        landmark: '',
        address: '',
        registrationPay: ''
      });

      const handleChange = (e) => {
        const { name, value,files } = e.target;
        console.log(e);
        if(files) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files[0]
          }));
        }
        else{
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
          }));
        }
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        if(formData.photo.type === "image/jpeg" || formData.photo.type === "image/png"){
            const data = new FormData();
            data.append("file" , formData.photo);
            data.append("upload_preset" , "solardealership");
            data.append("cloud_name" , "dkm3nxmk5")
            await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload" , {
              method:"post",
              body:data,
            }).then((res) => res.json())
            .then((data)=> {
              console.log(data.url);
              setImg(data.url)
            })
            .catch((err) => {
              console.log(err);
            });
        }

        
    try {
      const res = await fetch(`${backend}/customer/create`, {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name : formData.name,
           registrationNo :formData.registrationNo,
           password :formData.password,
           email :formData.email,
           mobileNo :formData.mobileNo,
           so :formData.fatherName,
           aadharNo:formData.aadharNo,
           panNo:formData.panNo,
           accountNo:formData.accountNo,
           ifscCode:formData.ifscCode,
           photo: img,
           distName:formData.districtName ,
           landMark:formData.landmark,
           address:formData.address,
           registrationPay:formData.registrationPay,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    toast.success('Form submitted', {
      position: toast.POSITION.TOP_CENTER
  });



        console.log('Form submitted:', formData);
      };
    



   const handleContact = async() => {
    setSelected("contact")
    try {
        const response = await fetch(`${backend}/getcontacts/`, {
          method: "GET",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        let resJson = await response.json();
        setContactList(resJson);

      } catch (err) {
        console.log(err);
      }

    }


    const handleDelete = async(id) =>{
      const key = JSON.parse(id)

      try {
        const response = await fetch(`${backend}/getcontacts/${key}`, {
          method: "DELETE",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        await response.json();

        setContactList( [...contactList.filter(item => item._id !== id)]);
        window.location.reload(handleContact());
      } catch (err) {
        console.log(err);
      }
    }


    const handleApply = async() => {
      setSelected("apply")
      try {
          const response = await fetch(`${backend}/getapply/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          let resJson = await response.json();
  
  
          if (response.status === 200) {
            setApplyList(resJson);
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      }


      const handleDeleteApply = async(id) =>{
        const key = JSON.parse(id)
  
        try {
          const response = await fetch(`${backend}/getapply/${key}`, {
            method: "DELETE",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          await response.json();
  
          setApplyList( [...applyList.filter(item => item._id !== id)]);
          window.location.reload(handleApply());
        } catch (err) {
          console.log(err);
        }
      }
  const handelCustomer = () => {
    setSelected('customer')
  }
  


    useEffect(() => {
    }, [contactList])

  return (
<>


<div className="adminHeader">
  <h1>
  Hello! Admin
  </h1>
</div>
    <div className='admin'>
        <Button variant='contained' color='success'  onClick={()=> handleContact()} >
            Contact List
        </Button>
        <Button variant='contained' color='success'  onClick={()=> handelCustomer()} >
          Customer
        </Button>
        <Button variant='contained' color='success' onClick={()=> handleApply()} >
            Apply List
        </Button>

    </div>

{
  ((contactList.length === 0 && selected==="contact")  || (applyList.length === 0 && selected==="apply")) ?
  <div className='emptylist'>
    <h1>
    List Is Empty!!
    </h1>
  </div>
  :
  null
}
{
  (( selected==="customer")) ?

  <div className="admin-customer-form">
      <form className="customer-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationNo">Registration no:</label>
            <input
              type="text"
              id="registrationNo"
              name="registrationNo"
              value={formData.registrationNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNo">Mobile no:</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fatherName">S/o:</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="aadharNo">Aadhar no:</label>
            <input
              type="text"
              id="aadharNo"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="panNo">Pan no:</label>
            <input
              type="text"
              id="panNo"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountNo">Ac no:</label>
            <input
              type="text"
              id="accountNo"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ifscCode">Ifsc code:</label>
            <input
              type="text"
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="districtName">Dist name:</label>
            <input
              type="text"
              id="districtName"
              name="districtName"
              value={formData.districtName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="landmark">Land mark:</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationPay">Registration pay:</label>
            <input
              type="text"
              id="registrationPay"
              name="registrationPay"
              value={formData.registrationPay}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  :
  null
}
    <div className='contactList' >
    {(contactList.length>0  && selected==="contact")? 

    contactList.map(
      (contact) => (
          <div className="contactCard"key={contact._id}>
            <div className="contactdetails">
              <div className="name">
              {contact.name} 
              </div>
              <div className="email">
              {contact.email} 
              </div>
              <div className="phonenumber">
              {contact.phoneNumber}
              </div>
              <div className="message">
              {contact.message}
              </div>
            </div>
            <Button variant='contained' color='error' size='small' onClick={() => handleDelete(JSON.stringify(contact._id))}>
              Delete
            </Button>
          </div>
      )
    )
     : <div> </div>
    
  }

  </div>


  <div className='contactList' >

{(applyList.length>0 && selected==="apply") ? 
    applyList.map(
      (apply) => (
          <div className="contactCard"key={apply._id}>
            <div className="contactdetails">
              <div className="name">
              {apply.fullName} 
              </div>
              <div className="email">
              {apply.email} 
              </div>
              <div className="phonenumber">
              {apply.phoneNumber}
              </div>
              <div className="priceRange">
              {apply.priceRange}
              </div>
              <div className="dealership">
              {apply.dealership}
              </div>
              <div className="state">
              {apply.state}
              </div>
              <div className="city">
              {apply.city}
              </div>
            </div>
            <Button variant='contained' color='error' size='small' onClick={() => handleDeleteApply(JSON.stringify(apply._id))}
>
              Delete
            </Button>
          </div>
      )
    ) : <div></div>
  }
</div>

</>
  )
}

export default Admin