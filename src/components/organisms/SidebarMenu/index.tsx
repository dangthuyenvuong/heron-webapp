import { classNames } from "utils"
import { Drawer, DrawerProps } from '@mui/material'
import "./style.scss"
import { Box, IconAboutUs, IconAppointment, IconBookAppointment, IconContact, IconFavorited, IconMenu, IconMyPayment, IconOrder, IconPackage, IconPrivacy, IconTelemedicine, IconTermOfService, IconUser, Logo, Menu, MenuItem, Typography } from "components/atoms"

type SidebarMenuProp = DrawerProps



export const SidebarMenu: React.FC<SidebarMenuProp> = ({ className, ...ref }) => {


    return (
        <Drawer
            {...ref}
            className={classNames('SidebarMenu', className)}
            anchor="left"
        >
            <Box>
                <div className="flex top">
                    <IconMenu /> <Logo />
                </div>
                <Typography className="text-14 bold m-t-20 m-b-40">MENU</Typography>
                <Menu>
                    <MenuItem to=""><IconUser />  My Account</MenuItem>
                    <MenuItem to=""><IconPackage /> Package</MenuItem>
                    <MenuItem to=""><IconTelemedicine /> Telemedicine</MenuItem>
                    <MenuItem to=""><IconBookAppointment /> Book Appointment</MenuItem>
                    <MenuItem to=""><IconOrder /> My Orders</MenuItem>
                    <MenuItem to=""><IconAppointment /> My Appointment</MenuItem>
                    <MenuItem to=""><IconFavorited /> My Favorited Package</MenuItem>
                    <MenuItem to=""><IconMyPayment /> My Payment</MenuItem>
                </Menu>
                <div className="divider m-t-60 m-b-60"></div>
                <Typography className="text-14 bold m-b-40">OUR COMPANY</Typography>
                <Menu className="Menu-company">
                    <MenuItem to=""><IconContact />  Contact Us</MenuItem>
                    <MenuItem to=""><IconPrivacy /> Privacy Policy</MenuItem>
                    <MenuItem to=""><IconTermOfService /> Terms of Services</MenuItem>
                    <MenuItem to=""><IconAboutUs /> About Us</MenuItem>
                </Menu>
            </Box>
        </Drawer>
    )
}