import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { MailIcon } from "./MailIcon";


const cities = [
  { name: "Ahmedabad" },
  { name: "Gandhinagar" },
  { name: "Surat" },
  { name: "Vadodara" },
];


const DocRegisterForm = () => {

  const { data: session, status } = useSession()
  console.log(session, 'session')



  const [formData, setFormData]: any = useState({
    name: '',
    email: session?.user?.email,
    doctorEmail: "",
    doctorPhone: "",
    yearOfRegistration: "",
    registrationNumber: "",
    stateMedicalCouncil: "",
    registeredMedicalPractitiner: "",
    higestQualification: "",
    collage: "",
    address: "",
    specialities: [],
  });

  async function handleNextButtonClick() {
    console.log('next button')
    console.log(formData, 'frmda')
 

    const data = await fetch('/api/onbording/doctor', { 
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then((res) => { 
      if(res.ok){ 
        // nextButtonClick()
      }
    })
  }


  return (
    <div>
        <div> 
            <h1>Enter Details About You</h1>
        </div>
        <main> 
        <form className="max-w-5xl mt-10 flex flex-col gap-4">
        <div>
          <Input
            onValueChange={(value) => setFormData({...formData, name: value})}
            value={formData.name}
            isRequired
            type="text"
            label="Full Name"
            placeholder="John Dior"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">Dr.</span>
              </div>
            }
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              onValueChange={(value: string) =>
                setFormData({...formData,  doctorPhone: value })
              }
              value={formData.doctorPhone}
              isRequired
              type="tel"
              label="Phone Number"
              placeholder="+91 9988776655"
              labelPlacement="outside"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Input
              onValueChange={(value: string) =>
                setFormData({...formData,  doctorEmail: value })
              }
              value={formData.doctorEmail}
              isRequired
              type="email"
              label="Email"
              placeholder="you@example.com"
              labelPlacement="outside"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              value={formData.yearOfRegistration}
              onValueChange={(value: string) =>
                setFormData({ ...formData,yearOfRegistration: value })
              }
              isRequired
              size="sm"
              type="number"
              label="Year Of Registration"
              placeholder=" "
              labelPlacement="outside"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Input
              value={formData.registrationNumber}
              onValueChange={(value: string) =>
                setFormData({...formData, registrationNumber: value })
              }
              isRequired
              size="sm"
              type="number"
              label="Registartion Number"
              placeholder=" "
              labelPlacement="outside"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              value={formData.stateMedicalCouncil}
              onValueChange={(value: string) =>
                setFormData({...formData, stateMedicalCouncil: value })
              }
              isRequired
              size="sm"
              type="text"
              label="State Medical Council"
              placeholder=" "
              labelPlacement="outside"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Input
              value={formData.registeredMedicalPractitiner}
              onValueChange={(value: string) =>
                setFormData({...formData, registeredMedicalPractitiner: value })
              }
              isRequired
              size="sm"
              type="text"
              label="Registered Medical Practitioner"
              placeholder=" "
              labelPlacement="outside"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Input
              value={formData.higestQualification}
              onValueChange={(value: string) =>
                setFormData({...formData, higestQualification: value })
              }
              isRequired
              size="sm"
              type="text"
              label="Higest Qualification"
              placeholder=" "
              labelPlacement="outside"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <Input
              value={formData.collage}
              onValueChange={(value: string) => setFormData({...formData, collage: value })}
              isRequired
              size="sm"
              type="text"
              label="Collage"
              placeholder=" "
              labelPlacement="outside"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <Textarea
              value={formData.address}
              onValueChange={(value: string) => setFormData({...formData, address: value })}
              isRequired
              label="Address"
              labelPlacement="outside"
              placeholder="Enter Your Address"
              className="max-w-xs"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            {/* <SpecialitySelector value={formData.specialities} /> */}
          </div>
        </div>

        <div></div>

        <Button
          size="md"
          className="w-2/12"
          color="primary"
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      </form>
        </main>
    </div>
  )
}

export default DocRegisterForm