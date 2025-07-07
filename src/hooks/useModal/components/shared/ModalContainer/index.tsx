
import dialogs from "../.."

export function ModalContainer({ modal }: any) {
  const { modals, ...controls } = modal
  const dialogslist: any = dialogs;
  
  const activeModals = modals.map((props: any, k: any) => {
    const Modal = dialogslist[props.name];
    return <Modal key={k} modal={{ ...controls, ...props }} />
  }, [])

  return (
    <>
      {activeModals}
    </>

  )
}
