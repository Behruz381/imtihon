import React from "react";
import Logo from "../../../images/QPICK.svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="mt-[19px]">
                <div className="container">
                    <div className="footer bg-white rounded-t-[30px] min-h-[157px] shadow-lg">
                        <div className="footer__items p-[29px] flex justify-between">
                            <div className="footer__items--logo">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="flex gap-[174px]">
                                <ul className="footer__items--item">
                                    <li>
                                        <Link to="/fovourites">Избранное</Link>
                                    </li>
                                    <li>
                                        <Link>Корзина</Link>
                                    </li>
                                    <li>
                                        <Link>Контакты</Link>
                                    </li>
                                    <li>
                                        <Link>Условия сервиса</Link>
                                    </li>
                                </ul>
                                <div className="lang flex items-center gap-[17px]">
                                    <i className="bx bx-globe"></i>
                                    <p className="text-[15px] font-medium hover:text-[#FFA542] cursor-pointer">
                                        Каз
                                    </p>
                                    <p className="text-[15px] font-medium hover:text-[#FFA542] cursor-pointer">
                                        Рус
                                    </p>
                                    <p className="text-[15px] font-medium hover:text-[#FFA542] cursor-pointer">
                                        Eng
                                    </p>
                                </div>
                            </div>
                            <div className="footer__socials flex gap-[17px]">
                                <i className="bx bxl-vk text-3xl"></i>
                                <i className="bx bxl-instagram text-3xl"></i>
                                <i className="bx bxl-telegram text-3xl"></i>
                                <i className="bx bxl-whatsapp text-3xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
