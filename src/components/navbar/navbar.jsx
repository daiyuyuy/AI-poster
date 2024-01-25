import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";

export default function SelfNavbar() {
    const menuItems = [
        "Home",
        "Playground",
        "Pricing",
        "Blogs",
        "Log Out",
    ];

    return (
        <Navbar disableAnimation isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Logo />
                    <Link color="foreground" href="#">
                        logo
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <Logo />
                    <Link color="foreground" href="#">
                        logo
                    </Link>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="Playground">
                        Playground
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="Pricing">
                        Pricing
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="Blogs">
                        Blogs
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="warning" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            // color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
                            color={"foreground"}
                            href={`${item}`}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
