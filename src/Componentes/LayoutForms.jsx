const LayoutForms = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradiente01">
      <img
        className="w-[10rem] h-auto absolute top-4 right-10"
        src="/icons/auj-white-logo-no-bg.png"
        alt="icon AuJ"
      />
      <main>{children}</main>
    </div>
  );
};

export default LayoutForms;
