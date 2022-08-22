import React, { Component } from 'react';
import { FeedbackBtnList } from './FeedbackBtnList/FeedbackBtnList';
import { Section } from './Section/Section';
import { StatisticsList } from './Statistics/StatisticsList';

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

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, feedback) => total + feedback);

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = good / total;
    return Math.round(result * 100);
  };

  render() {
    return (
      <>
        <Section title={'Leave feedback'}>
          <FeedbackBtnList
            buttons={Object.keys(this.state)}
            onClick={this.handleCurrentBtnClick}
          ></FeedbackBtnList>
        </Section>
        <Section title={'Statistics'}>
          <StatisticsList
            stats={this.state}
            countTotal={this.countTotalFeedback()}
            countPositive={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

// /* <Title text={'Leave a feedback'} />; */

// <StatisticsTitle text={'Statistics'} />;
