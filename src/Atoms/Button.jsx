function Button({ text, bgColor }) {
  return (
    <button type="submit" className={`p-2 mt-4 ${bgColor} `}>
      {text}
    </button>
  );
}

export default Button;
