import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import {Message  } from 'semantic-ui-react';


import faker from 'faker';
console.log(faker)
const data = [];
for (let id = 0; id < 6; id++) {
  let title =  faker.lorem.sentence(8);
  let desc =  faker.lorem.sentence(20);
  let date = faker.date.between(2019,2020).getFullYear()+'-'+(faker.date.between(2019,2020).getMonth()+1)+'-'+faker.date.between(2019,2020).getDate()
  data.push({
    "title": title,
    "desc": desc,
    "date": date
  })
}
class list extends Component {
    render() {
        return (
            <div className="news">
            <ul>
            {data.map((item, key) =>
              <li key={key}>
                  <a href="">
                      <Message.Header>{item.title}</Message.Header>
                      <Message.Content>
                              {item.desc}
                      </Message.Content>
                  </a>
                </li>
              )}
              
            </ul>
          </div>

        )
    }
}
export default list