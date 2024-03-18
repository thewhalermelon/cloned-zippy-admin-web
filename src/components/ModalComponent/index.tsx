import { FC } from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { handleNavigate } from '../../utils';

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent: FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleModal = (isConfirm: boolean) => {
    if (isConfirm) {
      handleNavigate(navigate, '/notice-event');
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      title='Are you sure to delete this record?'
      open={isModalOpen}
      onOk={() => handleModal(true)}
      onCancel={() => handleModal(false)}
    ></Modal>
  );
};

export default ModalComponent;
