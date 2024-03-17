
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="flex-grow mx-auto container px-4">

          {children}
        </div>

  );
}
