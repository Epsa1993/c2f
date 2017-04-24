import React from 'react';
// import { Button } from 'antd';

class coursePage extends React.Component {
     constructor(props, context) {
      super(props, context);
      this.state = {
        course: {title: ''}
      };
      this.onTitleChange = this.onTitleChange.bind(this);
      }

      onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course})
      }

      onClick() {
        alert('save ${this.state.course.title}');
      }

  render() {
    return(
      <div>
      <h1> courses </h1>
      // <input Butto type="primary">Add Course</Button>
      <input 
        type="text"
        onChange={this.onTitleChange}
        value={this.state.course.title}
         />
      <input
        type="submit"
        onClick={this.onClick}
        value="save"
        />
      </div>
    );
  }
}

export default coursePage;
