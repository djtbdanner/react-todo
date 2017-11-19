var React = require('react');

var Todo = React.createClass({

  render: function() {
    var {id, text, message} = this.props;
    return (
      <div>
        {id}: {text}  - {message}
      </div>
    );
  }
});

module.exports = Todo;
