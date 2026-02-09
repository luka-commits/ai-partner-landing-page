import type { HTMLAttributes } from "react";
import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const el = ref.current;
            el.style.setProperty('background-color', '#ffffff', 'important');
            el.style.setProperty('border-radius', '9999px', 'important');
            el.style.setProperty('border', 'none', 'important');
            el.style.setProperty('box-shadow', '0 0 30px rgba(255,255,255,0.15)', 'important');
            el.style.setProperty('display', 'inline-flex', 'important');
            el.style.setProperty('cursor', 'pointer', 'important');
        }
    }, []);

    return (
        <div
            ref={ref}
            role="button"
            tabIndex={0}
            {...props}
            className={`btn-colorful ${className || ''}`}
            style={{
                backgroundColor: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 48px',
                borderRadius: '9999px',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 50,
                border: 'none',
                boxShadow: '0 0 30px rgba(255,255,255,0.15)',
                fontSize: '18px',
                fontWeight: 700,
            }}
        >
            <span
                className="btn-colorful-text"
                style={{
                    backgroundImage: 'linear-gradient(to right, #2563eb, #10b981)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {label}
            </span>
            <ArrowUpRight style={{ color: '#2563eb', width: '14px', height: '14px' }} />
        </div>
    );
}
