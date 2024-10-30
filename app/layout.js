import './globals.css';

export const metadata = {
  title: 'E-Academy Login',
  description: 'Login page for E-Academy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
