
import modalComponents from "../../components"

export default function openModal(state: any, updateModal: any, name: any, props: any) {

    const { modals } = state;

    let _modals = [...modals];

    const hasModals = modalComponents.hasOwnProperty(name) ? true : false;

    if (hasModals) {
        const modalTarget = _modals.find((item: any) => item.name === name && item.open === false, [])

        if (modalTarget) {

            const updatedModals = _modals.map((item: any) => {
                if (item.id === modalTarget.id) {
                    item.open = true;
                    item = {...item, ...props};
                }
                return item
            }, []);

            updateModal({ modals: updatedModals })

        } else {
            _modals.push({ id: _modals.length, open: true, ...props, name })
            updateModal({ modals: _modals })
        }

    }

}

