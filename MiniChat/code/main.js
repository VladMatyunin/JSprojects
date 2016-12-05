var Message = React.createClass({

    render: function () {
        if (this.props.author == 1) {
            return (
                <div className="myMessage">
                    {this.props.name}
                    {this.props.text}
                    {this.props.date}
                </div>
            );
        }
        else {
            return (
                <div className="outMessage">
                    me
                    {this.props.text}
                    {this.props.date}
                </div>
            )
        }
    }
});


var HelloWorld = React.createClass({
    loadMessages: function () {

        $.ajax({
            url: 'http://localhost:8888/messages/load',
            dataType : 'json',
            success: function(data){
                messages = data
            }
        });
    },
    messages : loadMessages,
    render: function () {
        this.state.messages.map(function (el) {
            return <Message name={el.name} author={el.author} text={el.text} date={el.date}/>
        });
    }
});
ReactDOM.render(
    <HelloWorld name="FUCK"/>
    ,
    document.getElementById('messageBox'));

