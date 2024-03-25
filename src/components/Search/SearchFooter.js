import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import "./Search.css";

const SearchFooter = () => {
  return (
    <div className="pb-14">
      {/* Sol Taraf */}
      <div className="flex justify-between pt-36 pl-2 ">
        <div className="flex gap-14">
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold">Şirket</h1>
            <a href="#">Hakkında</a>
            <a href="#">Kariyer</a>
            <a href="#">For the Record</a>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold">Topluluklar</h1>
            <a href="#">Sanatçılar İçin</a>
            <a href="#">Geliştiriciler</a>
            <a href="#">Reklam</a>
            <a href="#">Yatırımcılar</a>
            <a href="#">Satırıclar</a>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold">Yararlı bağlantılar</h1>
            <a href="#">Destek</a>
            <a href="#">Ücretsiz Mobil Uygulama</a>
          </div>
        </div>
        {/* ICONS */}
        <div className="flex gap-4 ">
          <FaInstagram className="bg-gray-800 hover:bg-graytext cursor-pointer h-10 w-10 p-3 rounded-full" />
          <FaXTwitter className="bg-gray-700 hover:bg-graytext cursor-pointer h-10 w-10 p-3 rounded-full" />
          <FaFacebookSquare className="bg-gray-800 hover:bg-graytext cursor-pointer h-10 w-10 p-3 rounded-full" />
        </div>
        {/* ICONS  */}
      </div>
      {/* SOL TARAF */}

      {/* FOOTER ALT */}
      <div>
        <div className="h-0.5 w-full bg-graytext my-10"></div>
        <div className="flex justify-between text-sm license-wrapper">
          <div className="flex justify-around gap-4 ">
            <a href="#">Yasal</a>
            <a href="#">Güvenlik ve Gizlilik Merkezi</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Tanımlama Bilgisi Ayarları</a>
            <a href="#">Reklamlar Hakkında</a>
            <a href="#">Erişilebilirlik</a>
          </div>
          <div>
            <a href="#">© 2024 Spotify AB</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFooter;
