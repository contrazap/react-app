interface Props {
  para: string;
  expanded: boolean;
  onClick: () => void;
}

const ExpandableText = ({ para, expanded, onClick }: Props) => {
  const displayPara = expanded ? para : para.slice(0, 10) + "...";
  const buttonLabel = expanded ? "Less" : "More";

  return (
    <div>
      <p style={{ display: "inline-block" }}>{displayPara}</p>
      <button onClick={onClick}>{buttonLabel}</button>
    </div>
  );
};

export default ExpandableText;
