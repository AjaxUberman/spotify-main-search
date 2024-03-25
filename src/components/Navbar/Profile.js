import React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { HiMiniBellAlert } from "react-icons/hi2";
import { Menu } from "@headlessui/react";
import { NavLink, Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div className="flex items-center gap-3 ">
        <div className="flex items-center bg-zart rounded-full px-2 py-1 gap-1 text-white hover:scale-105 transition ease-in">
          <MdDownloadForOffline />
          <button>Uygulamayı Yükle</button>
        </div>
        <HiMiniBellAlert className="bg-zart rounded-full p-1 text-3xl hover:scale-105 transition ease-in hover:text-white cursor-pointer" />
        <Menu as="div" className="relative">
          <Menu.Button>
            <button className="bg-zart rounded-full p-1 hover:scale-105">
              <img
                className="w-6 h-6 p-0 rounded-full "
                src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
              />
            </button>
          </Menu.Button>
          <Menu.Items className="absolute top-full  origin-top-right right-0 w-48 bg-active rounded-md transition ease-in trans flex flex-col  translate-y-2 text-white ">
            <Link to="/Account">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-graytext "
                    }group flex w-full items-center rounded-md px-2 py-2  `}
                  >
                    Hesap
                  </a>
                )}
              </Menu.Item>
            </Link>
            <Link to="/Profile">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-graytext  "
                    }group flex w-full items-center rounded-md px-2 py-2 `}
                    href="/account-settings"
                  >
                    Profil
                  </a>
                )}
              </Menu.Item>
            </Link>
            <Link to="/Settings">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-graytext  "
                    }group flex w-full items-center rounded-md px-2 py-2 `}
                    href="/account-settings"
                  >
                    Ayarlar
                  </a>
                )}
              </Menu.Item>
            </Link>
            <hr className="relative  " />
            <Link to="/Signoff">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-graytext  "
                    }group flex w-full items-center rounded-md px-2 py-2 `}
                    href="/account-settings"
                  >
                    Oturumu Kapat
                  </a>
                )}
              </Menu.Item>
            </Link>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Profile;
