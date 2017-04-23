import React from 'react';
import { Button } from 'antd';

class coursePage extends React.Component {
     constructor(props) {
     	super(props);

     	this.state = { 
            course: {title: null}
     	};
     }

     onTitleChange(event) {
     	const course= this.state.courses;
     	course.title= event.target.value;
     	this.setState= { course: course}
     }

     onClick() {
     	alert(save {this.state.courses.title});
     }

  render() {
    return(
      <div>
      <h1> courses </h1>
      <Button type="primary">Add Course</Button>
        <input
      	  type="text"
      	  onChange={this.onTitleChange}
      	  value={this.state.course.title} />

      	<input
      	  type="submit"
      	  value="save"
      	  onClick={this.onClick} />

      </div>
    );
  }
}

export default coursePage;
