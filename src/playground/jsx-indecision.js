console.log('App.js is running!')

let app = {
    title: "Indecision App",
    subtitle: "Have faith",
    options: [],
}; 

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderIndecision();
    }
};

const removeOptions = () => {
    app.options = [];
    renderIndecision();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

const renderIndecision = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options."}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    console.log(option.key);
                    return <li key={option}>{option}</li> 
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIndecision();
