import { Dialog } from "@headlessui/react";

function Modal({ isOpen = false, onClose, children, title }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-10 overflow-y-auto"
      data-testid="modal"
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="relative w-[75%] h-[75vh] mx-auto bg-white rounded p-12 drop-shadow-lg">
          <Dialog.Title className="mb-3 text-lg">{title}</Dialog.Title>
          {children}
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
