interface PageProps {
  children: React.ReactNode;
}
function Page({ children }: PageProps) {
  return <main className="page">{children}</main>;
}

export default Page;
