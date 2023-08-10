import { Box, Button, CircularProgress, Modal } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import backend from '../backendLink';
import { ToastContainer, toast } from 'react-toastify';


const Admin = () => {

    const [contactList, setContactList] = useState([]);
    const [applyList, setApplyList] = useState([]);
    const [customer, setCustomer] = useState([]);

    const [selected, setSelected] = useState("");
    const [img, setImg] = useState("");
    const [updateContactId, setUpdateContactId] = useState("");

    const [loading , setLoading] = useState(false)

    const [open, setOpen] = useState(false);
    const [applyOpen, setApplyOpen] = useState(false);
    const [customerOpen, setCustomerOpen] = useState(false);



  const ContactModalOpen = (id,name , email , phoneNumber , message) => {
    setOpen(true)
    const key = id
    setUpdateContactId(key);
    setContactData({
      name: name ,
      email: email ,
      phoneNumber: phoneNumber ,
      message: message
    })

  };

  const ApplytModalOpen = (id , fullName,
  phoneNumber,
  email,
  dealership,
  priceRange,
  state,
  city) => {
    setApplyOpen(true)
    const key = id
    setUpdateContactId(key);
    setApplyData({
      fullName:fullName,
      phoneNumber:phoneNumber,
      email: email,
      dealership: dealership,
      priceRange: priceRange,
      state: state,
      city: city
    })

  };

  const CustomerModalOpen = (id , name,
  registrationNo,
  email,
  mobileNo,
  fatherName,
  aadharNo,
  panNo,
  accountNo,
  ifscCode,
  photo,
  districtName,
  landmark,
  address,
  registrationPay) => {
    console.log(photo);
    const key = id
    setUpdateContactId(key);
    setFormData({
      name: name,
        registrationNo: registrationNo,
        email: email,
        mobileNo: mobileNo,
        fatherName: fatherName,
        aadharNo: aadharNo,
        panNo: panNo,
        accountNo: accountNo,
        ifscCode: ifscCode,
        districtName: districtName,
        photo:photo,
        landmark: landmark,
        address:address,
        registrationPay:registrationPay
    })
    setImg(photo);
    setCustomerOpen(true)

  };

  const handleClose = () => setOpen(false);
  const handleApplyClose = () => setApplyOpen(false);
  const handleCustomerClose = () => setCustomerOpen(false);



    const [contactdata, setContactData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });

    const handleContactChange = (e) => {
      const { name, value } = e.target;
      setContactData((prevContactData) => ({
        ...prevContactData,
        [name]: value
      }));
    };



    const [applyData, setApplyData] = useState({
      fullName: '',
      phoneNumber: '',
      email: '',
      dealership: '',
      priceRange: '',
      state: '',
      city: ''
    });
  
    const handleApplyChange = (e) => {
      const { name, value } = e.target;
      setApplyData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };






    const handleCustomerList = async() => {
      setSelected("customerList")
      setLoading(true)
      try {
          const response = await fetch(`${backend}/customer/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setCustomer(resJson);
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
        setLoading(false)

      }

  

const updateContact = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${backend}/getcontacts/${updateContactId}`, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         name: contactdata.name,
      email: contactdata.email,
      phoneNumber: contactdata.phoneNumber,
      message: contactdata.message
      }),
    });

    const resJson = await response.json();
    console.log(resJson);
      if (response.status === 201) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }

  } catch (err) {
    console.log(err);
  }
  window.location.reload()

}

const updateApply = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${backend}/getapply/${updateContactId}`, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: applyData.fullName,
        phoneNumber: applyData.phoneNumber,
        email: applyData.email,
        dealership: applyData.dealership,
        priceRange: applyData.priceRange,
        state: applyData.state,
        city: applyData.city,
      }),
    });

    const resJson = await response.json();
    console.log(resJson);
      if (response.status === 201) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }

  } catch (err) {
    console.log(err);
  }
  window.location.reload()
}


const updateCustomer = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${backend}/customer/${updateContactId}`, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name : formData.name,
           registrationNo :formData.registrationNo,
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

    const resJson = await response.json();
      console.log(resJson);
      if (response.status === 201) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }

  } catch (err) {
    console.log(err);
  }
  window.location.reload()

}


  

      const [formData, setFormData] = useState({
        name: '',
        registrationNo: '',
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

      const handleChange = async (e) => {
        const { name, value,files } = e.target;
        if(files) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files[0]
          }));
          if(files[0].type === "image/jpeg" || files[0].type === "image/png"){
            const data = new FormData();
            data.append("file" , files[0]);
            data.append("upload_preset" , "solardealership");
            data.append("cloud_name" , "dkm3nxmk5")
            await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload" , {
              method:"post",
              body:data,
            }).then((res) => res.json())
            .then((data)=> {
               setImg(data.url)
            })
            .catch((err) => {
              console.log(err);
            });
        }
        }
        else{
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
          }));
        }
        console.log(e.target);
        console.log(img);
      };

      const handleSubmit = async(e) => {
        e.preventDefault();
        
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
           email :formData.email,
           mobileNo :formData.mobileNo,
           so :formData.fatherName,
           aadharNo:formData.aadharNo,
           panNo:formData.panNo,
           accountNo:formData.accountNo,
           ifscCode:formData.ifscCode,
           photo: img ,
           distName:formData.districtName ,
           landMark:formData.landmark,
           address:formData.address,
           registrationPay:formData.registrationPay,
        }),
      });
      const resJson = await res.json();
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
      };
    



   const handleContact = async() => {
    setSelected("contact")
    setLoading(true)

    try {
        const response = await fetch(`${backend}/getcontacts/`, {
          method: "GET",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const resJson = await response.json();
        setContactList(resJson);

      } catch (err) {
        console.log(err);
      }
      setLoading(false)

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
      setLoading(true)

      try {
          const response = await fetch(`${backend}/getapply/`, {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          const resJson = await response.json();
  
  
          if (response.status === 200) {
            setApplyList(resJson);
          } else {
            console.log("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
        setLoading(false)

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


      const handleDeleteCustomer = async(id) =>{
        const key = JSON.parse(id)
  
        try {
          const response = await fetch(`${backend}/customer/${key}`, {
            method: "DELETE",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
  
          await response.json();
  
          setCustomer( [...customer.filter(item => item._id !== id)]);
          window.location.reload();
        } catch (err) {
          console.log(err);
        }
      }
  




  const handelCustomer = () => {
    setSelected('customer')
    setFormData({
      name: '',
        registrationNo: '',
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
    })
    setImg("");

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
        <Button variant='contained' color='success' size='small' onClick={()=> handleContact()} >
            Contact List
        </Button>
        <Button variant='contained' color='success' size='small' onClick={()=> handelCustomer()} >
          Add Customer
        </Button>
        <Button variant='contained' color='success' size='small' onClick={()=> handleApply()} >
            Apply List
        </Button>
        <Button variant='contained' color='success' size='small' onClick={()=> handleCustomerList()} >
            Customer List
        </Button>

    </div>

{
  ((contactList.length === 0 && selected==="contact")  || (applyList.length === 0 && selected==="apply") || (customer.length === 0 && selected==="customerList")) ? 
  <div className='emptylist'>
    <h1>
    List Is Empty!!
    </h1>
  </div>
  :
  null
}
{loading ? <div className="loader"> 
  Please Wait Your Data Is Loading......
  <CircularProgress/>
  </div> : null}
{
  (( selected==="customer")) ?
  

  <div className="admin-customer-form">
          <ToastContainer/>
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


    <div className="contacttable">
        {(contactList.length>0  && selected==="contact")? 
    
    <table >
        {
          <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>Phone no</th>
          <th>Message</th>
          <th>Buttons</th>
        </tr>
        }
        {
        contactList.map(
          (contact) => (
           
            <tr key={contact._id}>
            <td>
            {contact.name}
            </td>
            <td>
              {contact.email}
              </td>
              <td>
              {contact.phoneNumber} 
              </td>
              <td>
              {contact.message} 
              </td>
            <td>
              <Button variant='contained' color='error' size='small' onClick={() => handleDelete(JSON.stringify(contact._id))}>
                Delete
              </Button>
              <Button variant='contained' color='success' size='small' onClick={() =>ContactModalOpen(
                contact._id,
                contact.name,
                contact.email,
                contact.phoneNumber,
                contact.message
                )} >
                  Update
                </Button>
            </td>
    
          </tr>

          )
        )}
        </table>
         : null
      }
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}}>
          <form className="contact-form" onSubmit={updateContact}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactdata.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactdata.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={contactdata.phoneNumber}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactdata.message}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <button className='apply-btn' type="submit">Submit</button>
              </form>

        </Box>
      </Modal>



    <div className="contacttable">

{(applyList.length>0 && selected==="apply") ? 

    <table >
      <tbody>
      {
        <tr>
        <th>fullName</th>
        <th>Email</th>
        <th>Phone no</th>
        <th>priceRange</th>
        <th>dealership</th>
        <th>state</th>
        <th>city</th>
        <th>Buttons</th>
      </tr>
      }
      {applyList.map(
        (apply) => (

          <tr key={apply._id}>
              <td>
              {apply.fullName}
              </td>
              <td>
              {apply.email}
              </td>
              <td>
              {apply.phoneNumber}
              </td>
              <td>
              {apply.priceRange}
              </td>
              <td>
              {apply.dealership}
              </td>
              <td>
              {apply.state}
              </td>
              <td>
              {apply.city}
              </td>
              <td>
                <Button variant='contained' color='error' size='small' onClick={() => handleDeleteApply(JSON.stringify(apply._id))}>
                  Delete
                </Button>
                <Button variant='contained' color='success' size='small' onClick={() =>ApplytModalOpen(
                    apply._id , 
                    apply.fullName,
                    apply.phoneNumber,
                    apply.email,
                    apply.dealership,
                    apply.priceRange,
                    apply.state,
                    apply.city
                  )}>
                  Update
                </Button>
              </td>
      
            </tr>
        )
      )} 
      </tbody>
    </table>
    : null
  }
</div>




<Modal
        open={applyOpen}
        onClose={handleApplyClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:"auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}}>
<form className="apply-now-form" onSubmit={updateApply}>
      <div className="form-group">
        <label htmlFor="fullName">Enter full name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={applyData.fullName}
          onChange={handleApplyChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={applyData.phoneNumber}
          onChange={handleApplyChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={applyData.email}
          onChange={handleApplyChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="priceRange">Choose your dealership:</label>
        <select
          id="dealership"
          name="dealership"
          value={applyData.dealership}
          onChange={handleApplyChange}
          required
        >
          <option value="">Select price range</option>
          <option value="15 Lakh">Dealer</option>
          <option value="20 Lakh">Distributer</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="priceRange">Price range:</label>
        <select
          id="priceRange"
          name="priceRange"
          value={applyData.priceRange}
          onChange={handleApplyChange}
          required
        >
          <option value="">Select price range</option>
          <option value="15 Lakh">15 to 20 Lakh</option>
          <option value="20 Lakh">20 to 30 Lakh</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={applyData.state}
          onChange={handleApplyChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City/District:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={applyData.city}
          onChange={handleApplyChange}
          required
        />
      </div>
      <button className='apply-btn' type="submit">Apply Now</button>
    </form>

        </Box>
      </Modal>




<div className="contacttable">
        {(customer.length>0  && selected==="customerList")? 
    
    <table >
        {
          <tr>
            <th>name</th>
            <th>registrationNo</th>
            <th>email</th>
            <th>mobileNo</th>
            <th>fatherName</th>
            <th>aadharNo</th>
            <th>panNo</th>
            <th>accountNo</th>
            <th>ifscCode</th>
            <th>districtName</th>
            <th>landmark</th>
            <th>address</th>
            <th>registrationPay</th>
            <th>Buttons</th>

        </tr>
        }
        {
        customer.map(
          (customer) => (
           
            <tr key={customer._id}>
              <td>
                {customer.name}
              </td>
              <td>
              {customer.registrationNo}
              </td>
              
              <td>
{customer.email}
              </td>
              <td>
            {customer.mobileNo}
              </td>
              <td>
            {customer.so}
              </td>
              <td>
            {customer.aadharNo}
              </td>
              <td>
{customer.panNo}
              </td>
              <td>
              {customer.accountNo}
              </td>
              <td>
            {customer.ifscCode}
              </td>
              <td>
              {customer.distName}
              </td>
              <td>
            {customer.landMark}
              </td>
              <td>
        {customer.address}
              </td>
              <td>
              {customer.registrationPay}
              </td>
              <td>
                <Button variant='contained' color='error' size='small' onClick={() => handleDeleteCustomer(JSON.stringify(customer._id))}>
                  Delete
                </Button>
                <Button variant='contained' color='success' size='small' onClick={() =>CustomerModalOpen(
                  customer._id,
                  customer.name,
                  customer.registrationNo,
                  customer.email,
                  customer.mobileNo,
                  customer.so,
                  customer.aadharNo,
                  customer.panNo,            
                  customer.accountNo,
                  customer.ifscCode, 
                  customer.photo,            
                  customer.distName,
                  customer.landMark,
                  customer.address,
                  customer.registrationPay,
                  )}>
                    Update
                  </Button>
              </td>
    
          </tr>

          )
        )}
        </table>
         : null
      }
    </div>


    <Modal
        open={customerOpen}
        onClose={handleCustomerClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"65%" ,md:400},
  height:"70vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY:"scroll"
}}>
<form className="customer-form" onSubmit={updateCustomer}>
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

        </Box>
      </Modal>


</>
  )
}

export default Admin