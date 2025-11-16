import React from 'react';
import Email from '../components/Email';

const Contact = () => {
    return (
        <section id="contact" className="w-full bg-blue-600 py-15 text-white">
            <div className="mx-auto max-w-7xl flex-col items-center justify-start gap-8 px-5 md:flex-row">
                <div className="md:1/2 flex w-full flex-col items-center justify-center space-y-5 text-center">
                    <h2 className="font-montserrat text-4xl leading-10 font-bold">
                        Faça parte da nossa <br /> comunidade de mentorados
                    </h2>
                    <div className="w-full sm:w-2/3">
                        <p className="text-md w-full leading-5 font-normal">
                            Receba insights exclusivos, dicas práticas e conteúdos que vão acelerar a sua evolução
                            profissional. Inscreva-se e não perca nenhuma novidade da nossa mentoria.
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex w-full items-center justify-center">
                    <Email label="E-mail" button_label="Inscrever-se" placeholder={'Digite seu e-mail...'} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
