import React from 'react';
// import { Button } from 'antd';

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
        alert('saving ${this.state.course.title}');
      }

  render() {
    return(
      <div>
      <h1> courses </h1>
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

export default coursePage;
