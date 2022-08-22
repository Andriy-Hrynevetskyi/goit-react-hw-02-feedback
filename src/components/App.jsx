import React, { Component } from 'react';
import { Title } from './Title/Title';
import { FeedbackBtnList } from './FeedbackBtnList/FeedbackBtnList';
import { StatisticsList } from './Statistics/StatisticsList';
import { StatisticsTitle } from './Statistics/StattisticsTitle/StatisticsTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCurrentBtnClick = event => {
    const currentBtn = event.currentTarget.textContent;
    this.setState(prevState => ({ [currentBtn]: prevState[currentBtn] + 1 }));
  };

  render() {
    return (
      <>
        <Title text={'Leave a feedback'} />
        <FeedbackBtnList
          buttons={Object.keys(this.state)}
          onClick={this.handleCurrentBtnClick}
        ></FeedbackBtnList>
        <StatisticsTitle text={'Statistics'} />
        <StatisticsList stats={this.state} />
      </>
    );
  }
}
