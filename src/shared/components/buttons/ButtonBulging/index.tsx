import React from "react";
import "./style.css";

type Props = {
  onclick: () => void;
  label: string;
  color?: string;
};

const ButtonBulging: React.FC<Props> = ({ onclick, label, color }) => {
  //* Ensure the label's first word is in lowercase form and the rest is capitalized
  const labelWords = label.toWords();
  const transformedLabel =
    labelWords.shift()?.toLowerCase() +
    (labelWords.length ? " " : "") +
    labelWords.map((w) => w.capitalize()).join(" ");

  const style = {
    "--color": color ?? "currentcolor",
  } as React.CSSProperties;

  return (
    <button
      type="button"
      style={style}
      className="button-bulging px-7 py-4 border border-solid font-itim"
      onClick={onclick}
    >
      {transformedLabel}
    </button>
  );
};

export default ButtonBulging;
