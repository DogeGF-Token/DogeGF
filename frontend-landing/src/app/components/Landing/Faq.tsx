import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export interface FaqData {
  faq: any;
  index: number;
}

const Faq = ({ faq, index }: FaqData) => {
  return (
    <li key={index} className="faq-box">
      <div
        className="question-box d-flex align-items-center"
        data-bs-toggle="collapse"
        data-bs-target={`#faq-${index}-answer`}
      >
        <i className="faq-icon bi bi-plus fs-3" />
        <span className="faq-title">{faq.question}</span>
      </div>
      <div
        className="answer-box collapse"
        id={`faq-${index}-answer`}
        data-faq-id={`faq-${index}`}
      >
        {documentToReactComponents(faq.answer.json)}
      </div>
    </li>
  );
};

export default Faq;
