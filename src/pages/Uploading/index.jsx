import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const UploadingPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-4 mt-2"
          src="images/img_television.svg"
          alt="television"
        />
      ),
      label: "Invoice",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
      ),
      label: "Schedule",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Calendar",
    },
    {
      icon: (
        <Img
          className="h-[26px]"
          src="images/img_iconlyboldnotification.svg"
          alt="iconlyboldnotif"
        />
      ),
      label: "Notification",
    },
    {
      icon: (
        <Img className="h-[26px]" src="images/img_search.svg" alt="search" />
      ),
      label: "Settings",
    },
  ];

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[218px] bg-white-A700_01 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
          <div className="flex flex-1 flex-col font-figtree md:gap-10 gap-[137px] items-center justify-start md:mt-0 mt-[49px] w-full">
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-center w-auto md:w-full">
                <div className="flex flex-col items-center justify-start max-w-[1052px] w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                      size="txtFigtreeSemiBold24"
                    >
                      Upload CSV
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row gap-[27px] items-center justify-between md:mt-0 mt-0.5 w-[7%] md:w-full">
                <Img
                  className="h-[23px]"
                  src="images/img_vector.svg"
                  alt="vector"
                />
                <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                  <Img
                    className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700_01 flex flex-col gap-[21px] items-center justify-start p-4 rounded-lg w-[52%] md:w-full">
              <div className="border border-dashed border-gray-200_01 flex flex-col items-center justify-start p-[71px] md:px-10 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-auto">
                    <Img
                      className="h-9 w-9"
                      src="images/img_television_green_900_36x36.svg"
                      alt="television_One"
                    />
                    <Text
                      className="text-base text-center text-gray-500_01 w-auto"
                      size="txtFigtreeRegular16"
                    >
                      upload-template.xlsx
                    </Text>
                    <Text
                      className="text-center text-red-700 text-sm w-auto"
                      size="txtFigtreeRegular14"
                    >
                      Remove
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-indigo-A200 flex flex-col h-14 md:h-auto items-center justify-center pl-2 pr-4 py-2 rounded-lg w-[564px] sm:w-full"
                onClick={() => navigate("/uploaded")}
              >
                <div className="border-2 border-solid h-[19px] rounded-[9px] w-[19px] white_A700_01_white_A700_01_border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadingPage;
