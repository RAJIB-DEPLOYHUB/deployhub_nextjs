export const metadata = {
  title: 'DeployHub Next.js',
  description: 'DeployHub Next.js Starter Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
