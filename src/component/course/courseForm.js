import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// class courseFrom extends React.Components {
	const CourseForm = ({course, allAuthor, onSave, onChange, loading, error}) => {
		return (
			<form>
			<h1>Manage Course </h1>
			<TextInput
			name="title"
			label="Title"
			value={course.title}
			onChange={onChange}
			error={error.title}
			/>

			<SelectInput
			name="authorId"
			label="Author"
			value={course.authorId}
			onChange={onChange}
			option={allAuthor}
			error={error.authorId}
			defaultOption="select Author"
			/>

			<TextInput
			name="category"
			label="Category"
			value={course.category}
			onChange={onChange}
			error={error.category}
			/>

			<TextInput
			name="length"
			label="Length"
			value={course.length}
			onChange={onChange}
			error={error.length}
			/>

			</form>
		);
	}

CourseForm.propTypes = {
	course: React.PropTypes.object.isRequired,
	allAuthor: React.PropTypes.array,
	onSave: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.object.isRequired,
	loading: React.PropTypes.bool,
	error: React.PropTypes.object
};

export default CourseForm;
