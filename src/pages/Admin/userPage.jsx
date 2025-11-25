import LayoutPage from '../../layouts/LayoutPage';
import { Code } from 'lucide-react';

const UserPage = () => {
    return (
        <LayoutPage>
            <div className="flex h-[80vh] items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <Code className="text-zinc-700" />
                    <p className="text-center text-sm text-zinc-400">Página em desenvolvimento...</p>
                </div>
            </div>
        </LayoutPage>
    );
};

export default UserPage;
