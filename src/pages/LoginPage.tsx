/*
 * SPDX-FileCopyrightText: 2020 Stalwart Labs LLC <hello@stalw.art>
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-SEL
 */

import { type FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Loader2 } from 'lucide-react';

import Logo from '@/components/common/Logo';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { startAuthFlow } from '@/services/auth/oauth';

export default function LoginPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const originalPath = (location.state as { from?: string } | null)?.from ?? null;
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useDocumentTitle(t('login.title', 'Sign in'));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed) return;

    setError(null);
    setLoading(true);

    try {
      await startAuthFlow(trimmed, originalPath);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('login.error', 'An unexpected error occurred'));
      setLoading(false);
    }
  }

  return (
    <div className="brand-glow flex min-h-screen flex-col items-center justify-center px-4">
      <Card className="page-enter w-full max-w-sm rounded-3xl border-primary/10 bg-card/90 shadow-2xl shadow-primary/10 backdrop-blur">
        <CardHeader className="items-center text-center">
          <Logo />
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-center text-lg font-semibold">{t('login.welcome', 'Welcome back')}</h1>
              <p className="text-center text-sm text-muted-foreground">
                {t('login.prompt', 'Enter your account name to continue')}
              </p>
              <Input
                id="username"
                type="text"
                autoComplete="username"
                autoFocus
                placeholder={t('login.usernamePlaceholder', 'user@example.com')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                aria-label={t('login.prompt', 'Enter your account name to continue')}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={loading || !username.trim()}>
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {t('login.continue', 'Continue')}
                  <ArrowRight />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      <p className="mt-6 text-xs text-muted-foreground">
        {t('login.footer', 'Secure mail administration')}
      </p>
    </div>
  );
}
