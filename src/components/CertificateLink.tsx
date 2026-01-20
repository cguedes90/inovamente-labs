'use client';

import React from 'react';

interface CertificateLinkProps {
    href: string;
    label?: string;
}

const CertificateLink: React.FC<CertificateLinkProps> = ({ href, label = 'Ver atestado técnico completo →' }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                color: '#2563eb',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'text-decoration 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
            📄 {label}
        </a>
    );
};

export default CertificateLink;
