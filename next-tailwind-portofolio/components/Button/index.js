const index = ({ children, variant, classname }) => {
  const addclassName = classname ? `${classname}` : "";
  const variants = {
    "outline-yellow": "bg-transparent border-2 border-primary text-primary",
    yellow: "bg-primary text-black",
  };

  const variantPicked = variants[variant];
  return (
    <button
      className={` rounded-full px-9 py-2.5  text-lg font-semibold ${addclassName} ${variantPicked}`}
    >
      {children}
    </button>
  );
};

export default index;
