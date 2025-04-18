import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  // Focus the input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Focus the input when button is clicked
  const handleButtonClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
