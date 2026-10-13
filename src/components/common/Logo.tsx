/*
 * SPDX-FileCopyrightText: 2020 Stalwart Labs LLC <hello@stalw.art>
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-SEL
 */

import { useTranslation } from 'react-i18next';
export function DefaultLogo() {
  const { t } = useTranslation();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 236 64"
      role="img"
      aria-label={t('logo.stalwartAlt', 'Maildesk logo')}
      className="h-8 w-auto max-w-[320px]"
    >
      <defs>
        <linearGradient id="maildesk-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4f46e5" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#maildesk-grad)" />
      <rect x="12" y="18" width="40" height="28" rx="5" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
      <path d="M14 22 L32 35 L50 22" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="20" r="5.5" fill="#facc15" stroke="#fff" strokeWidth="2.5" />
      <text x="76" y="43" className="fill-current" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif" fontSize="34" fontWeight="700" letterSpacing="-0.5">
        Maildesk
      </text>
    </svg>
  );
}
export default function Logo() {
  return <DefaultLogo />;
}
