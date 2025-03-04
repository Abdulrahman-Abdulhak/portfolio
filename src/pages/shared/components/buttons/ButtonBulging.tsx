import React from "react";

type Props = {
  onclick: () => void;
  label: string;
};

const ButtonBulging: React.FC<Props> = ({ onclick, label }) => {
  return (
    <button
      type="button"
      className="px-7 py-4 border border-solid font-itim shadow-buttonBulge shadow-white"
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default ButtonBulging;
