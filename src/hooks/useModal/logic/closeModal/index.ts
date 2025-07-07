

export default function closeModal(state: any, updateModal: any, id: any) {
    const { modals } = state;
    
    const updatedModals = [...modals].map((model: any) => {
        if (model.id === id) {
            model.open = false;
        }
        return model
    }, [])

    updateModal({ modals: updatedModals })
}