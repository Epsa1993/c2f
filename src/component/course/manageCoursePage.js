import React, {propType} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class manageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		render() {
			return (
				<h1> Manage Course Page </h1>
				);
		}
	}

manageCoursePage.propType= {

}

function mapStateToProps(state, ownprops) {
	return {
		state: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		action: bindActionCreators (actions, dispatch)
	};
}

export default connect (mapStateToProps, mapDispatchToProps)(manageCoursePage);