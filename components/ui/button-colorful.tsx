import { useRef, useEffect } from "react";
import type { ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const baseGlow = '0 0 20px rgba(255,255,255,0.25), 0 0 40px rgba(255,255,255,0.1)';
        const hoverGlow = '0 0 30px rgba(255,255,255,0.45), 0 0 60px rgba(255,255,255,0.2)';

        // Inline !important via JS — cannot be overridden by any external CSS
        el.style.setProperty('background', '#ffffff', 'important');
        el.style.setProperty('background-color', '#ffffff', 'important');
        el.style.setProperty('background-image', 'none', 'important');
        el.style.setProperty('border-radius', '9999px', 'important');
        el.style.setProperty('border', 'none', 'important');
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('filter', 'none', 'important');
        el.style.setProperty('box-shadow', baseGlow, 'important');
        el.style.setProperty('transition', 'box-shadow 0.3s ease', 'important');

        const onEnter = () => el.style.setProperty('box-shadow', hoverGlow, 'important');
        const onLeave = () => el.style.setProperty('box-shadow', baseGlow, 'important');
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);

        // Re-apply after Cal.com embed potentially injects styles
        const observer = new MutationObserver(() => {
            if (el) {
                el.style.setProperty('background', '#ffffff', 'important');
                el.style.setProperty('background-color', '#ffffff', 'important');
                el.style.setProperty('background-image', 'none', 'important');
            }
        });
        observer.observe(document.head, { childList: true, subtree: true });
        return () => {
            observer.disconnect();
            el.removeEventListener('mouseenter', onEnter);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <button
            ref={ref}
            type="button"
            {...props}
            className={`btn-colorful ${className || ''}`}
        >
            <span className="btn-colorful-text">
                {label}
            </span>
            <ArrowUpRight style={{ color: '#2563eb', width: '14px', height: '14px' }} />
        </button>
    );
}
