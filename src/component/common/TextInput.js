import React,{propTypes} from 'react';

const TextInput ={(name, label, onChange, placeholder, value, error)} => {
	let WrapperClass = 'form-group';
	if(error && error.length> 0) {
		WrapperClass += "" + 'has-error';
	}

	return(
		<div className={WrapperClass}>
			<label htmlFor={name}>{label}</label>
			<div className="field">
			<input
			type="text"
			name={name}
			className="form-control"
			placeholder={placeholder}
			value={value}
			onChange={onChange}/>
			{error && <div className="alert alert-danger">{error}</div>}
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: propTypes.string.isRequired,
	label: propTypes.string.isRequired,
	onChange: propTypes.func.isRequired,
	placeholder: propTypes.string,
	value: propTypes.string,
	error: propTypes.string,
}

export default TextInput;