import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import { useState } from "react"


const Topbar = () => {
    const [open, setOpen] = useState(false)

    const menuItems = [
       {name: "About Me", url: '#about-me'},
       {name: "Technologies", url: '#technologies'},
       {name: "Projects", url: '#projects'},
       {name: "Contact", url: '#contact'},
    ]

  return (
    <Navbar onMenuOpenChange={setOpen}>
        <NavbarContent>
            <NavbarMenuToggle 
                aria-label={open ? "Close menu" : "Open Menu"}
                className="sm:hidden"
            />
            
            <NavbarBrand>
                <p className="font-bold text-inherit">A Letter Page</p>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
                <Link aria-current="page" href="#about-me">
                    About Me
                </Link>
            </NavbarItem>

            <NavbarItem>
                <Link color="foreground" href="#technologies">
                    Technologies
                </Link>
            </NavbarItem>

            <NavbarItem>
                <Link color="foreground" href="#projects">
                    Projects
                </Link>
            </NavbarItem>

            <NavbarItem>
                <Link color="foreground" href="#contact">
                    Contact
                </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar 
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Darlan oliveira"
                        size="sm"
                        src="https://github.com/darlanzero.png"
                    />
                </DropdownTrigger>

                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem>
                        <p className="font-semibold">DarlanZeroDev Profile</p>
                    </DropdownItem>

                    <DropdownItem key="Github">
                        <Link href="https://github.com/darlanzero" target="_blank" color="success">
                            Github
                        </Link>
                    </DropdownItem>

                    <DropdownItem key="Linkedin">
                        <Link href="https://www.linkedin.com/in/darlanoliveiradev/" target="_blank" color="success">
                            Linkedin
                        </Link>
                    </DropdownItem>

                    <DropdownItem key="Twitter">
                        <Link href="https://twitter.com/DarlanZeroDev" target="_blank" color="success">
                            Twitter
                        </Link>
                    </DropdownItem>

                    <DropdownItem key="Instagram">
                        <Link href="https://www.instagram.com/darlanj.oliveira/" target="_blank" color="success">
                            Instagram
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${index}-${index}`}>
                    <Link
                        color={
                            index === 0 ? "primary" : index === menuItems.length - 1 ? "secondary" : "foreground"
                        }

                        className="w-full"
                        href={item.url}
                        size="lg"
                    >
                        {item.name}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar>
  )
}

export default Topbar