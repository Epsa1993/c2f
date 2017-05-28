import React, {propTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as CourseAction from '../../action/courseActions';
import * as AuthorAction from '../../action/authorActions';
import CourseForm from './courseForm';

class manageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			errors: {}
		};
	}

	render() {
			return (
			<div>
				<h1> Manage Course Page </h1>
				<CourseForm 
					course={this.state.course}
					error={this.state.error}
					allAuthor={this.props.authors}
				/>
			</div>
			);
		}
}

manageCoursePage.propType= {
	course: propTypes.object.isRequired,
	authors: propTypes.array.isRequired
}

function mapStateToProps(state, ownprops) {
	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

	const authorFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});
	return {
		// state: state
		course: course,
		authore: authorFormattedForDropdown
	}
}
function mapDispatchToProps(dispatch) {
return {
	action: bindActionCreators (CourseAction, dispatch)
	};
}

export default connect (mapStateToProps)(manageCoursePage);
