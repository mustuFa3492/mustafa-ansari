import { useState,useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showCopyToast, setShowCopyToast] = useState(false);


  const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText("mustufa3492@gmail.com");
    setShowCopyToast(true);
  } catch (err) {
    console.error("Failed to copy email", err);
  }
};

useEffect(() => {
  if (showCopyToast) {
    const timer = setTimeout(() => {
      setShowCopyToast(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }
}, [showCopyToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_dw20tzh",    // 🔴 replace
        "template_b9o9xzs",   // 🔴 replace
        {
          from_name: name,    // matches {{from_name}}
          email: email,       // matches {{email}}
          message: message,   // matches {{message}}
        },
        "YPE5E0XvuCjnJAmNR"     // 🔴 replace
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  },[status])

  return (
    <section className="min-h-screen flex items-center justify-center px-[clamp(1rem,4vw,4rem)] py-[clamp(4rem,10vw,8rem)] bg-linear-to-b from-[#212225] to-[#0b0d10]">
      <div className="max-w-3xl w-full space-y-[clamp(2rem,6vw,3rem)]">

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-white font-semibold text-[clamp(1.8rem,4.5vw,2.6rem)]">
            How about we work together?
          </h2>
          <p className="text-slate-400 text-[clamp(0.9rem,2.5vw,1.05rem)]">
            Have a project or want to talk? Send me a message.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[clamp(1rem,3vw,1.5rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(0.8rem,3vw,1.2rem)]">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full rounded-xs bg-white/5 border border-white/10
                px-4 py-3 text-slate-200 placeholder-slate-500
                focus:outline-none focus:border-white/30 focus:bg-white/10
                transition
              "
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full rounded-xs bg-white/5 border border-white/10
                px-4 py-3 text-slate-200 placeholder-slate-500
                focus:outline-none focus:border-white/30 focus:bg-white/10
                transition
              "
            />
          </div>

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="
              w-full rounded-xs bg-white/5 border border-white/10
              px-4 py-3 text-slate-200 placeholder-slate-500
              focus:outline-none focus:border-white/30 focus:bg-white/10
              transition resize-none
            "
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="
                cursor-pointer
                uppercase
                font-semibold
                bg-white text-black
                border-2 border-cyan-900 dark:border-white
                transition duration-200
                text-[clamp(0.75rem,2.5vw,0.9rem)]
                px-[clamp(1.2rem,4vw,1.75rem)]
                py-[clamp(0.45rem,2vw,0.6rem)]
                shadow-[1px_1px_rgba(51,65,85,0.6),2px_2px_rgba(51,65,85,0.6),3px_3px_rgba(51,65,85,0.6),4px_4px_rgba(51,65,85,0.6),5px_5px_0px_0px_rgba(51,65,85,0.6)]
                dark:shadow-[1px_1px_rgba(148,163,184,0.6),2px_2px_rgba(148,163,184,0.6),3px_3px_rgba(148,163,184,0.6),4px_4px_rgba(148,163,184,0.6),5px_5px_0px_0px_rgba(148,163,184,0.6)]
                hover:translate-x-0.5 hover:translate-y-0.5
                hover:shadow-[1px_1px_rgba(51,65,85,0.6),2px_2px_rgba(51,65,85,0.6),3px_3px_rgba(51,65,85,0.6)]
                active:translate-x-1 active:translate-y-1
                disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {status === "sending" ? "Sending..." : "Send it"}
            </button>
          </div>

          {(status === "success" || status === "error") && (
  <div
    className={`
      mx-auto max-w-md
      mt-4
      rounded-lg
      border
      px-4 py-3
      text-center
      transition-all
      ${
        status === "success"
          ? "border-green-500/30 bg-green-500/10 text-green-400"
          : "border-red-500/30 bg-red-500/10 text-red-400"
      }
    `}
  >
    {status === "success"
      ? "✅ Message sent successfully! I’ll get back to you soon."
      : "❌ Something went wrong. Please try again."}
  </div>
)}

        </form>

        {/* Socials */}
        <div className="pt-6 border-t border-white/10">
          <div className="flex justify-center gap-6 text-slate-400">
  <SocialIcon href="https://github.com/mustuFa3492" label="GitHub">
    <FaGithub />
  </SocialIcon>

  <SocialIcon href="https://www.linkedin.com/in/mustufa-ansari-4982171a4/" label="LinkedIn">
    <FaLinkedin />
  </SocialIcon>

  <button
  type="button"
  onClick={handleCopyEmail}
  aria-label="Copy email"
  className="cursor-pointer
    text-[clamp(1.2rem,4vw,1.6rem)]
    text-slate-400
    hover:text-white
    transition
    transform hover:-translate-y-1
  "
>
  <FaEnvelope />
</button>
{showCopyToast && (
  <div
    className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      rounded-lg
      bg-black/80
      border border-white/10
      px-4 py-2
      text-sm
      text-white
      backdrop-blur-sm
      shadow-lg
      transition-opacity
    "
  >
    📋 Email copied to clipboard
  </div>
)}

</div>

        </div>

      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        text-[clamp(1.2rem,4vw,1.6rem)]
        hover:text-white
        transition
        transform hover:-translate-y-1
      "
    >
      {children}
    </a>
  );
}
