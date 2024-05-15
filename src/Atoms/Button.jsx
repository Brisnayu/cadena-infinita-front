function Button({ text, bgColor }) {
  const bgClass = `bg-${bgColor.replace(/ /g, "-")}`;

  return (
    <button type="submit" 
    className={`p-2 mt-4 ${bgColor} `}>
      {text}
    </button>
  );
}

export default Button;
