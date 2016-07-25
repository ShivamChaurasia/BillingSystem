import React from 'react';

class TableComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let self = this,
            tableRow = this.props.data.map(function(value, index) {
                return (<tr key={index}>
              {self.props.headers.map(function(d,i){
                if (d === "Remove") {
                  return (<td className="removeIcon" key={value[d]+i} onClick={self.props.removeObject.bind(this,value)}><img className="deleteIcon" src={"./img/delete.ico"}></img></td>);
                } else {
                  return (<td key={value[d]+i}>{value[d]}</td>);
                }
              })}
              </tr>);
            }),
            tableHeader = self.props.headers.map(function(d, i) {
                return (<th key={self.props.headers[i]}>{self.props.headers[i]}</th>);
            });

        return (
            <table><thead><tr>{tableHeader}</tr></thead><tbody>{tableRow}</tbody></table>
        );
    }

}

export default TableComponent;
