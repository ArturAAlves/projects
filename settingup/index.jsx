class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>How Are You</h1>
                <h2>Cool Day</h2>
                <h3>How do you feel?</h3>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.querySelector("#root"))
