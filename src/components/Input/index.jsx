import React from "react";
import PropTypes from "prop-types";
//this ErrorMessage is imported from node modules folders....
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = { fill: { gray_200: "bg-gray-200 text-black-900" } };
const shapes = { round: "rounded-[10px]" };
const sizes = { xs: "pb-[11px] pt-3 px-[11px]" };

const Input = React.forwardRef(( { wrapClassName = "", className = "", name = "",placeholder = "",type = "text",children,errors = [],label = "",prefix,suffix,onChange,shape = "round",size = "xs",variant = "fill",color = "gray_200",...restProps},ref,) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div className={`${wrapClassName}  ${shapes[shape] || ""} ${variants[variant]?.[color] || ""}  ${sizes[size] || ""}`} >
          {!!label && label} {!!prefix && prefix}
          <input ref={ref} className={`${className} bg-transparent border-0`} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps}/>
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_200"]),
};

export { Input };
