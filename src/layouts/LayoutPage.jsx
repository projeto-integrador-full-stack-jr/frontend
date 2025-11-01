import React from 'react';
import Header from '../components/Header';
import ProfileMenu from '../components/ProfileMenu';

const LayoutPage = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-50">
            <ProfileMenu />
            <div className="flex flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-6xl">{children}</div>
                </main>
            </div>
        </div>
    );
};

export default LayoutPage;
