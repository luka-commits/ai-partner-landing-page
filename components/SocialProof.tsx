
import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n/LanguageContext";

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
      <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
      <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.958 8.834a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834z" fill="#2EB67D"/>
      <path d="M17.688 8.834a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.166 18.958a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521z" fill="#ECB22E"/>
      <path d="M15.166 17.688a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z" fill="#ECB22E"/>
    </svg>
  );
}

function NotionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#000000">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.33 2.306c-.466-.373-.84-.186-1.306-.14L3.806 3.182c-.467.047-.56.28-.374.466l1.027 1.56zm.793 3.36v13.908c0 .746.373 1.027 1.213.98l14.523-.84c.84-.046.934-.56.934-1.166V6.63c0-.6-.234-.933-.746-.886l-15.177.873c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.934-.234-1.494-.934l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.214-.14c-.093-.514.28-.886.747-.933l3.222-.186z"/>
    </svg>
  );
}

function GoogleSheetsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M19.385 2H4.615A2.615 2.615 0 0 0 2 4.615v14.77A2.615 2.615 0 0 0 4.615 22h14.77A2.615 2.615 0 0 0 22 19.385V4.615A2.615 2.615 0 0 0 19.385 2z" fill="#0F9D58"/>
      <path d="M7 6h4v12H7zm6 0h4v12h-4z" fill="#F1F1F1"/>
    </svg>
  );
}

function HubSpotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF7A59">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066a2.2 2.2 0 0 0-2.2-2.2h-.065a2.2 2.2 0 0 0-2.2 2.2v.066c0 .867.506 1.613 1.236 1.973v2.857a5.91 5.91 0 0 0-2.56 1.242l-6.782-5.272a2.346 2.346 0 0 0 .07-.558 2.39 2.39 0 1 0-2.39 2.39c.39 0 .756-.098 1.08-.266l6.663 5.18a5.93 5.93 0 0 0-.486 2.36c0 .87.19 1.693.528 2.437l-2.065 2.065a1.752 1.752 0 0 0-.508-.08 1.768 1.768 0 1 0 1.768 1.768c0-.182-.034-.356-.08-.52l2.02-2.02a5.934 5.934 0 1 0 4.704-11.376z"/>
    </svg>
  );
}

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M0 7.636v11.73c0 .904.732 1.636 1.636 1.636h3.819V11.73L0 7.636z" fill="#4285F4"/>
      <path d="M24 7.636v11.73c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L24 7.636z" fill="#34A853"/>
      <path d="M5.455 11.73V4.64L3.927 3.493C2.309 2.28 0 3.434 0 5.457v2.18l5.455 4.093z" fill="#FBBC04"/>
      <path d="M18.545 11.73V4.64l1.528-1.147C21.69 2.28 24 3.434 24 5.457v2.18l-5.455 4.093z" fill="#FBBC04"/>
      <path d="M5.455 4.64l6.545 4.908 6.545-4.908v7.09L12 16.64l-6.545-4.91V4.64z" fill="#EA4335"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function MakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#6D00CC">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8l4-5.5V8h3l-4 5.5V16z"/>
    </svg>
  );
}

function N8nIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M4.5 16L9 8L14.5 16L19 8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4.5" cy="16" r="2.5" fill="#FFFFFF"/>
      <circle cx="9" cy="8" r="2.5" fill="#FFFFFF"/>
      <circle cx="14.5" cy="16" r="2.5" fill="#FFFFFF"/>
      <circle cx="19" cy="8" r="2.5" fill="#FFFFFF"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#181717">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0099FF">
      <path d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 0 0-.64.05l-2.39 1.05a.96.96 0 0 1-1.35-.85l-.07-2.14a.97.97 0 0 0-.32-.68A11.39 11.389 0 0 1 .002 11.64zm8.32-2.19-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87-.01l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86.01l-2.8-2.1a1.8 1.8 0 0 0-2.61.48z"/>
    </svg>
  );
}

const tools: { Icon: React.ComponentType<{ className?: string }>; color: string; hoverBg?: string; variant?: "dark" | "branded" | "light" }[] = [
  { Icon: MakeIcon, color: "#6D00CC", hoverBg: "#FFFFFF", variant: "dark" },
  { Icon: N8nIcon, color: "#EA4B71", hoverBg: "#EA4B71", variant: "branded" },
  { Icon: SlackIcon, color: "#E01E5A", hoverBg: "#FFFFFF", variant: "light" },
  { Icon: GitHubIcon, color: "#181717", hoverBg: "#FFFFFF", variant: "dark" },
  { Icon: MessengerIcon, color: "#0099FF", hoverBg: "#FFFFFF", variant: "light" },
  { Icon: NotionIcon, color: "#000000", hoverBg: "#FFFFFF", variant: "dark" },
  { Icon: GoogleSheetsIcon, color: "#0F9D58", hoverBg: "#FFFFFF", variant: "light" },
  { Icon: HubSpotIcon, color: "#FF7A59", hoverBg: "#FFFFFF", variant: "light" },
  { Icon: GmailIcon, color: "#EA4335", hoverBg: "#F2F2F2", variant: "light" },
  { Icon: WhatsAppIcon, color: "#25D366", hoverBg: "#FFFFFF", variant: "light" },
];

export function SocialProof() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y border-white/10 relative overflow-hidden bg-black/80">
      <div className="py-12 relative">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 mb-8 px-6">
          {t.socialProof.label}
        </p>
        <div className="overflow-hidden" aria-hidden="true">
          <div className="flex gap-12 w-max animate-marquee">
            {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
              <div
                key={i}
                className={`icon-card ${tool.variant === "dark" ? "icon-card-dark" : ""} ${tool.variant === "branded" ? "icon-card-branded" : ""} ${tool.variant === "light" ? "icon-card-light" : ""} ${i % tools.length === activeIndex ? "icon-active" : ""} w-20 h-20 shrink-0 rounded-2xl bg-neutral-900 border border-white/20 flex items-center justify-center`}
                style={{ "--brand-color": tool.color, "--hover-bg": tool.hoverBg || "transparent" } as React.CSSProperties}
              >
                <tool.Icon className="w-10 h-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
