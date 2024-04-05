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
            <button>Hakkında</button>
            <button>Kariyer</button>
            <button>For the Record</button>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold">Topluluklar</h1>
            <button>Sanatçılar İçin</button>
            <button>Geliştiriciler</button>
            <button>Reklam</button>
            <button>Yatırımcılar</button>
            <button>Satırıclar</button>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-bold">Yararlı bağlantılar</h1>
            <button>Destek</button>
            <button>Ücretsiz Mobil Uygulama</button>
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
            <button>Yasal</button>
            <button>Güvenlik ve Gizlilik Merkezi</button>
            <button>Gizlilik Politikası</button>
            <button>Tanımlama Bilgisi Ayarları</button>
            <button>Reklamlar Hakkında</button>
            <button>Erişilebilirlik</button>
          </div>
          <div>
            <a>© 2024 Spotify AB</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFooter;
