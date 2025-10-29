import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import InputField from './InputField';
f;
// formulário com os campos para adicionar/atualizar metas
const GoalForm = ({ goal, title, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    deadline: '',
    status: 'PENDENTE',
  });

  // estado para validar o formulário
  const [isFormValid, setIsFormValid] = useState(false);

  // valida o formulário sempre que os dados forem alterados
  useEffect(() => {
    const { title, deadline, status } = formData;
    setIsFormValid(
      // verifica se todos os campos estão preenchidos
      title.trim() !== '' && deadline.trim() !== '' && status.trim() !== ''
    );
  }, [formData]);

  // submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    onSave(formData); // salva a meta
  };

  // atualiza os campos do formulário
  const handleUpdate = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // preenche o formulário se estiver editando uma meta
  useEffect(() => {
    if (goal) {
      // se tiver uma meta para editar
      setFormData(goal); // preenche o formulário com os dados da meta
    } else {
      // se for uma nova meta
      setFormData({
        // reseta o formulário
        title: '',
        deadline: '',
        status: 'PENDENTE',
      });
    }
  }, [goal]); // roda sempre que a prop goal mudar

  return (
    <>
      <h2 className="mb-2 text-xl font-bold text-[#3F3D56]">{title}</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          placeholder={'Título da meta'}
          type="text"
          label={'Título'}
          value={formData.title}
          onChange={(e) => handleUpdate('title', e.target.value)}
        />
        <InputField
          placeholder={'DD/MM/AAAA'}
          label={'Prazo'}
          type="date"
          value={formData.deadline}
          onChange={(e) => handleUpdate('deadline', e.target.value)}
        />
        <div className="mt-3">
          <label htmlFor="status-select">Status:</label>
          <select
            name="status-select"
            id="status-select"
            value={formData.status}
            onChange={(e) => handleUpdate('status', e.target.value)}
          >
            <option value="PENDENTE">Pendente</option>
            <option value="EM_ANDAMENTO">Em andamento</option>
            <option value="CONCLUIDA">Concluída</option>
          </select>
        </div>

        <div className="mt-6 flex justify-between">
          <Button
            label={'Salvar'}
            variant="secondary"
            type="submit"
            disabled={!isFormValid}
            className={isFormValid ? '' : '!cursor-not-allowed opacity-50'}
          />

          <Button
            label={'Cancelar'}
            onClick={onCancel}
            type="button"
            variant="danger"
          />
        </div>
      </form>
    </>
  );
};

export default GoalForm;
