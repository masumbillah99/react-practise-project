const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const inputValue = e.target.valueAsNumber || 0;
    onChange(inputValue);
  };

  return (
    <input
      type="number"
      min={0}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default NumberInput;
