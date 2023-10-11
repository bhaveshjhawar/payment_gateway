import { useState } from "react";

const Faq = ({ faq, dataBsParent }) => {
  const [active, setActive] = useState("");

  const handleFaq = (e) => {
    setActive(e.target.name);
  };

  const { id, title, desc } = faq;
  const collapseId = `collapse-${id}`;

  return (
    <div className={`accordion-item ${active === collapseId && "intro"}`}>
      <h6
        className="accordion-header"
        // id="flush-headingOne"
      >
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded="false"
          aria-controls={collapseId}
          name={collapseId}
          onClick={handleFaq}
        >
          {title}
        </button>
      </h6>
      <div
        id={collapseId}
        className="accordion-collapse collapse"
        // aria-labelledby="flush-headingOne"
        data-bs-parent={`#${dataBsParent}`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
