// import "./globals.css";

// export const metadata = {
//   title: "Lekhahk.app",
//   description: "Secure AI Processing Platform",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className="min-h-screen bg-gray-50">
//         <div className="max-w-6xl mx-auto p-6">
//           {children}
//         </div>
//         <div className="bg-white dark:bg-black text-black dark:text-white p-4">
//           Dark mode test
//         </div>
//       </body>
//     </html>
//   );
// }


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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="max-w-6xl mx-auto p-6">
          {children}
        </div>

        <div className="bg-white dark:bg-black text-black dark:text-white p-4">
          Dark mode test
        </div>
      </body>
    </html>
  );
}
