import React from 'react';
import Email from '../components/Email';

const Contact = () => {
    return (
        <section
            id="contact"
            className="my-12 flex min-h-80 w-full items-center justify-between bg-[#2C49FA] text-white"
        >
            <div className="flex flex-col justify-between px-8 py-8 lg:flex-row lg:px-78">
                <div className="flex flex-col lg:w-1/2">
                    <h2 className="text-4xl font-extrabold">
                        Faça parte da nossa <br /> comunidade de mentoria
                    </h2>
                    <p className="pt-2 font-light">
                        Receba insights exclusivos, dicas práticas e conteúdos
                        que vão acelerar a sua evolução profissional.
                        Inscreva-se e não perca nenhuma novidade da nossa
                        mentoria.
                    </p>
                </div>
                <Email
                    label="E-mail"
                    button_label="Inscrever-se"
                    placeholder={'Digite seu e-mail...'}
                />
            </div>
        </section>
    );
};

export default Contact;
