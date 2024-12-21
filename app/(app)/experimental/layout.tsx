export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full max-w-4xl h-full items-center">
      {children}
    </div>
  );
}
