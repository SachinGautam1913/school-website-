"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "91**********10" // Replace with the school's WhatsApp number
  const message =
    "Hello! I would like to enquire about admissions at Kirnajay Vidya Mandir."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        h-14 w-14
        flex items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all duration-300 ease-out
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(37,211,102,0.8)]
        active:scale-95
      "
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
