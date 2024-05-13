"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop({ children }) {
  const { back } = useRouter();

  return (
    <div onClick={back} className="modal-backdrop">
      {children}
    </div>
  );
}
