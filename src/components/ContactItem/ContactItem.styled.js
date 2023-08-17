import { Component } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Layout } from "./Layout";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  
    handleFeedback = type => {
    //   this.setState(prevState => {
    //     return {
    //     [type]: prevState[type] + 1
    // }})
    };
  
    countTotalFeedback = () => {
    //   const { good, neutral, bad } = this.state;
    //   const total = good + neutral + bad;
    //   return total;
    };
  
    countPositiveFeedbackPercentage = () => {
    //   const { good } = this.state;
    //   const persent = Math.round((good / this.countTotalFeedback()) * 100);
    //   return persent;
    };
  
    handleReset = () => {
    //   this.setState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    // })
    };
  
    render () {
    
     return (
      <Layout>
    
        <h1>Phonebook</h1>
        <ContactForm  />

        <h2>Contacts</h2>
        <Filter  />
        <ContactList  />

      <GlobalStyles/>
      </Layout>
    );
  };
  }