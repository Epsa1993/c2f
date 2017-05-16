import React,{propTypes} from 'react';

const SelectInput ={(name, label, onChange, placeholder, defaultOption, value, error)} => {
	let WrapperClass = 'form-group';
	if(error && error.length> 0) {
		WrapperClass += "" + 'has-error';
	}

	return(
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<div className="field">
			<select
			name={name}
			className="form-control"
			onChange={onChange}
			value={value}
			onChange={onChange}
			<option value="">{defaultOption}</option>
			{options.map((option) => {
				return <option key={option.value} value={option.value}>{option.text}</option>;
			})
			}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	);
};

SelectInput.propTypes = {
	name: propTypes.string.isRequired,
	label: propTypes.string.isRequired,
	// onChange: propTypes.func.isRequired,
	defaultOption: propTypes.string,
	value: propTypes.string,
	error: propTypes.string,
	options: propTypes.arrayOf(propTypes.object)
};

export default SelectInput;