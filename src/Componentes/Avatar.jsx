const Avatar = () => {
  return (
    <div>
      <img
        className="w-[2.5vw] rounded-full absolute top-0 right-20 mt-4"
        src="/public/icons/auj-white-logo@2x.png"
        alt="icon avatar"
      />
      <h4 className="absolute top-0 right-7 mt-5 font-bold">USER</h4>
      <p className="absolute top-0 right-11 mt-10 text-[0.9rem]">Rol</p>
    </div>
  );
};

export default Avatar;
