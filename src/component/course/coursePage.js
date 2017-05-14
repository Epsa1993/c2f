import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import * as courseActions from '../../action/courseActions';
import { bindActionCreators } from "redux";

class coursePage extends React.Component {
     constructor(props, context) {
        super(props, context);
        this.state = {
          course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClick = this.onClick.bind(this);
      }

      onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course})
      }

      onClick() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
      }

      courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
      }

  render() {
    return(
      <div>
      <h1> courses </h1>
      {this.props.courses.map(this.courseRow)}

      <input
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title}
        />
      <input
        type="submit"
        value="submit"
        onClick={this.onClick}
        />
      </div>
    );
  }
}

coursePage.propTypes = {
  // action: PropTypes.func.isRequired,
  // createCourses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(coursePage);
