import "./globals.css";

export const metadata = {
  title: "Lekhahk.app",
  description: "Secure AI Processing Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
