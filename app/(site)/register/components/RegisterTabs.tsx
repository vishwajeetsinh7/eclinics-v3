"use client"
import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import {AiOutlineUserAdd} from 'react-icons/ai'
import {BiClinic} from 'react-icons/bi'
import DocRegisterForm from './DocRegisterForm';


const RegisterTabs = () => {
  return (
    <div className="flex w-full flex-col mt-10">
      <Tabs size='lg' variant='light' color='success' aria-label="Options">
        <Tab key="step-1" 
             title={
                <div className="flex items-center space-x-2">
                  <AiOutlineUserAdd/>
                  <span>Step 1</span>
                </div>
              }>
          <Card>
            <CardBody>
                <DocRegisterForm/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="step-2"     
         title={
                <div className="flex items-center space-x-2">
                  <BiClinic/>
                  <span>Step 2</span>
                </div>
              }>
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="step-3" title="Step 3">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
  )
}

export default RegisterTabs