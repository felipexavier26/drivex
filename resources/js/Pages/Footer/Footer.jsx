import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <>
            <div className="footer bg-gray-800 text-white pt-10 pb-10 mt-auto">
                <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">

                    <div className="footer-section mb-10">
                        <h3 className="font-semibold text-xl mb-6">Contato</h3>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} className="mr-4" />
                            <p>(11) 3257-5189</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} className="mr-4" />
                            <p>(11) 99893-3012</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                            <p>multimarcas@gmail.com</p>
                        </div>
                    </div>

                    <div className="footer-section mb-10">
                        <h3 className="font-semibold text-xl mb-6">Horário de Funcionamento</h3>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faClock} className="mr-4" />
                            <p>Segunda à sexta: 09:00 às 19:00</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faClock} className="mr-4" />
                            <p>Sábado: 09:00 às 19:00</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faClock} className="mr-4" />
                            <p>Domingo: 09:00 às 14:00</p>
                        </div>
                    </div>

                    <div className="footer-section mb-10">
                        <h3 className="font-semibold text-xl mb-6">Endereço</h3>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
                            <p>DSM Multimarcas</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
                            <p>Praça da Sé, 1 - Centro</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
                            <p>São Paulo/SP</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
                            <p>CEP 01001-000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-red-800 text-center flex justify-center items-center'>
                <p className='h-9 px-4 mt-5 text-gray-300 font-semibold'>
                    © 2025 Multimarcas
                </p>
            </div>
            <div className='bg-black text-center flex justify-center items-center'>
                <p className='h-9 px-4 mt-5 text-gray-300 font-semibold'>
                    Desenvolvido por
                </p>
            </div>
        </>
    );
}
