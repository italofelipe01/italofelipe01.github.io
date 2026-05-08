import React, { Component } from "react";
import { Fade } from "../../components/animation/Reveal";
import CommitCard from "../../components/commitCard/CommitCard";
import commitsData from "../../shared/opensource/commits.json";
import "./Commits.css";

class Commits extends Component {
  render() {
    const theme = this.props.theme;

    if (!commitsData.data?.length) {
      return null;
    }

    return (
      <div>
        <div className="commits-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="commits-header" style={{ color: theme.text }}>
              Recent Commits
            </h1>
          </Fade>
          <p className="commits-subtitle" style={{ color: theme.secondaryText }}>
            Latest public GitHub activity across repositories
          </p>
        </div>
        <div className="commits-body-div">
          {commitsData.data.map((commit) => {
            return <CommitCard key={commit.sha} commit={commit} />;
          })}
        </div>
      </div>
    );
  }
}

export default Commits;
