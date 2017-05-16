import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// class courseFrom extends React.Components {
	const CourseForm = {(course, allAuthor, onSave, onChange, loading, error)} => {
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

			<input
			type=submit
			disabled={loading}
			value={loading ? 'saving...' : 'save'}
			className=""
			onclick={onSave}
			/>
			</form>
		);
	}

courseForm.propTypes = {
	course: React.propTypes.object.isRequired,
	allAuthor: React.propTypes.array,
	onSave: React.propTypes.object.isRequired,
	onChange: React.propTypes.object.isRequired,
	loading: React.propTypes.bool,
	error: React.propTypes.object,
};

export default CourseForm;
			
