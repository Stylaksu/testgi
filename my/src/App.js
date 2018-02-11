import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

export default App;
 <div style={{width: '90%', margin: '0 auto'}}>

          <AuthorList>
            {this.state.data ? this.state.data.map(author => {
              return (
                <ListItem key={author.id}>
                  #{author.id}, {author.name} <i style={{color:'silver'}}>as {author.email}</i>
                  <ul>
                    {author.posts.map(post => {
                      return(
                        <ListItem key={post.id}>#{post.id} - {post.title}</ListItem>
                      )
                    })}

                  </ul>
                </ListItem>
              )
            }) : <Loading>loading...</Loading>}
          </AuthorList>

          {/* data rendering end */}

          {
            this.state.data ? <DataDebug>{JSON.stringify(this.state.data, null, 2)}</DataDebug> : null
          }

        </div>