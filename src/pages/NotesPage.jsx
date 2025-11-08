import { useEffect, useState } from 'react';
import Layout from '../layouts/LayoutPage';
import { UserServices } from '@services';
import Button from '../components/Button';
import { Plus, PencilLine, Trash, NotebookText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoadingScreen from '../components/Loading';

// MUI Modal imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 500, md: 750 },
    p: { xs: 3, sm: 4, md: 6 },
    bgcolor: '#FFFF',
    borderRadius: '16px',
    border: '2px solid #D9D9D9',
};

const NotesPage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [newNote, setNewNote] = useState({ titulo: '', conteudo: '' });
    const navigate = useNavigate();

    const fetchNotes = async () => {
        try {
            const notes = await UserServices.noteService.getNotes();
            setNotes(notes || []);
        } catch (error) {
            console.error('Erro ao buscar notas:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (note = null) => {
        if (note) {
            setEditingNote(note);
            setNewNote({ titulo: note.titulo, conteudo: note.conteudo });
        } else {
            setEditingNote(null);
            setNewNote({ titulo: '', conteudo: '' });
        }
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setEditingNote(null);
        setNewNote({ titulo: '', conteudo: '' });
    };

    const handleCreateNote = async (e) => {
        e.preventDefault();
        try {
            await UserServices.noteService.createNote(newNote);
            toast.success('Nota criada com sucesso!');
            handleCloseModal();
            fetchNotes();
        } catch (error) {
            console.error(error);
            toast.error('Erro ao criar nota');
        }
    };

    const handleEditNote = async (e) => {
        e.preventDefault();
        try {
            await UserServices.noteService.editNote(editingNote.notaId, newNote);
            toast.success('Nota editada com sucesso!');
            handleCloseModal();
            fetchNotes();
        } catch (error) {
            console.error('Erro ao editar nota:', error);
            toast.error('Erro ao editar nota.');
        }
    };

    const deleteNote = async (id) => {
        try {
            await UserServices.noteService.deleteNote(id);
            setNotes((prev) => prev.filter((note) => note.notaId !== id));
            toast.success('Nota excluída com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir nota:', error);
            toast.error('Erro ao excluir nota.');
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="flex min-h-screen w-full flex-col py-20">
                    <h1 className="mb-4 text-4xl font-extrabold text-zinc-600">Suas notas</h1>
                    <p className="text-md mb-10 font-light text-zinc-400">
                        Anote seus pensamentos antes que eles escapem!
                    </p>
                    <div className="flex flex-1 items-center justify-center">
                        <LoadingScreen text="Buscando notas..." />
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex w-full flex-col py-20">
                <div className="mb-6 flex flex-col items-start justify-between space-y-10 md:flex-row">
                    <div>
                        <h1 className="mb-4 text-3xl font-extrabold text-zinc-600 sm:mb-0">Suas notas</h1>
                        <p className="text-md font-light text-zinc-400">
                            Acompanhe suas notas, veja o progresso e mantenha-se organizado
                        </p>
                    </div>
                    <Button
                        label="Criar uma nova nota"
                        variant="primary"
                        icon={<Plus />}
                        onClick={() => handleOpenModal()}
                        className={notes.length === 0 ? 'hidden' : ''}
                    />
                </div>

                {!notes || notes.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center text-gray-500">
                        <p className="text-lg font-medium">Nenhuma nota criada ainda</p>
                        <p className="mb-6 text-sm">Adicione sua primeira anotação e comece a organizar suas ideias!</p>
                        <Button
                            label="Criar sua primeira nota"
                            variant="primary"
                            icon={<Plus />}
                            onClick={() => handleOpenModal()}
                        />
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {notes.map((note) => (
                            <div
                                key={note?.notaId}
                                className="rounded-md border p-4 transition hover:border-blue-600 hover:shadow-md"
                            >
                                <h2 className="font-semibold text-zinc-700">{note.titulo}</h2>
                                <p className="mt-2 text-sm text-zinc-500">{note.conteudo}</p>

                                <div className="flex items-center justify-between gap-2 border-t pt-2">
                                    <Button
                                        variant="secondary"
                                        icon={<PencilLine size={14} />}
                                        title="Editar"
                                        label="Editar"
                                        onClick={() => handleOpenModal(note)}
                                        className="flex w-full items-center justify-center bg-blue-50 font-semibold text-blue-600 hover:bg-blue-100"
                                    />
                                    <Button
                                        variant="secondary"
                                        icon={<Trash size={14} />}
                                        title="Excluir"
                                        label="Excluir"
                                        onClick={() => deleteNote(note.notaId)}
                                        className="flex w-full items-center justify-center bg-red-50 font-semibold text-red-600 hover:bg-red-100"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        sx: { backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(1px)' },
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <Typography
                            className="flex items-center justify-start text-zinc-600"
                            variant="h6"
                            sx={{ mb: 1, fontWeight: 'bold' }}
                        >
                            <div className="mr-2 rounded-md bg-blue-100 p-2">
                                <NotebookText size={22} className="text-blue-600" />
                            </div>
                            <p>{editingNote ? 'Editar nota' : 'Criar nova nota'}</p>
                        </Typography>

                        <form
                            onSubmit={editingNote ? handleEditNote : handleCreateNote}
                            className="flex flex-col gap-3"
                        >
                            <input
                                type="text"
                                placeholder="Título da nota"
                                value={newNote.titulo}
                                onChange={(e) => setNewNote({ ...newNote, titulo: e.target.value })}
                                className="rounded-md border p-2"
                                required
                            />
                            <textarea
                                placeholder="Descrição da nota"
                                value={newNote.conteudo}
                                onChange={(e) => setNewNote({ ...newNote, conteudo: e.target.value })}
                                className="rounded-md border p-2"
                                required
                            />
                            <div className="mt-4 flex justify-end gap-2">
                                <Button
                                    label="Cancelar"
                                    onClick={handleCloseModal}
                                    variant="outline"
                                    className="text-red-600"
                                />
                                <Button label={editingNote ? 'Salvar alterações' : 'Criar nota'} type="submit" />
                            </div>
                        </form>
                    </Box>
                </Fade>
            </Modal>

            <ToastContainer position="top-right" autoClose={3000} />
        </Layout>
    );
};

export default NotesPage;
