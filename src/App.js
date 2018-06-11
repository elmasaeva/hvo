import i18next from 'i18next';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader'
import './App.css';

import {CitizenshipWhy, CitizenshipWho} from './Citizenship';
import {TemporaryWhy, TemporaryWho} from './Temporary';
import {ImmigrationWhy, ImmigrationWho} from './Immigration';

class Block extends Component {
    state = {expanded: false};
    handleExpand = (event)=> {
        event.preventDefault();
        this.setState({expanded: !this.state.expanded});
    };

    render() {
        const [title, ...rest] = this.props.children;
        return (<section>
            <a href="#expand" onClick={this.handleExpand} >{title}</a>
            {this.state.expanded && (<section>{rest}</section>)}
        </section>);
    }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <Block>
            <h1>{i18next.t('Citizenship')}</h1>
            <CitizenshipWhy />
            <CitizenshipWho />
        </Block>

        <Block>
            <h1>{i18next.t('Immigration')}</h1>
            <ImmigrationWhy />
            <ImmigrationWho />
        </Block>

        <Block>
            <h1>{i18next.t('Temporary Stay')}</h1>
            <TemporaryWhy />
            <TemporaryWho />
        </Block>
      </div>
    );
  }
}

export default hot(module)(App);
