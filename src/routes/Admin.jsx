import { Button } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import backend from '../backendLink';


const Admin = () => {

    const [contactList, setContactList] = useState([]);
    const [applyList, setApplyList] = useState([]);
    const [selected, setSelected] = useState("");



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

        let resJson = await response.json();

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
  
          let resJson = await response.json();
  
          setApplyList( [...applyList.filter(item => item._id !== id)]);
          window.location.reload(handleApply());
        } catch (err) {
          console.log(err);
        }
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
        <Button variant='contained' color='success' onClick={()=> handleApply()} >
            Apply List
        </Button>
    </div>


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