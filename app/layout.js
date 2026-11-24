export const metadata = {
  title: 'Mini CRM Dashboard',
  description: 'Manage customer leads and enquiries',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
