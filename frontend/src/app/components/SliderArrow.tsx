import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface SliderArrowProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
  direction: string;
}

const SliderArrow = (props: SliderArrowProps) => {
  const { className, onClick, type, direction } = props;

  return (
    <div
      className={clsx(className, 'slider-arrow')}
      onClick={onClick}
      data-arrow-type={type}
    >
      {direction === 'next' && <i className="bi bi-arrow-right" />}
      {direction === 'prev' && <i className="bi bi-arrow-left" />}
    </div>
  );
};

export default SliderArrow;
