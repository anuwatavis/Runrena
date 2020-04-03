import React, { Component } from "react";
import Avatar from "react-avatar";
import { Card, Row, Col, Badge } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { followerAction } from "../store/actions/followerAction";
class UserProfile extends Component {
  state = {
    userId: this.props.userId,
    followerProfile: this.props.followerProfile,
    followerId: this.props.followerId,
    followedState: this.props.followedState.followerState,
    activitiesCount: this.props.activities.length
  };

  handelFollowerClicked = e => {
    let followedStateInvert = !this.state.followedState;
    this.setState({ followedState: followedStateInvert });
    let userId = this.state.userId;
    let followerId = this.state.followerId;
    let data = { userId: userId, followerId: followerId, followerState: followedStateInvert };
    this.props.followerAction(data);

    console.log("UserProfile -> data", data);
  };
  render() {
    console.log(`this state --> `, this.state.followedState);
    return (
      <div className="container dashboard">
        <Card>
          <Row className="text-center align-items-center">
            <Col>
              <div className="mt-2">
                <Avatar
                  name="Anu Wat"
                  size="70"
                  round={true}
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/08/kichoge-winning-london_s.jpg?itok=oiezBvCc"
                />
              </div>
              {this.state.followerProfile ? <h5>{this.state.followerProfile[0].firstName}</h5> : null}
              {this.state.followedState ? (
                <Button color="primary" size="sm" className="rounded-70 mb-3" onClick={this.handelFollowerClicked}>
                  unfollow
                </Button>
              ) : (
                <Button color="primary" size="sm" className="rounded-70 mb-3" onClick={this.handelFollowerClicked}>
                  follow
                </Button>
              )}
            </Col>
            <Col>
              <Row>
                <Col md="4" className="stat-list px-0">
                  <div className="font-weight-bold">Follwers</div>
                  <div>12</div>
                </Col>
                <Col md="4" className="stat-list px-0">
                  <div className="font-weight-bold">Follwing</div>
                  <div>123</div>
                </Col>
                <Col md="4" className="px-0">
                  <div className="font-weight-bold">Activities</div>
                  <div>11</div>
                </Col>
                <Col md="12" className="mt-4">
                  {/* <h4>{profile ? <Badge color="secondary">{profile[0].quote}</Badge> : null}</h4> */}
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="font-weight-bold">last 4 weeks</div>
              <div className="display-4">{this.state.activitiesCount}</div>
              <div>total activities</div>
            </Col>
            <Col>
              <Link to={"/profile/"}>
                <Button color="secondary" size="sm">
                  <i className="fas fa-user-edit"></i>
                </Button>
                <h6>
                  <Badge color="secondary">Edit Profile</Badge>
                </h6>
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    followerAction: data => dispatch(followerAction(data))
  };
};

export default connect(null, mapDispatchToProps)(UserProfile);
