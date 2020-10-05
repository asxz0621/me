import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { Item   } from 'semantic-ui-react';
import faker from 'faker';
console.log(faker)
const data = [];
for (let id = 0; id < 6; id++) {
  var image = "https://picsum.photos/400/200?random=" + id;
  let title =  faker.lorem.sentence(8);
  let desc =  faker.lorem.sentence(40);
  let date = faker.date.between(2019,2020).getFullYear()+'-'+(faker.date.between(2019,2020).getMonth()+1)+'-'+faker.date.between(2019,2020).getDate()
  data.push({
    "key":id,
    "image": image,
    "title": title,
    "desc": desc,
    "date": date
  })
}
class list extends Component {
    render() {
        return (
          <Item.Group>
            <ul className="conlist">
              {data.map((item) =>
                <Item key={item.key}>
                  <Item.Image size='tiny' src={item.image} />
            
                  <Item.Content>
                    <Item.Header as='a'>{item.title}</Item.Header>
                    <Item.Description>
                      {item.desc}
                    </Item.Description>
                    <Item.Extra>{item.date}</Item.Extra>
                  </Item.Content>
                </Item>
              )}
              
            </ul>
            </Item.Group>

        )
    }
}
export default list