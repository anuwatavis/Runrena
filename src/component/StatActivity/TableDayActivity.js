import React, { Component } from "react";
import { Table } from "reactstrap";
class TableDayActivity extends Component {
  state = {
    activities: this.props.activityUserByDate,
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ activities: nextProps.activityUserByDate });
  }
  render() {
    const { activities } = this.state;
    return (
      <div>
        <h5 className="text-center">Activity Summary</h5>
        <Table striped className="table-date-stat table-striped">
          <thead className="table-date-stat">
            <tr className="text-center">
              <th>Title</th>
              <th>Distance</th>
              <th>Pace</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {activities &&
              activities.map((activity) => {
                return (
                  <tr key={Math.random()}>
                    <td>{activity.titleActivity}</td>
                    <td>{activity.totalDistance}</td>
                    <td>{activity.averagePace}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableDayActivity;
