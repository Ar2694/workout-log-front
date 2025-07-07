import { useState } from 'react'
import { openModal as _openModal, closeModal as _closeModal } from "./logic";

export default function useModal() {
  const [state, setState] = useState({ modals: [] });

  const updateModal = (value: any) => setState({ ...state, ...value });
  const openModal = (name: any, props: any) => _openModal(state, updateModal, name, props);
  const onOpenModal = (name: any, props: any) => () => openModal(name, props);
  const closeModal = (id: any) => _closeModal(state, updateModal, id)
  const onCloseModal = (id: any) => () => closeModal(id);
  console.log(state.modals, "state.modals,")
  return {
    modals: state.modals,
    openModal,
    onOpenModal,
    onCloseModal,
    closeModal
  }

}

