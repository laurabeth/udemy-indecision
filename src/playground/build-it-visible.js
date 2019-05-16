class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    }
  }

  render() {
    const title = "Visibility Toggle";
    const details = "These are some more important details";

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.toggleVisibility}>{!this.state.visibility ? "Show details" : "Hide details"}</button>
        {this.state.visibility && ( <p>{details}</p> )}
      </div>
    );
  }

  toggleVisibility() {
    this.setState((prevProps) => {
      return{
        visibility: !prevProps.visibility,
      }
    });
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let app = {
//     title: "Visibility Toggle",
//     details : "These are some more important details.",
//     isTextVisible : false,
// };

// let visible = {
//     visibility: "visible"
// };

// const invisible = {
//     visibility: "hidden",
// };


// const toggleVisibility = () => {
//     app.isTextVisible = !app.isTextVisible;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{!app.isTextVisible ? "Show details" : "Hide details"}</button>
//             {app.isTextVisible && (
//                 <p>{app.details}</p>
//             )}
//             {/*<p style={app.isTextVisible ? visible : invisible}>{app.details}</p>*/}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById("app"));
// };

// render();