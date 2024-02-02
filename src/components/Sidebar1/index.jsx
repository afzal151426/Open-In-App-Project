import React from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Img, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (<Img className="h-4 mt-2"  src="images/img_television.svg" alt="television"/> ),label: "Invoice"
    },
    {
      icon: (<Img className="h-[26px]" src="images/img_megaphone.svg" alt="megaphone"/>),label: "Schedule"
    },
    {
      icon: (<Img className="h-[26px]" src="images/img_calendar.svg" alt="calendar"/>),label: "Calendar"
    },
    {
     icon: (<Img className="h-[26px]" src="images/img_iconlyboldnotification.svg" alt="iconlyboldnotif"/>),label: "Notification"
    },
    {
     icon: (<Img className="h-[26px]" src="images/img_search.svg" alt="search" />),label: "Settings"
    },
    {
     icon: (<Img className="h-[26px]" src="images/img_search.svg" alt="search" />),label: "Portfolio"
    },
    ];

  return (
    <>
      <Sidebar /* onClick={() => collapseSidebar(!collapsed)} className={props.className}*/>
        <div className="flex flex-row gap-[15px] items-center justify-center ml-14 md:ml-[0] mr-[51px] mt-[50px] w-[51%]">
          <div className="bg-cover bg-no-repeat flex flex-col h-[42px] items-center justify-start w-[42px]" style={{ backgroundImage: "url('images/img_group5.svg')" }}>
            <Img  className="h-[42px] w-[42px]" src="images/img_group5.svg" alt="subtract"/>
          </div>
          <Text className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl" size="txtNunitoSemiBold24" > Base </Text>
        </div>
        <Menu menuItemStyles={{button: {padding: 0,gap: "14px",color: "#03022987",fontWeight: 600,fontSize: "16px",fontFamily: "Nunito",paddingLeft: "31px",paddingRight: "31px",[`&:hover, &.ps-active`]: { color: "#605bff" },},}} className="flex flex-col items-center justify-start mb-[479px] mt-[50px] w-full" >
        <MenuItem>
              <div className="flex flex-col h-full inset-[0] items-start justify-center md:w-full">
                <div className="flex flex-col gap-6 justify-start w-[69%] md:w-full">
                  <MenuItem icon={<Img className="h-6 w-6"  src="images/img_grid.svg" alt="grid"/> }>
                    <Text className="text-gray-500 ">Dashboard</Text>
                  </MenuItem>
                  
                 
                </div>
              </div>
              
        </MenuItem>
            <div className="flex h-24 justify-end relative w-full">

            <div className="flex sm:flex-col ml-8 flex-row sm:gap-5 h-full items-center justify-start w-full">
              <Img className="h-[22px]" src="images/img_user_indigo_a200.svg" alt="user"/>
              <Text className="text-gray-500 ml-3 ">Upload</Text>
            </div>
          </div>
        
          <div className="flex flex-col gap-10 items-center justify-start mt-[38px] w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
