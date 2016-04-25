class Label extends React.Component {
    render() {
        return (
            <label className="label">"I'm an allmighty label"</label>
        )
    }
}

function renderLabel() {
    ReactContentRenderer.render(<Label/>);
}