"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent,NavbarMenuToggle, NavbarMenuItem, NavbarMenu,  NavbarItem, Button,  Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineDown} from 'react-icons/ai'
import {FaUserDoctor} from 'react-icons/fa6'
import {MdLocalPharmacy} from 'react-icons/md'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {AiFillTool} from 'react-icons/ai'
import {FaClinicMedical} from 'react-icons/fa'
import { signIn, signOut , useSession } from 'next-auth/react';


const SearchIcon = ({
    size = 24,
    strokeWidth = 1.5,
    width,
    height ,
    ...props
  }: any)  => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
  
  
  


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { data: session, status }: any = useSession()


    const menuItems = [
      "Services",
      "Blogs",
      "Contact",
    ];
  
  return (
    <Navbar maxWidth='xl' position='static' shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
            <Link href='/'>
                <Image className='p-4' src='/images/logo.png' alt='logo' width={70} height={50} quality={50}/>
            </Link>
          <p className="font-bold text-inherit text-green-900 text-medium">eCLINICs</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* comment start */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<AiOutlineDown className="mt-1"/>}
                radius="sm"
                variant="light"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="see a doctor online, 24/7"
              startContent={<FaUserDoctor className="w-6 h-6"/>}
            >
              EClinics
            </DropdownItem>
            <DropdownItem
              key="e-pharmacy"
              description="Order your medicine online, with free delivery"
              startContent={<MdLocalPharmacy className="w-6 h-6"/>}
            >
              ePharmacy
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="Get your lab reports quickly and easily, online"
              startContent={<AiTwotoneExperiment className="w-6 h-6"/>}
            >
              Digital Lab Reports
            </DropdownItem>
            {/* <DropdownItem
              key="99_uptime"
              description="we offer a variety of custom services to meet your specific needs."
              startContent={<AiFillTool className="w-6 h-6"/>}
            >
              Custom Services
            </DropdownItem> */}
            <DropdownItem
              key="supreme_support"
              description="Create a custom eclinic that meets the unique needs of your practice"
              startContent={<FaClinicMedical className="w-6 h-6"/>}
            >
              Custom eClinic Setup 
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* end */}
        <NavbarItem isActive>
          <Link color="foreground" href="/blogs" aria-current="page">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color='foreground' href="/about" >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent as="div" className="items-center" justify="end">
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            {session?.user ?
              <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={session.user.image}
            /> : 
              <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              name=""
              size="sm"
              src=""
              onClick={() => signIn()}
            />
            }
          </DropdownTrigger>
          {session?.user && 
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{session.user.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem >
              <Link href='/register'>Register Your Clinic</Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
          }
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header